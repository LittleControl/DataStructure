-- Seat
-- id student
SELECT    t2.rn_new  AS 'id',
          t2.student
FROM      (
          SELECT    id,
                    student,
                    CASE
                              WHEN rn % 2 = 1
                              AND       rn = (
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
                    ) t1
          ) t2
ORDER BY  t2.rn_new
;
