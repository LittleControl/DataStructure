-- insurance
-- | Column Name | Type          |
-- |-------------|---------------|
-- | PID         | INTEGER(11)   |
-- | TIV_2015    | NUMERIC(15,2) |
-- | TIV_2016    | NUMERIC(15,2) |
-- | LAT         | NUMERIC(5,2)  |
-- | LON         | NUMERIC(5,2)  |
--
-- res0
SELECT    ROUND(SUM(r1.TIV_2016), 2) AS 'tiv_2016'
FROM      (
          SELECT    DISTINCT    i1.pid,
                    i1.TIV_2016
          FROM      insurance i1,
                    insurance i2
          WHERE     1 = 1
          AND       i1.pid != i2.pid
          AND       i1.pid NOT IN (
                    SELECT    DISTINCT i3.PID
                    FROM      insurance i3
                    JOIN      insurance i4 ON i3.PID != i4.PID
                    AND       i3.LON = i4.LON
                    AND       i3.LAT = i4.LAT
                    )
          AND       i1.TIV_2015 = i2.TIV_2015
          ) r1
;

-- 官方解法
SELECT    SUM(tiv_2016)
FROM      insurance
WHERE     TIV_2015 IN (
          SELECT    TIV_2015
          FROM      insurance
          GROUP BY  TIV_2015
          HAVING    (COUNT(1) > 1)
          )
AND       pid IN (
          SELECT    pid
          FROM      insurance
          GROUP BY  lon,
                    LAT
          HAVING    (COUNT(*) = 1)
          )
;

-- 窗口函数
SELECT    SUM(tiv_2016)
FROM      (
          SELECT    *,
                    COUNT(pid) OVER (
                    PARTITION BY TIV_2015
                    ) AS 'cnt1',
                    COUNT(pid) OVER (
                    PARTITION BY lon,
                              LAT
                    ) AS 'cnt2'
          FROM      insurance
          ) t1
WHERE     cnt1 > 1
AND       cnt2 = 1
;
