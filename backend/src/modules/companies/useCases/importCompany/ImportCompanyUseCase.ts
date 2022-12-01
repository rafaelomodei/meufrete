import fs from 'fs';
import { parse } from 'csv-parse';
import { inject, injectable } from 'tsyringe';
import { CompaniesRepository } from '../../infra/typeorm/repositories/CompaniesRepository';
import { ICompanyDTO } from '../../dtos/ICreateCompanyDTO';

@injectable()
class ImportCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: CompaniesRepository
  ) {}

  loadCompanies(file: Express.Multer.File): Promise<ICompanyDTO[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const companies: ICompanyDTO[] = [];

      const parseFile = parse();
      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, certification, loads] = line;

          companies.push({ name, certification, loads });
        })
        .on('end', () => {
          resolve(companies);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const companies = await this.loadCompanies(file);
    companies.map(async (company) => {
      const { name, certification, loads } = company;

      const existsCompany = await this.companiesRepository.findByName(name);

      if (!existsCompany)
        await this.companiesRepository.create({ name, certification, loads });
    });
  }
}
export { ImportCompanyUseCase };
