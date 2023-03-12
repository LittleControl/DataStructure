-- id连续
SELECT    t1.num AS 'ConsecutiveNums'
FROM      (
          SELECT    id,
                    num,
                    id - (
                    ROW_NUMBER() OVER (
                    PARTITION BY num
                    ORDER BY  num
                    )
                    ) AS 'flag'
          FROM      LOGS
          ) t1
GROUP BY  t1.num,
          t1.flag
HAVING    (COUNT(1) > 2)
;

CREATE    TABLE IF NOT EXISTS LOGS (id INT, num INT)
;

TRUNCATE  TABLE LOGS
;

INSERT    INTO LOGS (id, num)
VALUES    ('1', '1')
;

INSERT    INTO LOGS (id, num)
VALUES    ('2', '1')
;

INSERT    INTO LOGS (id, num)
VALUES    ('3', '1')
;

INSERT    INTO LOGS (id, num)
VALUES    ('4', '2')
;

INSERT    INTO LOGS (id, num)
VALUES    ('5', '1')
;

INSERT    INTO LOGS (id, num)
VALUES    ('6', '2')
;

INSERT    INTO LOGS (id, num)
VALUES    ('7', '2')
;
