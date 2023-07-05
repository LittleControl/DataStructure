-- 602. 好友申请 II ：谁有最多的好友
-- RequestAccepted
-- requester_id accepter_id accept_date
--
SELECT    *
FROM      RequestAccepted ra1
LEFT JOIN RequestAccepted ra2 ON ra1.requester_id = ra2.accepter_id
GROUP BY  ra1.requester_id
HAVING    COUNT
;

SELECT    t.id     AS 'id',
          COUNT(*) AS 'num'
FROM      (
          SELECT    requester_id AS 'id'
          FROM      RequestAccepted ra1
          UNION ALL
          SELECT    accepter_id AS 'id'
          FROM      RequestAccepted ra2
          ) t
GROUP BY  t.id
ORDER BY  COUNT(*) DESC
LIMIT     1
;
