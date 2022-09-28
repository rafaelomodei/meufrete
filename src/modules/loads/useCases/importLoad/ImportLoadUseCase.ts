import fs from 'fs';
import { parse } from 'csv-parse';
import { LoadsRepository } from '../../repositories/implementations/LoadsRepository';

interface IImportLoads {
  name: string;
  weight: number;
}

class ImportLoadUseCase {
  constructor(private loadsRepository: LoadsRepository) {}

  loadLoads(file: Express.Multer.File): Promise<IImportLoads[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const loads: IImportLoads[] = [];

      const parseFile = parse();
      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, weight] = line;

          loads.push({ name, weight });
        })
        .on('end', () => {
          resolve(loads);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const loads = await this.loadLoads(file);
    loads.map((load) => {
      const { name, weight } = load;

      const existsLoad = this.loadsRepository.findByName(name);

      if (!existsLoad) this.loadsRepository.create({ name, weight });
    });
  }
}
export { ImportLoadUseCase };
