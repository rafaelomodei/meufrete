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
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'decimal',
            isNullable: true,
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
            name: 'driverId',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('freights');
  }
}
