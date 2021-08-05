import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    ProductID: string;

    @Column()
    Name: string;

    @Column()
    Language: string;

    @Column()
    ParentID: string;

    @Column()
    Relation: string;

    @Column()
    Type: string;

    @Column()
    colorscheme: string;

    @Column()
    descriptionen: string;

    @Column()
    descriptionru: string;

    @Column()
    isDeleted: boolean;
}
