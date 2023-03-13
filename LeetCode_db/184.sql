--Employee
--Department
SELECT    d.name   AS 'Department',
          e.name   AS 'Employee',
          e.salary AS 'Salary'
FROM      Employee e
LEFT JOIN Department d ON e.departmentId = d.id
JOIN      (
          SELECT    e2.departmentId,
                    MAX(e2.salary)  AS 'salary'
          FROM      Employee e2
          GROUP BY  e2.departmentId
          ) t ON (
          e.salary = t.salary
AND       e.departmentId = t.departmentId
          )
;
