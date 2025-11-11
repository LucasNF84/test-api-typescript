import { Brand } from "../interfaces/brand.interface";
import BrandModel from "../models/brand";



const insertBrand = async (item: Brand) => {
  const responseInsert = await BrandModel.create(item);
  return responseInsert;
};

const getBrands = async () => {
  const responseBrand= await BrandModel.find({});
  return responseBrand;
};

const getBrand = async (id: string) => {
  const responseBrand = await BrandModel.findOne({ _id: id });
  return responseBrand;
};

const updateBrand = async (id: string, data: Brand) => {
  const responseBrand = await BrandModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseBrand;
};

const deleteBrand = async (id: string) => {
  const responseBrand = await BrandModel.remove({ _id: id });
  return responseBrand;
};

export { insertBrand, getBrands, getBrand, updateBrand, deleteBrand };
