-- 1174 及时食物配送 II
-- Delivery
-- +-----------------------------+---------+
-- | Column Name                 | Type    |
-- +-----------------------------+---------+
-- | delivery_id                 | int     |
-- | customer_id                 | int     |
-- | order_date                  | date    |
-- | customer_pref_delivery_date | date    |
-- +-----------------------------+---------+
SELECT    ROUND(
          AVG (
          CASE
                    WHEN order_date = customer_pref_delivery_date THEN 1
                    ELSE 0
          END
          ) * 100,
          2
          ) AS immediate_percentage
FROM      (
          SELECT    *,
                    ROW_NUMBER() OVER (
                    PARTITION BY customer_id
                    ORDER BY  order_date
                    ) AS rn
          FROM      Delivery
          ) AS t
WHERE     rn = 1
;

-- 及时订单
SELECT    *
FROM      Delivery
WHERE     order_date = customer_pref_delivery_date
;

-- 首次订单
SELECT    *
FROM      (
          SELECT    *,
                    ROW_NUMBER() OVER (
                    PARTITION BY customer_id
                    ORDER BY  order_date
                    ) AS rn
          FROM      Delivery
          ) AS t
WHERE     rn = 1
;

DROP      TABLE IF EXISTS Delivery
;

CREATE    TABLE IF NOT EXISTS Delivery (delivery_id INT, customer_id INT, order_date DATE, customer_pref_delivery_date DATE)
;

TRUNCATE  TABLE Delivery
;

INSERT    INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date)
VALUES    ('1', '1', '2019-08-01', '2019-08-02')
;

INSERT    INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date)
VALUES    ('2', '2', '2019-08-02', '2019-08-02')
;

INSERT    INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date)
VALUES    ('3', '1', '2019-08-11', '2019-08-12')
;

INSERT    INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date)
VALUES    ('4', '3', '2019-08-24', '2019-08-24')
;

INSERT    INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date)
VALUES    ('5', '3', '2019-08-21', '2019-08-22')
;

INSERT    INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date)
VALUES    ('6', '2', '2019-08-11', '2019-08-13')
;

INSERT    INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date)
VALUES    ('7', '4', '2019-08-09', '2019-08-09')
;
