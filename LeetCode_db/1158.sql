-- 请写出一条SQL语句以查询每个用户的注册日期和在 2019 年作为买家的订单总数
-- Users
-- +----------------+---------+
-- | Column Name    | Type    |
-- +----------------+---------+
-- | user_id        | int     |
-- | join_date      | date    |
-- | favorite_brand | varchar |
-- +----------------+---------+
-- Orders
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | order_id      | int     |
-- | order_date    | date    |
-- | item_id       | int     |
-- | buyer_id      | int     |
-- | seller_id     | int     |
-- +---------------+---------+
--
-- res
--  buyer_id  | join_date  | orders_in_2019
SELECT    Users.user_id   AS buyer_id,
          Users.join_date AS join_date,
          SUM(
          CASE
                    WHEN Orders.order_date >= '2019-01-01'
                    AND       Orders.order_date < '2020-01-01' THEN 1
                              ELSE 0
          END
          ) AS orders_in_2019
FROM      Users
LEFT JOIN Orders ON Users.user_id = Orders.buyer_id
GROUP BY  Users.user_id
;
