import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFreight1667474818537 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'freights',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'price',
            type: 'numeric',
          },
          {
            name: 'routeId',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'loadId',
            type: 'uuid',
            isNullable: true,
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
    await queryRunner.dropTable('freights');
  }
}
