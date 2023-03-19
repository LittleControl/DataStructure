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
                    PARTITION BY departmentId
                    ORDER BY  salary DESC
                    ) AS 'rn'
          FROM      Employee e
          JOIN      Department d ON e.departmentId = d.id
          ) AS `t`
WHERE     t.rn <= 3
;
