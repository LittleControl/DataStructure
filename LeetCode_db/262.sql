-- Trips
-- Users
-- 非禁止用户
SELECT    users_id,
          `ROLE`
FROM      users
WHERE     banned = 'No'
;

--取消订单
SELECT    id,
          client_id,
          driver_id,
          STATUS,
          request_at
FROM      Trips
WHERE     STATUS != 'Completed'
;

-- 订单总数
SELECT    id,
          client_id,
          driver_id,
          STATUS,
          request_at
FROM      Trips
;

-- 非禁止用户取消订单
SELECT    t.request_at,
          COUNT(1)
FROM      Trips AS `t`,
          Users AS `u`
WHERE     (
          t.client_id = u.users_id
OR        t.driver_id = u.users_id
          )
AND       u.banned = 'No'
AND       u.ROLE = 'client'
AND       t.STATUS <> 'Completed'
AND       t.request_at >= '2013-10-01'
AND       t.request_at <= '2013-10-03'
GROUP BY  t.request_at
ORDER BY  t.request_at
;

-- 非禁止用户订单
SELECT    t.request_at,
          COUNT(1)
FROM      Trips AS `t`,
          Users AS `u`
WHERE     (
          t.client_id = u.users_id
OR        t.driver_id = u.users_id
          )
AND       u.banned = 'No'
AND       u.ROLE = 'client'
AND       t.request_at >= '2013-10-01'
AND       t.request_at <= '2013-10-03'
GROUP BY  t.request_at
ORDER BY  t.request_at
;

-- resolution
SELECT    r.request_at AS `Day`,
          ROUND(
          SUM(
          CASE
                    WHEN r.STATUS <> 'Completed' THEN 1
                    ELSE 0
          END
          ) / COUNT(1),
          2
          ) AS `Cancellation Rate`
FROM      (
          SELECT    t.*,
                    MAX(
                    CASE
                              WHEN t.client_id = u.users_id THEN 1
                              ELSE NULL
                    END
                    ) AS 'client',
                    MAX(
                    CASE
                              WHEN t.driver_id = u.users_id THEN 1
                              ELSE NULL
                    END
                    ) AS 'driver'
          FROM      Trips AS `t`,
                    Users AS `u`
          WHERE     (
                    t.client_id = u.users_id
          OR        t.driver_id = u.users_id
                    )
          AND       u.banned = 'No'
          AND       t.request_at >= '2013-10-01'
          AND       t.request_at <= '2013-10-03'
          GROUP BY  t.id
          ) AS `r`
WHERE     r.client IS NOT NULL
AND       r.driver IS NOT NULL
GROUP BY  r.request_at
ORDER BY  r.request_at
;
