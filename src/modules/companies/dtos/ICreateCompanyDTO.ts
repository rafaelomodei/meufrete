import { Load } from "../../loads/entities/Load";

interface ICompanyDTO {
  name: string;
  certification: boolean;
  listLoads: Load[];
}

export { ICompanyDTO };
