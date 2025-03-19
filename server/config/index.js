import dotenv from "dotenv";
dotenv.config();

const { DB_CONNECT, PORT } = process.env;
// const DB_CONNECT = process.env.DB_CONNECT;
// const PORT = process.env.PORT;

export default { DB_CONNECT, PORT }