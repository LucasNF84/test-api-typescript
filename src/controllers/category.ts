import { Request, Response } from "express";
import {
  insertCategoryService,
  getCategorysService,
  getCategoryService,
  updateCategoryService,
  deleteCategoryService,
} from "../services/category";
import { handleHttp } from "../utils/error.handle";
import { Category } from "../interfaces/category.interface";



const getCategory = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCategoryService(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getCategorys = async (req: Request, res: Response) => {
  try {
    const response = await getCategorysService();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateCategory = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCategoryService(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

/*const postItemBran = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertBrand(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};
*/
const postCategory = async (req: Request<{}, {}, Category>, res: Response) => {
  try {
    const { name, description } = req.body;

    // Validación manual
    if (!name || !description) {
      return res.status(400).json({
        error: "Missing required fields: 'name' and/or 'description'",
      });
    }

    const responseItem = await insertCategoryService({ name, description });
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteCategory = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCategoryService(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getCategory, getCategorys, postCategory, updateCategory, deleteCategory };



/*
¿Qué significa Request<{}, {}, Brand>?
{}: parámetros de ruta (req.params) — no usás ninguno acá.

{}: respuesta esperada (res.send(...)) — podés dejarlo vacío.

Brand: tipo del cuerpo del request (req.body) — ¡este es el que nos interesa!
*/
