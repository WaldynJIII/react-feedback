const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    pool.query('SELECT * FROM feedback ORDER BY id DESC')
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`error on get: ${error}`);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('new feedback', req.body);
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments)
                    VALUES ($1, $2, $3, $4)`;
    pool.query(queryText,
        [req.body.feedBack.feels,
        req.body.feedBack.understanding,
        req.body.feedBack.support,
        req.body.feedBack.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`error on post: ${error}`);
            res.sendStatus(500);
        });

});

module.exports = router;