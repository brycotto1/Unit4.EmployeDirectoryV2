import express from 'express';
const employeeRouter = express.Router();
export default employeeRouter;

import employees from "#db/employees";

employeeRouter.get('/', (req, res) => {
  res.status(200).send("Hello employees!");
});

employeeRouter.get('/', (req, res) => {
  res.status(200).send(employees);
});

employeeRouter.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

employeeRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  const employee = employees.find((e) => e.id === +id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});

employeeRouter.post('/', (req, res) => {
  if(!req.body) return res.status(400).send("The request has no body!");
  const {text} = req.body;
  if(!text) return res.status(400).send("The request has no name!");
  const newEmployee = {id: employees.length + 1, name:text};
  employees.push(newEmployee);
  res.status(201).send(newEmployee);
})
