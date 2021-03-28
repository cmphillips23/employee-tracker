INSERT INTO departments (name)
VALUES
    ('Accounting'),
    ('Sales'),
    ('IT'),
    ('Human Resources'),
    ('Operations');

INSERT INTO roles (title, salary, department_id)
    ('Accountant', 65000, 1),
    ('Sales Representative', 60000, 2),
    ('Sales Manager', 75000, 2)
    ('Software Developer', 70000, 3),
    ('Technical Support Rep', 45000, 3),
    ('Senior Developer', 100000, 3),
    ('HR Representative', 50000, 4),
    ('HR Manager', 65000, 4),
    ('Operations Manager', 70000, 5),
    ('Regional Manager', 90000, 5),
    ('Director', 120000, 5);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Taunya', 'Tischler', 1, NULL),
    ('Fae', 'Frailey', 1, NULL),
    ('Gaston', 'Grabill', 2, 6),
    ('Ema', 'Edman', 2, 6),
    ('Fonda', 'Fullbright', 2, 6),
    ('Leo', 'Levering', 3, NULL),
    ('Sharen', 'Schiffman', 4, 14),
    ('Leilani', 'Lineberry', 4, 14),
    ('Stephania', 'Seal', 4, 14),
    ('Mee', 'Mazzariello', 4, 14), 
    ('Miquel', 'Mcfee', 5, 14),
    ('Kera', 'Kilian',  5, 14),
    ('Alena', 'Azar', 5, 14),
    ('Donald', 'Dillenbeck', 6, NULL), 
    ('Angeles', 'Addington', 7, ),
    ('Merle', 'Meekins', 7, ),
    ('Kelly', 'Kirts', 7, ),
    ('Avril', 'Alba', 7, ),
    ('Camie', 'Clough', 8, NULL),
    ('Justin', 'Jin', 9, 27),
    ('Enoch', 'Ehlert', 9, 27),
    ('Keven', 'Kovacs', 9, 26),
    ('Dione', 'Dawkins', 9, 28),
    ('Belen', 'Becton', 9, 28),
    ('Zina', 'Zipp', 9, 29),
    ('Teofila', 'Tyrell', 9, 29),
    ('Josephina', 'Jilek', 10, 30),
    ('Katharina', 'Kinsella', 10, 30),
    ('Milo', 'Merlos', 10, 30),
    ('Laquanda', 'Loaiza', 11, NULL);