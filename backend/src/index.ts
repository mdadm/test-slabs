import "reflect-metadata";

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
  synchronize: false,
};

const connection = createConnection(connectionOptions);

const App = Express();
App.use(cors());

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

App.listen(3001, () => {console.log("Backend successfully started!")});
