import { Category } from "../interfaces/category.interface";
import CategoryModel from "../models/category";



const insertCategoryService = async (item: Category) => {
  const responseInsert = await CategoryModel.create(item);
  return responseInsert;
};

const getCategorysService = async () => {
  const responseCategory= await CategoryModel.find({});
  return responseCategory;
};

const getCategoryService = async (id: string) => {
  const responseCategory = await CategoryModel.findOne({ _id: id });
  return responseCategory;
};

const updateCategoryService = async (id: string, data: Category) => {
  const responseCategory = await CategoryModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseCategory;
};

const deleteCategoryService = async (id: string) => {
  const responseCategory = await CategoryModel.remove({ _id: id });
  return responseCategory;
};

export { insertCategoryService, getCategorysService, getCategoryService, updateCategoryService, deleteCategoryService };
