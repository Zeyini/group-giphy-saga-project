-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:
-- Favorites table:
CREATE TABLE favorites 
  ( id SERIAL PRIMARY KEY,
    giphy_id VARCHAR(200),
    title VARCHAR(200),
    url VARCHAR(500),
    category_id INT REFERENCES categories
  );


-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.