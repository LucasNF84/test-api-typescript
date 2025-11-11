import { Request, Response, Router } from "express";
import {
    getItemBran, 
    getItemBrans, 
    postItemBran, 
    updateItemBran, 
    deleteItemBran 
} from "../controllers/brand";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/", checkJwt,getItemBrans);

router.get("/:id", checkJwt,logMiddleware, getItemBran);

router.post("/", postItemBran);

router.put("/:id", updateItemBran);

router.delete("/:id", deleteItemBran);

export { router };
