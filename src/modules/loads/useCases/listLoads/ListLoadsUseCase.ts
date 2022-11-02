import { inject, injectable } from 'tsyringe';
import { Load } from '../../infra/typeorm/entities/Load';
import { ILoadsRepository } from '../../repositories/ILoadsRepositories';

import { calcularPrecoPrazo } from 'correios-brasil';

@injectable()
class ListLoadsUseCase {
  constructor(
    @inject('LoadsRepository')
    private loadsRepository: ILoadsRepository
  ) {}

  async execute(): Promise<Load[]> {
    const loads = await this.loadsRepository.list();

    const args = {
      // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
      sCepOrigem: '87701000',
      sCepDestino: '86670000',
      nVlPeso: '1000',
      nCdFormato: '1',
      nVlComprimento: '20',
      nVlAltura: '20',
      nVlLargura: '20',
      nCdServico: ['04014', '04510'], //Array com os códigos de serviço
      nVlDiametro: '0',
    };
    calcularPrecoPrazo(args).then((response) => {
      console.log(response);
    });

    return loads;
  }
}

export { ListLoadsUseCase };
