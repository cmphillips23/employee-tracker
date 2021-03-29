const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee } = require('./db/database');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlpassword',
    database: 'employee_DB'
});


// First prompt at start of application
const promptUserStart = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Delete a department', 'Delete a role', 'Delete an employee']
        }
    ])
    .then(selection => {
        if (selection.start === 'View all departments') {
            viewDepartments();
        } else if (selection.start === 'View all roles') {
            viewRoles();
        } else if (selection.start === 'View all employees') {
            viewEmployees();
        } else if (selection.start === 'Add a department') {
            promptAddDepartment();
        } else if (selection.start === 'Add a role') {
            promptAddRole();
        } else if (selection.start === 'Add an employee') {
            promptAddEmployee();
        } else if (selection.start === 'Update an employee role') {
            promptUpdateRole();
        } else if (selection.start === 'Delete a department') {
            promptDeleteDepartment();
        } else if (selection.start === 'Delete a role') {
            promptDeleteRole();
        } else if (selection.start === 'Delete an employee') {
            promptDeleteEmployee();
        }
    });
}

// Prompt for adding a department
const promptAddDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'addDepartment',
            message: 'Please enter the name of the department you would like to add',
            validate: departmentInput => {
                if (departmentInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the department you would like to add');
                    return false;
                }
            }
        }
    ])
    .then(response => addDepartment(response))
}

// Prompt for adding a role
const promptAddRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'addRoleName',
            message: 'Please enter the name of the role you would like to add',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the role you would like to add');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'addRoleSalary',
            message: 'Please enter the salary of the role you would like to add',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please enter the salary of the role you would like to add');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addRoleDepartment',
            message: 'Please enter the name of the department to which you want this role to belong',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please enter the department of the role you would like to add');
                    return false;
                }
            }
        }
    ])
    .then(response => addRole(response))
}

// Prompt for adding an employee
const promptAddEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'addEmployeeFirstName',
            message: 'Please enter the first name of the employee you would like to add',
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee you would like to add');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addEmployeeLastName',
            message: 'Please enter the last name of the employee you would like to add',
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the employee you would like to add');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'addEmployeeRole',
            message: "Please enter the new employee's role",
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please enter the role of the employee you would like to add');
                    return false;
                }
            }
        }
    ])
    .then(response => addEmployee(response))
}

//Prompt for updating an employee role
const promptUpdateRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'updateRole',
            message: 'Please select the employee whose role you would like to update',
            choices: employeeArr.first_name
        },
        {
            type: 'input',
            name: 'addDepartment',
            message: 'Please enter the name of the department you would like to add',
            validate: departmentInput => {
                if (departmentInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the department you would like to add');
                    return false;
                }
            }
        }
    ])
}

const promptDeleteDepartment = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'deleteDepartment',
            message: 'Please select the department you would like to delete',
            choices: departmentArr
        }
    ])
}

const promptDeleteRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'deleteRole',
            message: 'Please select the role you would like to delete',
            choices: roleArr
        }
    ])
}

const promptDeleteEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'deleteEmployee',
            message: 'Please select the employee you would like to delete',
            choices: employeeArr
        }
    ])
}


promptUserStart();