import express from "express";
import { signupUserController } from "../controllers/user-controllers.js";
const Router = express.Router();

Router.post('/signup',signupUserController);


export default Router;