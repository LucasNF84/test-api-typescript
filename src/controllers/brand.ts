import { Request, Response } from "express";
import {
  insertBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
} from "../services/brand";
import { handleHttp } from "../utils/error.handle";
import { Brand } from "../interfaces/brand.interface";

const getItemBran = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getBrand(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItemBrans = async (req: Request, res: Response) => {
  try {
    const response = await getBrands();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItemBran = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateBrand(id, body);
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
const postItemBran = async (req: Request<{}, {}, Brand>, res: Response) => {
  try {
    const { name, description } = req.body;

    // Validación manual
    if (!name || !description) {
      return res.status(400).json({
        error: "Missing required fields: 'name' and/or 'description'",
      });
    }

    const responseItem = await insertBrand({ name, description });
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItemBran = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteBrand(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItemBran, getItemBrans, postItemBran, updateItemBran, deleteItemBran };



/*
¿Qué significa Request<{}, {}, Brand>?
{}: parámetros de ruta (req.params) — no usás ninguno acá.

{}: respuesta esperada (res.send(...)) — podés dejarlo vacío.

Brand: tipo del cuerpo del request (req.body) — ¡este es el que nos interesa!
*/