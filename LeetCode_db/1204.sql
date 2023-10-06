-- 1204 最后能进入巴士的人
-- table_name: Queue
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | person_id   | int     |
-- | person_name | varchar |
-- | weight      | int     |
-- | turn        | int     |
-- +-------------+---------+
-- person_id 是这个表的主键。
-- 该表展示了所有候车乘客的信息。
-- 表中 person_id 和 turn 列将包含从 1 到 n 的所有数字，其中 n 是表中的行数。
-- turn 决定了候车乘客上巴士的顺序，其中 turn=1 表示第一个上巴士，turn=n 表示最后一个上巴士。
-- weight 表示候车乘客的体重，以千克为单位。
--
-- resloution
SELECT    c.person_name AS person_name
FROM      (
          SELECT    a.person_id  ,
                    a.person_name,
                    (
                    SELECT    SUM(b.weight)
                    FROM      Queue b
                    WHERE     b.turn <= a.turn
                    ) AS new_weight,
                    a.turn
          FROM      Queue a
          ) c
WHERE     c.new_weight <= 1000
ORDER BY  c.turn DESC
LIMIT     1
;

-- offical res
SELECT    a.person_name
FROM      Queue a,
          Queue b
WHERE     a.turn >= b.turn
GROUP BY  a.person_id
HAVING    SUM(b.weight) <= 1000
ORDER BY  a.turn DESC
LIMIT     1
;

--
-- sql schema
DROP      TABLE IF EXISTS Queue
;

CREATE    TABLE IF NOT EXISTS Queue (
          person_id INT          ,
          person_name VARCHAR(30),
          weight INT             ,
          turn INT
          )
;

TRUNCATE  TABLE Queue
;

INSERT    INTO Queue (person_id, person_name, weight, turn)
VALUES    ('5', 'Alice', '250', '1')
;

INSERT    INTO Queue (person_id, person_name, weight, turn)
VALUES    ('4', 'Bob', '175', '5')
;

INSERT    INTO Queue (person_id, person_name, weight, turn)
VALUES    ('3', 'Alex', '350', '2')
;

INSERT    INTO Queue (person_id, person_name, weight, turn)
VALUES    ('6', 'John Cena', '400', '3')
;

INSERT    INTO Queue (person_id, person_name, weight, turn)
VALUES    ('1', 'Winston', '500', '6')
;

INSERT    INTO Queue (person_id, person_name, weight, turn)
VALUES    ('2', 'Marie', '200', '4')
;
