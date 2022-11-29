SELECT
  CASE
    WHEN COUNT(1) = 1 THEN NULL
    ELSE MIN(t1.salary)
  END
FROM
  (
    SELECT
      id,
      salary
    FROM
      Employee e1
    GROUP BY
      id
    ORDER BY
      salary DESC
    LIMIT
      2
  ) t1
GROUP BY
  t1.id
;
