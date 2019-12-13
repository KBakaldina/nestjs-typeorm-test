import {MigrationInterface, QueryRunner} from 'typeorm';

// tslint:disable-next-line:class-name
export class users1576236602137 implements MigrationInterface {
    name = 'users1576236602137';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `login` varchar(50) NOT NULL, `password` varchar(500) NOT NULL, `name` varchar(300) NOT NULL, `homeCityId` int NOT NULL, UNIQUE INDEX `IDX_a62473490b3e4578fd683235c5` (`login`), PRIMARY KEY (`id`)) ENGINE=InnoDB', undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP INDEX `IDX_a62473490b3e4578fd683235c5` ON `user`', undefined);
        await queryRunner.query('DROP TABLE `user`', undefined);
    }

}
