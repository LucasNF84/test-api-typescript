import { Request, Response, Router } from "express";
import {
    getCategory, 
    getCategorys, 
    postCategory, 
    updateCategory, 
    deleteCategory 
} from "../controllers/category";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/", checkJwt,getCategorys);

router.get("/:id", checkJwt,logMiddleware, getCategory);

router.post("/", postCategory);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

export { router };
