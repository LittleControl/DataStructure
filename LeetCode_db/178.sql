SELECT    s1.score,
          (
          SELECT    COUNT(DISTINCT s2.score)
          FROM      Scores s2
          WHERE     s1.score < s2.score
          ) + 1 AS 'rank'
FROM      Scores s1
ORDER BY  2
;

CREATE    TABLE IF NOT EXISTS Scores (id INT, score DECIMAL(3, 2))
;

TRUNCATE  TABLE Scores
;

INSERT    INTO Scores (id, score)
VALUES    ('1', '3.5')
;

INSERT    INTO Scores (id, score)
VALUES    ('2', '3.65')
;

INSERT    INTO Scores (id, score)
VALUES    ('3', '4.0')
;

INSERT    INTO Scores (id, score)
VALUES    ('4', '3.85')
;

INSERT    INTO Scores (id, score)
VALUES    ('5', '4.0')
;

INSERT    INTO Scores (id, score)
VALUES    ('6', '3.65')
;
