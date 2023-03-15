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
