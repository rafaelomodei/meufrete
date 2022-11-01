import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompany1665768729177 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'certification',
            type: 'boolean',
          },
          {
            name: 'loadsId',
            type: 'uuid',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        // foreignKeys: [
        //   {
        //     name: 'FKLoadsCompany',
        //     referencedTableName: 'loads',
        //     referencedColumnNames: ['id'],
        //     columnNames: ['listLoads'],
        //   },
        // ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companies');
  }
}
