-- 兼容id连续和不连续情况
SELECT    DISTINCT t.num AS 'ConsecutiveNums'
FROM      (
          SELECT    *,
                    ROW_NUMBER() OVER (
                    PARTITION BY num
                    ORDER BY  id
                    ) AS 'rn',
                    ROW_NUMBER() OVER (
                    ORDER BY  id
                    ) AS 'id2'
          FROM      LOGS
          ) t
GROUP BY  t.num,
          --     +1是为了防止表达式为负数, leetcode提示 bigint unsigned 数值类型问题
          (t.id2 - t.rn + 1)
HAVING    (COUNT(1) > 2)
;
