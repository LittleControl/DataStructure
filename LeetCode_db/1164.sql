-- 写一段 SQL来查找在 2019-08-16 时全部产品的价格，假设所有产品在修改前的价格都是 10
-- Products
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | product_id    | int     |
-- | new_price     | int     |
-- | change_date   | date    |
-- +---------------+---------+
-- res: product_id price
SELECT    p.product_id AS product_id,
          CASE
                    WHEN t.new_price IS NULL THEN 10
                    ELSE t.new_price
          END AS price
FROM      (
          SELECT    DISTINCT product_id
          FROM      Products
          ) p
LEFT JOIN (
          SELECT    *,
                    ROW_NUMBER() OVER (
                    PARTITION BY product_id
                    ORDER BY  change_date DESC
                    ) AS rn
          FROM      Products
          WHERE     change_date <= '2019-08-16'
          ) AS t ON t.rn = 1
AND       p.product_id = t.product_id
;

DROP      TABLE IF EXISTS Products
;

CREATE    TABLE IF NOT EXISTS Products (product_id INT, new_price INT, change_date DATE)
;

TRUNCATE  TABLE Products
;

INSERT    INTO Products (product_id, new_price, change_date)
VALUES    ('1', '20', '2019-08-14')
;

INSERT    INTO Products (product_id, new_price, change_date)
VALUES    ('2', '50', '2019-08-14')
;

INSERT    INTO Products (product_id, new_price, change_date)
VALUES    ('1', '30', '2019-08-15')
;

INSERT    INTO Products (product_id, new_price, change_date)
VALUES    ('1', '35', '2019-08-16')
;

INSERT    INTO Products (product_id, new_price, change_date)
VALUES    ('2', '65', '2019-08-17')
;

INSERT    INTO Products (product_id, new_price, change_date)
VALUES    ('3', '20', '2019-08-18')
;
