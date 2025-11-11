import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const insertUserService = async (item: User) => {
  const responseInsert = await UserModel.create(item);
  return responseInsert;
};

const getUsersService = async () => {
  const responseItem = await UserModel.find({}).populate('brand');
  return responseItem;
};

const getUserService = async (id: string) => {
  const responseItem = await UserModel.findOne({ _id: id }).populate('brand');
  return responseItem;
};

const updateUserService = async (id: string, data: User) => {
  const responseItem = await UserModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteUserService = async (id: string) => {
  const responseItem = await UserModel.remove({ _id: id });
  return responseItem;
};

export { insertUserService, getUsersService, getUserService, updateUserService, deleteUserService };