CREATE    TABLE IF NOT EXISTS Employee (id INT, NAME VARCHAR(255), salary INT, managerId INT)
;

-- resolution
SELECT    e1.name Employee
FROM      Employee e1
LEFT JOIN Employee e2 ON e1.managerId = e2.id
WHERE     e1.salary > e2.salary
;
