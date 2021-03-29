const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlpassword',
    database: 'employee_DB'
});

const viewDepartments = () => {
    con.promise().query('SELECT * FROM departments')
                        .then( ([rows,fields]) => {
                            console.table(rows);
                        })
                        .then( () => con.end());
}

const viewRoles = () => {
    con.promise().query('SELECT * FROM roles')
                        .then( ([rows,fields]) => {
                            console.table(rows);
                        })
                        .then( () => con.end());
}

const viewEmployees = () => {
    con.promise().query(`SELECT first_name, last_name, role_id, manager_id
                         FROM employees
                         FULL JOIN roles
                         ON employees.role_id = roles.id
                         ORDER BY employees.id`)
                        .then( ([rows,fields]) => {
                            console.table(rows);
                        })
                        .then( () => con.end());
}

const addDepartment = (response) => {
    con.promise().query('INSERT INTO departments SET ?',
                        {
                            name: response.addDepartment
                        })
                        .then(console.log('Department has been added to the database.'))
                        .then( () => con.end());
}

const addRole = (response) => {
    con.promise().query('INSERT INTO roles SET ?',
                        {
                            title: response.addRoleName
                        },
                        {
                            salary: response.addRoleSalary
                        },
                        {
                            department_id: response.addRoleDeparment
                        })
                        .then(console.log('Role has been added to the database.'))
                        .then( () => con.end());
}

const addEmployee = (response) => {
    con.promise().query('INSERT INTO employees SET ?',
                        {
                            first_name: response.addEmployeeFirstName
                        },
                        {
                            last_name: response.addEmployeeLastName
                        },
                        {
                            role_id: response.addEmployeeRole
                        })
                        .then(console.log('Employee has been added to the database.'))
                        .then( () => con.end());
}

con.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + con.threadId + '\n');
});


module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee };