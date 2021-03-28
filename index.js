const inquirer = require('inquirer');

// Declaring arrays
var departmentArr = [];
var roleArr = [];
var employeeArr = [];

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
    .then(choice => {
        if (choice === 'View all departments') {
            console.log(departmentArr);
        } else if (choice === 'View all roles') {
            console.log(roleArr);
        } else if (choice === 'View all employees') {
            console.log(employeeArr);
        } else if (choice === 'Add a department') {
            promptAddDepartment();
        } else if (choice === 'Add a role') {
            promptAddRole();
        } else if (choice === 'Add an employee') {
            promptAddEmployee();
        } else if (choice === 'Update an employee role') {
            promptUpdateRole();
        } else if (choice === 'Delete a department') {
            promptDeleteDepartment();
        } else if (choice === 'Delete a role') {
            promptDeleteRole();
        } else if (choice === 'Delete an employee') {
            promptDeleteEmployee();
        }
    });
};

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
            type: 'input',
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
            type: 'list',
            name: 'addRoleDepartment',
            message: 'Please select the department to which you want this role to belong',
            choices: departmentArr
        }
    ])
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
            type: 'list',
            name: 'addEmployeeRole',
            message: "Please select the new employee's role",
            choices: roleArr
        }
    ])
}

//Prompt for updating an employee role
const promptUpdateRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'updateRole',
            message: 'Please select the employee whose role you would like to update',
            choices: employeeArr.firstName
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