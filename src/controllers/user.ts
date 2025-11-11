import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertUserService, getUsersService, getUserService, updateUserService, deleteUserService } from "../services/user";



const getUserCtrl = async ({ params }: Request, res: Response) => { 
    try {
        const { id } = params; const response = await getUserService(id);
        const data = response ? response : "NOT_FOUND"; res.send(data);
    } catch (e) {
        handleHttp(res, "ERROR_GET_USER");
        }
    };

const getUsersCtrl = async (req: Request, res: Response) => {
    try {
        const response = await getUsersService(); res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_USERS");
        }
    };

const updateUserCtrl = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params; const response = await updateUserService(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_USER");
    }
};

const postUserCtrl = async ({ body }: Request, res: Response) => {
    try {
        const responseUser = await insertUserService(body); res.send(responseUser);
    } catch (e) {
        handleHttp(res, "ERROR_POST_USER", e);
        }
    };

const deleteUserCtrl = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params; const response = await deleteUserService(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_USER");
    }
};

export { getUserCtrl, getUsersCtrl, postUserCtrl, updateUserCtrl, deleteUserCtrl };








