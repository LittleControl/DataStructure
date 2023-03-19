-- Employee Department
SELECT    t.Department,
          t.Employee,
          t.Salary
FROM      (
          SELECT    e.id,
                    e.`name`          AS 'Employee',
                    e.salary          AS 'Salary',
                    e.departmentId,
                    d.name            AS 'Department',
                    DENSE_RANK() OVER (
                    PARTITION BY e.departmentId
                    ORDER BY  e.salary DESC
                    ) AS 'rn'
          FROM      Employee AS `e`
          JOIN      Department AS `d` ON e.departmentId = d.id
          ) AS `t`
WHERE     t.rn <= 3
;

-- 官方solution join和子查询
SELECT    d.Name    AS 'Department',
          e1.Name   AS 'Employee',
          e1.Salary
FROM      Employee e1
JOIN      Department d ON e1.DepartmentId = d.Id
WHERE     3 > (
          SELECT    COUNT(DISTINCT e2.Salary)
          FROM      Employee e2
          WHERE     e2.Salary > e1.Salary
          AND       e1.DepartmentId = e2.DepartmentId
          )
;
