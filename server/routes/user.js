import express from "express";
import { create } from "../controller/UserController.js";

const route = express.Router();

route.post("/users/create", create);

export default route;