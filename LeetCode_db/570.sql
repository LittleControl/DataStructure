-- 570. 至少有5名直接下属的经理
-- Employee
-- id name department managerid
--
SELECT    DISTINCT t1.name
FROM      (
          SELECT    e1.id,
                    e1.NAME
          FROM      Employee e1
          ) t1
JOIN      (
          SELECT    e2.managerid
          FROM      Employee e2
          GROUP BY  e2.managerid
          HAVING    COUNT(1) > 4
          ) t2 ON t1.id = t2.managerid
;

-- 子查询优化
SELECT    NAME
FROM      Employee
WHERE     id IN (
          SELECT    e2.managerid
          FROM      Employee e2
          GROUP BY  e2.managerid
          HAVING    COUNT(1) > 4
          )
;
