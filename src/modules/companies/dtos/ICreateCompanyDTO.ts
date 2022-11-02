import { Load } from "../../loads/infra/typeorm/entities/Load";

interface ICompanyDTO {
  name: string;
  certification: boolean;
  listLoads: Load[];
}

export { ICompanyDTO };
