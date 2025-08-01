

# Employee Management System

This is a simple Employee Management System built with Node.js, Express, and EJS. It allows you to manage employees and assign tasks to them.

## Features

*   **Employee Management**:
    *   Add new employees.
    *   View a list of all employees.
    *   Edit existing employee details.
    *   Delete employees.
*   **Task Management**:
    *   Assign tasks to specific employees.
    *   View all assigned tasks.
    *   Mark tasks as completed.
    *   Delete tasks.
*   **Dashboard**:
    *   Overview of total employees, total tasks, completed tasks, and pending tasks.

## Demo

You can access a live demo of the application here: [https://empl-0cgw.onrender.com](https://empl-0cgw.onrender.com)

## Technologies Used

*   **Node.js**: JavaScript runtime environment.
*   **Express.js**: Web application framework for Node.js.
*   **EJS (Embedded JavaScript)**: Templating engine for rendering dynamic HTML.
*   **Body-parser**: Middleware for parsing incoming request bodies.
*   **Nodemon**: Utility that monitors for changes in your source and automatically restarts your server.
*   **Tailwind CSS**: (Implied by the HTML structure, though not explicitly listed in `package.json` as a direct dependency for the Node.js server, it's used for styling the frontend).

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository**:

    ```bash
    git clone <repository_url>
    cd employee-management-system
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

### Running the Application

1.  **Start the server in development mode (with Nodemon)**:

    ```bash
    npm run dev
    ```

    This will start the server and automatically restart it whenever you make changes to the code.

2.  **Start the server in production mode**:

    ```bash
    npm start
    ```

    The application will be accessible at `http://localhost:8083`.

## Project Structure

```
.
├── server.js           # Main Express application file
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Dependency tree lock file
└── views/              # EJS template files
    ├── form.ejs        # Form for adding/editing employees
    ├── header.ejs      # Header partial
    ├── index.ejs       # Dashboard/main page
    └── table.ejs       # Employee table view
```

## API Endpoints

*   `GET /`: Renders the dashboard with employee and task statistics.
*   `GET /form`: Renders the form for adding new employees.
*   `POST /form`: Handles the submission of new employee data.
*   `GET /table`: Renders the table view of all employees.
*   `GET /employees/delete/:id`: Deletes an employee by ID.
*   `GET /employee/edit/`: Renders the form for editing an employee.
*   `POST /employee/edit/`: Handles the submission of edited employee data.
*   `POST /assign-task`: Assigns a new task to an employee.
*   `GET /task/:taskId/delete`: Deletes a task by ID.
*   `GET /task/:taskId/complete`: Marks a task as completed by ID.

## Contributing

Feel free to fork this repository and contribute.

## License

This project is licensed under the ISC License.
