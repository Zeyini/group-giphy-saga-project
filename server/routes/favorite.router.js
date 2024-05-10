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
  const newFavorite = req.body;
  sqlText = `
    INSERT INTO favorites
      ( giphy_id,
        title,
        url,
        category_id )
      VALUES ( $1, $2, $3, $4);
    `;
    pool.query(sqlText, [newFavorite.giphy_id, 
                         newFavorite.title,
                         newFavorite.url,
                         newFavorite.category_id ])
    .then(dbResponse => {
      console.log('Post of new favorite worked! Yay!');
      res.sendStatus(201);
    })
    .catch(dbError => {
      console.log('Error in sad post of favorite', dbError);
      res.sendStatus(500);
    })
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  console.log('Updating a favorite!');
  console.log('req.params', req.params);
  console.log('req.body', req.body)
  const favoriteId = req.params.id;
  const newCategoryId = req.body.category;
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
