const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  let sqlText = `
    SELECT * FROM favorites
      ORDER BY category_id
  `;
  pool.query(sqlText)
  .then(dbResponse => {
    console.log('GET of favorites sucessful:', dbResponse.rows);
    res.send(dbResponse.rows);
  })
  .catch(dbError => {
    console.log('GET of favorites failed miserably', dbError);
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(201);
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  const favoriteId = req.params.id;
  const newCategoryId = req.body.category_id;
  let sqlText = `
    UPDATE favorites
      SET category_id = $1
      WHERE id = $2;
  `;
  pool.query(sqlText, [newCategoryId, favoriteId])
  .then(dbResponse => {
    console.log('PUT of category id on favorites worked!');
    res.sendStatus(200);
  })
  .catch(dbError => {
    console.log('PUT of favorite category failed bummer', dbError);
    res.sendStatus(500);
  })
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const favoriteId = req.params.id;
  let sqlText = `
   DELETE FROM favorites
      WHERE id = $1;
  `;
  pool.query(sqlText, [favoriteId])
  .then(dbResponse => {
    console.log('DELETE of a favorite worked!');
    res.sendStatus(200);
  })
  .catch(dbError => {
    console.log('DELETE of a favorite totally failed- bummer', dbError);
    res.sendStatus(500);
  })
});


module.exports = router;
