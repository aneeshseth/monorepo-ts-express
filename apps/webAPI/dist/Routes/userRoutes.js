"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../Controllers/userController");
const router = express_1.default.Router();
router.post("/signup", userController_1.signUp);
router.post("/login", userController_1.logIn);
router.get("/verify", userController_1.verify);
exports.default = router;
