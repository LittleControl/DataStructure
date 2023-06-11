--体育馆的人流量
-- Stadium
-- id int
-- visit_date date
-- people int
--
--
SELECT    MIN(t.id),
          COUNT(1)
FROM      (
          SELECT    id,
                    visit_date,
                    people,
                    ROW_NUMBER() OVER (
                    ORDER BY  id
                    ) rn
          FROM      Stadium
          WHERE     people >= 100
          ) t
GROUP BY  t.id - t.rn
HAVING    COUNT(1) >= 3
;
