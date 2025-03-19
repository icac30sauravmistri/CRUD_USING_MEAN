import express from "express";
import { create, getAllUsers, getSingleUser } from "../controller/UserController.js";

const route = express.Router();

route.post("/users/create", create);
route.get("/users", getAllUsers);
route.get("/users/:id", getSingleUser);

export default route;