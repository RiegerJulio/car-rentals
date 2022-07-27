import fs from 'fs';
import { parse } from 'csv-parse';
import ICarCategoryRepository from "../../../repositories/Interfaces/ICarCategoryRepository";

interface IImportCarCategory {
  name: string;
  description: string;
}

export default class ImportCarCategoryService {
  constructor(private carCategoryRepository: ICarCategoryRepository) {}

  loadCarCategories(file: Express.Multer.File):Promise<IImportCarCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCarCategory[] = [];

      const parser = parse();

      stream.pipe(parser);

      parser.on("data", async (line) => {
        const [name, description] = line;
        categories.push({ name, description });
      }).on("end", () => {
        fs.promises.unlink(file.path);
        resolve(categories);
      }).on("error", (err) => {
        reject(err);
      });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCarCategories(file);
    
    categories.map((category) => {
      const { name, description } = category;

      const checkExistance = this.carCategoryRepository.findByName(name);

      if (!checkExistance) {
        this.carCategoryRepository.create({ name, description });
      }
    });
  }
}