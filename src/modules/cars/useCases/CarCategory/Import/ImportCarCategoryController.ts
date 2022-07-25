import { Request, Response } from "express";
import ImportCarCategoryService from "./ImportCarCategoryService";

export default class ImportCarCategoryController {
  constructor(private importCarCategoryService: ImportCarCategoryService) {}

  handle(req: Request, res: Response): Response {
    const { file } = req;
    this.importCarCategoryService.execute(file);
    return res.status(201).json({ message: "Category imported with success" });
  }
}