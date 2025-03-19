import express from "express";
import { create, getAllUsers } from "../controller/UserController.js";

const route = express.Router();

route.post("/users/create", create);
route.get("/users", getAllUsers);

export default route;