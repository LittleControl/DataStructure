SELECT    t1.id AS 'id',
          CASE
                    WHEN t1.p_id IS NULL THEN 'Root'
                    WHEN t2.id IS NULL THEN 'Leaf'
                    WHEN t2.id IS NOT NULL THEN 'Inner'
          END AS 'Type'
FROM      tree t1
LEFT JOIN tree t2 ON t1.id = t2.p_id
GROUP BY  t1.id,
          t1.p_id
ORDER BY  t1.id
;

-- case优化
SELECT    id,
          (
          CASE
                    WHEN p_id IS NULL THEN 'Root'
                    WHEN id IN (
                    SELECT    p_id
                    FROM      tree
                    ) THEN 'Inner'
                    ELSE 'Leaf'
          END
          ) AS TYPE
FROM      tree
ORDER BY  id
