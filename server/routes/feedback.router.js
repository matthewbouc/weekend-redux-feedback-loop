const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req,res) => {
    console.log('GETting database');
    pool.query('SELECT * FROM feedback;')
        .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error GETting from database', error);
        res.sendStatus(500);
    });
});

router.post('/', (req,res) => {
    const {
        feeling,
        understanding,
        support,
        comments
    } = req.body;
    const queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [feeling, understanding, support, comments])
    .then(response => {
        console.log('Success POSTing to db', response);
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error POSTing to db', error);
        res.sendStatus(500);
    });
});

module.exports = router;