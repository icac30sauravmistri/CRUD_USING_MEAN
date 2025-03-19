import express from "express";
import { create, deleteUser, getAllUsers, getSingleUser, update } from "../controller/UserController.js";

const route = express.Router();

route.post("/users/create", create);
route.get("/users", getAllUsers);
route.get("/users/:id", getSingleUser);
route.put("/users/edit/:id", update);
route.delete("/users/delete/:id", deleteUser);

export default route;