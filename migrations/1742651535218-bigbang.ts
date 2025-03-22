import { MigrationInterface, QueryRunner } from "typeorm";

export class Bigbang1742651535218 implements MigrationInterface {
    name = 'Bigbang1742651535218'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`teams\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`deleted_at\` datetime(6) NULL, \`name\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`deleted_at\` datetime(6) NULL, \`name\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`password\` varchar(100) NOT NULL, \`role\` varchar(20) NOT NULL, \`id_team\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_43fa4bc163ba92f3746f8aac70b\` FOREIGN KEY (\`id_team\`) REFERENCES \`teams\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_43fa4bc163ba92f3746f8aac70b\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`teams\``);
    }

}
