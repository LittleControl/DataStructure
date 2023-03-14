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

-- 两个in值连用
SELECT    d.name   AS 'Department',
          e.name   AS 'Employee',
          e.salary AS 'Salary'
FROM      Employee e
LEFT JOIN Department d ON e.departmentId = d.id
WHERE     (e.departmentId, e.salary) IN (
          SELECT    e2.departmentId,
                    MAX(e2.salary)
          FROM      Employee e2
          GROUP BY  e2.departmentId
          )
;

-- 使用all
SELECT    d.name   AS 'Department',
          e.name   AS 'Employee',
          e.salary AS 'Salary'
FROM      Employee e
LEFT JOIN Department d ON e.departmentId = d.id
WHERE     e.salary >= ALL (
          SELECT    e2.salary
          FROM      Employee e2
          WHERE     e2.departmentId = e.departmentId
          )
;
