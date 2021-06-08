INSERT INTO departments (department)
VALUES
    ('Accounting'),
    ('Sales'),
    ('IT'),
    ('Human Resources'),
    ('Operations');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Accountant', 65000, 1),
    ('Sales Representative', 60000, 2),
    ('Sales Manager', 75000, 2),
    ('Software Developer', 70000, 3),
    ('Senior Developer', 100000, 3),
    ('HR Representative', 50000, 4),
    ('HR Manager', 65000, 4),
    ('Operations Manager', 80000, 5),
    ('Director', 120000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Taunya', 'Tischler', 1, NULL),
    ('Fae', 'Frailey', 2, 5),
    ('Gaston', 'Grabill', 2, 5),
    ('Ema', 'Edman', 2, 5),
    ('Fonda', 'Fullbright', 3, NULL),
    ('Sharen', 'Schiffman', 4, 10),
    ('Leilani', 'Lineberry', 4, 10),
    ('Stephania', 'Seal', 4, 11),
    ('Mee', 'Mazzariello', 4, 11),
    ('Miquel', 'Mcfee', 5, NULL),
    ('Kera', 'Kilian', 5, NULL),
    ('Alena', 'Azar', 6, 15),
    ('Donald', 'Dillenbeck', 6, 15),
    ('Angeles', 'Addington', 6, 15),
    ('Merle', 'Meekins', 7, NULL),
    ('Kelly', 'Kirts', 8, 20),
    ('Avril', 'Alba', 8, 20),
    ('Camie', 'Clouse', 8, 20),
    ('Justin', 'Fin', 8, 20),
    ('Katharina', 'Kinsella', 9, NULL);