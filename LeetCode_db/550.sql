-- Activity
-- player_id, device_id, event_date, games_played
--
SELECT    ROUND(
          COUNT(DISTINCT t2.player_id) / (
          SELECT    COUNT(DISTINCT player_id)
          FROM      Activity
          ),
          2
          ) fraction
FROM      (
          SELECT    t1.player_id,
                    COUNT(1)
          FROM      (
                    SELECT    player_id,
                              event_date,
                              ROW_NUMBER() OVER (
                              PARTITION BY player_id
                              ORDER BY  event_date
                              ) rn,
                              TO_DAYS(event_date) - ROW_NUMBER() OVER (
                              PARTITION BY player_id
                              ORDER BY  event_date
                              ) flag
                    FROM      Activity
                    ) t1
          WHERE     t1.rn IN ('1', '2')
          GROUP BY  t1.player_id,
                    t1.flag
          HAVING    COUNT(1) > 1
          ) t2
;

SELECT    COUNT(DISTINCT t2.player_id)
FROM      (
          SELECT    t1.player_id,
                    COUNT(1)
          FROM      (
                    SELECT    player_id,
                              event_date,
                              ROW_NUMBER() OVER (
                              PARTITION BY player_id
                              ORDER BY  event_date
                              ) rn,
                              TO_DAYS(event_date) - ROW_NUMBER() OVER (
                              PARTITION BY player_id
                              ORDER BY  event_date
                              ) flag
                    FROM      Activity
                    ) t1
          WHERE     t1.rn IN ('1', '2')
          GROUP BY  t1.player_id,
                    t1.flag
          HAVING    COUNT(1) > 1
          ) t2
;

-- SQL Schema
CREATE    TABLE IF NOT EXISTS Activity (player_id INT, device_id INT, event_date DATE, games_played INT)
;

TRUNCATE  TABLE Activity
;

INSERT    INTO Activity (player_id, device_id, event_date, games_played)
VALUES    ('1', '2', '2016-03-01', '5')
;

INSERT    INTO Activity (player_id, device_id, event_date, games_played)
VALUES    ('1', '2', '2016-03-02', '6')
;

INSERT    INTO Activity (player_id, device_id, event_date, games_played)
VALUES    ('2', '3', '2017-06-25', '1')
;

INSERT    INTO Activity (player_id, device_id, event_date, games_played)
VALUES    ('3', '1', '2016-03-02', '0')
;

INSERT    INTO Activity (player_id, device_id, event_date, games_played)
VALUES    ('3', '4', '2018-07-03', '5')
;
