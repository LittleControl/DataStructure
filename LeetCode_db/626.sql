-- Seat
-- id student
SELECT    t2.rn_new  AS `id`,
          t2.student
FROM      (
          SELECT    id,
                    student,
                    CASE
                              WHEN rn = (
                              SELECT    COUNT(1)
                              FROM      Seat
                              ) THEN rn
                              WHEN rn % 2 = 1 THEN rn + 1
                              ELSE rn - 1
                    END AS 'rn_new'
          FROM      (
                    SELECT    id,
                              student,
                              ROW_NUMBER() OVER (
                              ORDER BY  id
                              ) AS 'rn'
                    FROM      Seat
                    ) AS `t1`
          ) AS `t2`
ORDER BY  t2.rn_new
;

-- case优化
SELECT    (
          CASE
                    WHEN MOD (id, 2) != 0
                    AND       counts != id THEN id + 1
                              WHEN MOD (id, 2) != 0
                    AND       counts = id THEN id
                              ELSE id - 1
          END
          ) AS id,
          student
FROM      seat,
          (
          SELECT    COUNT(*) AS counts
          FROM      seat
          ) AS seat_counts
ORDER BY  id ASC
;

--位运算
SELECT    s1.id,
          COALESCE(s2.student, s1.student) AS student
FROM      seat s1
LEFT JOIN seat s2 ON ((s1.id + 1) ^ 1) - 1 = s2.id
ORDER BY  s1.id
;
