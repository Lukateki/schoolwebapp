-- Insert data into departments table
INSERT INTO departments (id, name, address) VALUES
(1, 'Computer Science', 'Fake Street 1\nCity, State, ZIP'),
(2, 'Mathematics', 'Fake Street 2\nCity, State, ZIP'),
(3, 'Physics', 'Fake Street 3\nCity, State, ZIP');

-- Insert data into courses table
INSERT INTO courses (id, name, department_id, course_number) VALUES
(1, 'Course 1', 2, 'C001'),
(2, 'Course 2', 3, 'C002'),
(3, 'Course 3', 1, 'C003'),
(4, 'Course 4', 2, 'C004'),
(5, 'Course 5', 3, 'C005'),
(6, 'Course 6', 2, 'C006'),
(7, 'Course 7', 1, 'C007'),
(8, 'Course 8', 2, 'C008'),
(9, 'Course 9', 1, 'C009'),
(10, 'Course 10', 3, 'C010');

-- Insert data into students table
INSERT INTO students (first_name, last_name, student_id, address, department_id, createdAt, updatedAt) VALUES
('Alice', 'Smith', 'S001', '123 St Catherine St, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Bob', 'Johnson', 'S002', '456 Rue Sherbrooke, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Charlie', 'Williams', 'S003', '789 Blvd Rene-Levesque, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('David', 'Brown', 'S004', '1010 Stanley St, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Emma', 'Jones', 'S005', '2020 Crescent St, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Fiona', 'Garcia', 'S006', '3030 Rue St-Denis, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('George', 'Miller', 'S007', '4040 Blvd Saint-Laurent, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hannah', 'Davis', 'S008', '5050 Ave du Parc, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ian', 'Martinez', 'S009', '6060 Rue Guy, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Julia', 'Rodriguez', 'S010', '7070 Rue Peel, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Kevin', 'Wilson', 'S011', '8080 Rue Bishop, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Laura', 'Anderson', 'S012', '9090 Rue Mackay, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Michael', 'Thomas', 'S013', '101 Rue Clark, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Natalie', 'Moore', 'S014', '1111 Blvd De Maisonneuve, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Oliver', 'Taylor', 'S015', '1212 Rue Drummond, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Paula', 'Harris', 'S016', '1313 Blvd St-Joseph, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Quentin', 'Martin', 'S017', '1414 Rue Notre-Dame, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Rachel', 'White', 'S018', '1515 Rue Amherst, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Steven', 'Lopez', 'S019', '1616 Rue Papineau, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Tina', 'Clark', 'S020', '1717 Blvd Pie-IX, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert data into student_courses table
INSERT INTO student_courses (student_id, course_id) VALUES
(19, 5),
(3, 8),
(21, 7),
(32, 4),
(6, 7),
(6, 9);

-- Insert 20 additional students with Montreal addresses
INSERT INTO students (first_name, last_name, student_id, address, department_id, createdAt, updatedAt) VALUES
('Uma', 'Hall', 'S021', '1818 Rue St-Paul, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Victor', 'Young', 'S022', '1919 Rue de Bleury, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Wendy', 'King', 'S023', '2021 Ave des Pins, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Xavier', 'Scott', 'S024', '2122 Blvd St-Michel, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Yasmine', 'Green', 'S025', '2223 Rue Rachel, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Zack', 'Adams', 'S026', '2324 Blvd Henri-Bourassa, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Angela', 'Baker', 'S027', '2425 Rue Jean-Talon, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Brian', 'Carter', 'S028', '2526 Blvd Rosemont, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Claire', 'Evans', 'S029', '2627 Ave du Mont-Royal, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Daniel', 'Mitchell', 'S030', '2728 Rue Ontario, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Erin', 'Perez', 'S031', '2829 Rue Beaubien, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Frank', 'Ramirez', 'S032', '2930 Blvd Rene-Levesque, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Grace', 'Sanders', 'S033', '3031 Rue St-Laurent, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Henry', 'Turner', 'S034', '3132 Blvd Gouin, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Isla', 'Walker', 'S035', '3233 Rue Parc Lafontaine, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Jack', 'Hill', 'S036', '3334 Blvd Pie-IX, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Kara', 'Phillips', 'S037', '3435 Blvd Iberville, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Liam', 'Collins', 'S038', '3536 Blvd Viau, Montreal, QC', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Mia', 'Stewart', 'S039', '3637 Ave Christophe-Colomb, Montreal, QC', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Noah', 'Brooks', 'S040', '3738 Blvd St-Michel, Montreal, QC', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
