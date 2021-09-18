import "reflect-metadata";

import bodyParser from "body-parser";
import cors from 'cors';
import Express from 'express';
import { createConnection } from "typeorm";

import { Product } from './entity/Product';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

declare let process: {
  env: {
    TYPE: 'postgres',
    HOST: string,
    PORT: number,
    USERNAME: string,
    PASSWORD: string,
    DATABASE: string
  }
};

const connectionOptions = {
  type: process.env.TYPE,
  host: process.env.HOST,
  port: process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [
    `${__dirname}/**/entity/*{.ts,.js}`
  ],
  synchronize: true,
};

const connection = createConnection(connectionOptions);

const App = Express();
App.use(cors());
App.use(bodyParser.json());

App.get('/data', (req, res) => {
  return connection.then(async connection => {
    const productRepository = connection.getRepository(Product);
    const allProduct = await productRepository.find();
    console.log('allProduct: ', allProduct);

    res.send(allProduct);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
});

App.post('/create', (req, res) => {
  return connection.then(async connection => {
    console.log('req.body: ', req.body);
    if (req.body) {
      const productRepository = connection.getRepository(Product);
      const newProduct = await productRepository.save(req.body);
      console.log('newProduct: ', newProduct);

      res.send(newProduct);
    }

    res.send();
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
});


App.listen(3001, () => {console.log("Backend successfully started!")});
