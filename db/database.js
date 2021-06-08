const mysql = require('mysql2');
const cTable = require('console.table');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlpassword',
    database: 'employee_DB'
});

const viewDepartments = () => {
    con.promise().query(`SELECT department
                         FROM departments`)
                        .then( ([rows,fields]) => {
                            console.table(rows);
                        });
}

const viewRoles = () => {
    con.promise().query(`SELECT title, salary
                         FROM roles`)
                        .then( ([rows,fields]) => {
                            console.table(rows);
                        });
}

const viewEmployees = () => {
    con.promise().query(`SELECT first_name, last_name, title, salary, department
                         FROM employees
                         LEFT JOIN roles ON employees.role_id = roles.id
                         LEFT JOIN departments ON roles.department_id = departments.id
                         ORDER BY employees.id`)
                        .then( ([rows,fields]) => {
                            console.table(rows);
                        });
}

const addDepartment = (response) => {
    con.promise().query('INSERT INTO departments SET ?',
                        {
                            name: response.addDepartment
                        })
                        .then(console.log('Department has been added to the database.'));
}

const addRole = (response) => {
    con.promise().query('INSERT INTO roles SET ?',
                        {
                            title: response.addRoleName,
                            salary: response.addRoleSalary,
                            department_id: response.addRoleDeparment
                        })
                        .then(console.log('Role has been added to the database.'));
}

const addEmployee = (response) => {
    con.promise().query('INSERT INTO employees SET ?',
                        {
                            first_name: response.addEmployeeFirstName,
                            last_name: response.addEmployeeLastName,
                            role_id: response.addEmployeeRole
                        })
                        .then(console.log('Employee has been added to the database.'));
}

const deleteDepartment = (response) => {
    con.promise().query(`DELETE FROM departments WHERE id = ${response.deleteDepartment}`)
                        .then(console.log('Department has been deleted.'));
}

const deleteRole = (response) => {
    con.promise().query(`DELETE FROM roles WHERE id = ${response.deleteRole}`)
                        .then(console.log('Role has been deleted.'));
}

const deleteEmployee = (response) => {
    con.promise().query(`DELETE FROM employees WHERE id = ${response.deleteEmployee}`)
                        .then(console.log('Employee has been deleted.'));
}

con.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + con.threadId + '\n');
});


module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, deleteDepartment, deleteRole, deleteEmployee };