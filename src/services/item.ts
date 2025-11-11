import { Item } from "../interfaces/item.interface";
import ItemModel from "../models/item";

const insertItemService = async (item: Item) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getItemsService = async () => {
  const responseItem = await ItemModel.find({}).populate('brand').populate('category');
  return responseItem;
};

const getItemService = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id }).populate('brand').populate('category');
  return responseItem;
};

const updateItemService = async (id: string, data: Item) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteItemService = async (id: string) => {
  const responseItem = await ItemModel.remove({ _id: id });
  return responseItem;
};

export { insertItemService, getItemsService, getItemService, updateItemService, deleteItemService };
