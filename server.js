const bodyParser = require("body-parser");
const express = require("express");
const port = 8083;
const app = express();
let employees = [];
// ------- view engine and encoded files -------

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// ------- get and post methods -------

// ------- get index page -------

app.get("/", (req, res) => {
  let totalTasks = employees.reduce(
    (sum, emp) => sum + (emp.tasks?.length || 0),
    0
  );
  let completedTasks = employees.reduce(
    (sum, emp) =>
      sum + (emp.tasks?.filter((task) => task.completed).length || 0),
    0
  );
  let pendingTasks = totalTasks - completedTasks;

  res.render("index", { employees, totalTasks, completedTasks, pendingTasks });
});

// ------- get form page -------

app.get("/form", (req, res) => {
  res.render("form", { editData: null });
});

// ------- get table page -------

app.get("/table", (req, res) => {
  res.render("table", { employees });
});

// ------------------------ add employee form method ------------------------

// ------ post method --------

app.post("/form", (req, res) => {
  const index = employees.findIndex((emp) => emp.id === req.params.id);

  if (index !== -1) {
    employees[index] = { ...employees[index], ...req.body };
  } else {
    const obj = { ...req.body, id: Date.now().toString(), tasks: [] };
    employees.push(obj);
    console.log(employees);
  }
  res.redirect("/table");
});

// ----- delete method --------

app.get("/employees/delete/:id", (req, res) => {
  const { id } = req.params;
  employees = employees.filter((emp) => emp.id !== id);
  res.redirect("/table");
});

// ----- edit method --------

app.get("/employee/edit/", (req, res) => {
  const { id } = req.query;
  const editData = employees.find((emp) => emp.id === id);
  return res.render("form", { editData });
});

app.post("/employee/edit/", (req, res) => {
  const { id } = req.query;

  employees = employees.map((employee) => {
    if (employee.id === id) {
      return { ...employee, ...req.body };
    }
    return employee;
  });

  return res.redirect("/table");
});

// ------------------------ add task form method ------------------------

//------- assign task method --------

app.post("/assign-task", (req, res) => {
  const { id } = req.params;
  const { empTasks, taskTitle, taskDescription, taskDate } = req.body;
  const task = {
    id: Date.now().toString(),
    name: taskTitle,
    des: taskDescription,
    date: taskDate,
    completed: false,
  };

  const employee = employees.find((emp) => emp.id === empTasks);
  if (employee) {
    task.employeeName = employee.employeeName;
    employee.tasks = employee.tasks || [];
    employee.tasks.push(task);
  }
  console.log(task);

  res.redirect("/");
});

// ------- delete task method --------

app.get("/task/:taskId/delete", (req, res) => {
  const { taskId } = req.params;

  employees.forEach((emp) => {
    emp.tasks = emp.tasks.filter((task) => task.id !== taskId);
  });

  res.redirect("/");
});

// ------- complete task method --------

app.get("/task/:taskId/complete", (req, res) => {
  const { taskId } = req.params;

  employees.forEach((emp) => {
    emp.tasks.forEach((task) => {
      if (task.id === taskId) {
        task.completed = true; 
      }
    });
  });

  res.redirect("/");
});


// ------ port listener --------

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("server is running");
    console.log("http://localhost:8083");
  }
});
