import { Car } from "../interfaces/item.interface";
import ItemModel from "../models/item";

const getOrders = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

export { getOrders };
