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

    @Column({ nullable: true })
    Language: string;

    @Column({ nullable: true })
    ParentID: string;

    @Column({ nullable: true })
    Relation: string;

    @Column({ nullable: true })
    Type: string;

    @Column({ nullable: true })
    colorscheme: string;

    @Column({ nullable: true })
    descriptionen: string;

    @Column({ nullable: true })
    descriptionru: string;

    @Column()
    isDeleted: boolean;
}
