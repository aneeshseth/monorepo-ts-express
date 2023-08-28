import express from 'express'
import { logIn, signUp, verify} from '../Controllers/userController';
const router = express.Router()



router.post("/signup", signUp)
router.post("/login", logIn)
router.get("/verify", verify)



export default router;