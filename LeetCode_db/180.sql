-- 兼容id连续和不连续情况
SELECT    DISTINCT t2.num AS 'ConsecutiveNums'
FROM      (
          SELECT    t1.num,
                    --     防止rn2为负数, leetcode提示 bigint unsigned 数值类型问题
                    id2 + 1 - ROW_NUMBER() OVER (
                    PARTITION BY t1.num
                    ORDER BY  t1.id2
                    ) AS 'rn2'
          FROM      (
                    SELECT    num,
                              ROW_NUMBER() OVER (
                              ORDER BY  id
                              ) AS 'id2'
                    FROM      LOGS
                    ORDER BY  id
                    ) t1
          ORDER BY  t1.id2
          ) t2
GROUP BY  t2.num,
          t2.rn2
HAVING    (COUNT(1) > 2)
;
