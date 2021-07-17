const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.delete('/:id', (req,res) => {
    console.log('in DELETE to db');
    const feedbackId = req.params.id;
    const queryText = 'DELETE FROM feedback WHERE id=$1;';
    pool.query(queryText, [feedbackId])
    .then(response => {
        console.log('Success DELETE-ing', response);
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error DELETE-ing', error);
        res.sendStatus(500);
    })
})

router.put('/:id', (req,res) => {
    console.log('PUTting to db');
    const feedbackId = req.params.id;
    const queryText = 'UPDATE feedback SET flagged = NOT flagged WHERE id=$1;';
    pool.query(queryText, [feedbackId])
    .then(response => {
        console.log('Success PUTting', response);
        res.sendStatus(202);
    }).catch(error => {
        console.log('Error PUTting', error);
        res.sendStatus(500);
    });
});

router.get('/', (req,res) => {
    console.log('GETting database');
    pool.query('SELECT * FROM feedback ORDER BY id ASC;')
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