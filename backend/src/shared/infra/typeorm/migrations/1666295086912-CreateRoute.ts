import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRoute1666295086912 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'routes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'distance',
            type: 'numeric',
          },
          {
            name: 'originCity',
            type: 'varchar',
          },
          {
            name: 'destinationCity',
            type: 'varchar',
          },
          {
            name: 'originCompanyId',
            type: 'uuid',
          },
          {
            name: 'destinationCompanyId',
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
        //     name: 'FKOriginCompanyRoute',
        //     referencedTableName: 'companies',
        //     referencedColumnNames: ['id'],
        //     columnNames: ['originCompanyId'],
        //   },
        //   {
        //     name: 'FKDestinationCompanyRoute',
        //     referencedTableName: 'companies',
        //     referencedColumnNames: ['id'],
        //     columnNames: ['originCompanyId'],
        //   },
        // ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('routes');
  }
}
