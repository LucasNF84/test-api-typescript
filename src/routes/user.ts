import { Router } from "express";
import { getUserCtrl, getUsersCtrl, postUserCtrl, updateUserCtrl, deleteUserCtrl } from "../controllers/user";
import { checkJwt } from "../middleware/session";



const router = Router();



router.get("/", checkJwt, getUsersCtrl);
router.get("/:id", checkJwt, getUserCtrl);
router.post("/", postUserCtrl);
router.put("/:id", updateUserCtrl);
router.delete("/:id", deleteUserCtrl);

export { router };





//www.sssss.com/api/v1/user/

//www.sssss.com/api/v1/user/:id   GET     www.dragonball.com/api/v1/characters/1   

//www.sssss.com/api/v1/user/:id  delete 

//www.sssss.com/api/v1/users/  


