import employeeRouter from "#api/employees";
import express from "express";
const app = express();
export default app;

app.use(express.json());

app.use('/employees', employeeRouter);

app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong :>");
});