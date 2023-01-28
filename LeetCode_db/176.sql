CREATE TABLE
  Employee (
    `id` INT(11) NOT NULL,
    `salary` DOUBLE NOT NULL,
    PRIMARY KEY (`id`)
  )
;

INSERT INTO
  Employee (id, salary)
VALUES
  (1, 100),
  (2, 200),
  (3, 300)
;

SELECT
  CASE
    WHEN (COUNT(1) = 1) THEN t1.salary
    ELSE NULL
  END AS 'SecondHighestSalary'
FROM
  (
    SELECT
      e1.salary,
      COUNT(DISTINCT e2.salary) AS 'rank'
    FROM
      Employee e1,
      Employee e2
    WHERE
      e1.salary <= e2.salary
    GROUP BY
      e1.salary
  ) t1
WHERE
  t1.rank = '2'
;

-- offical resolution
SELECT
  (
    SELECT
      salary
    FROM
      Employee
    ORDER BY
      salary
    LIMIT
      1
    OFFSET
      1
  )
;
