import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCompaniesLoads1667421149767 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies_loads',
        columns: [
          {
            name: 'companyId',
            type: 'uuid',
          },
          {
            name: 'loadId',
            type: 'uuid',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'companies_loads',
      new TableForeignKey({
        name: 'FKCompanyLoads',
        referencedTableName: 'companies',
        referencedColumnNames: ['id'],
        columnNames: ['companyId'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      })
    );

    await queryRunner.createForeignKey(
      'companies_loads',
      new TableForeignKey({
        name: 'FKLoadCompanies',
        referencedTableName: 'loads',
        referencedColumnNames: ['id'],
        columnNames: ['loadId'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('companies', 'FKLoad');
    await queryRunner.dropForeignKey('companies', 'FKCompany');
    await queryRunner.dropTable('companies_loads');
  }
}
