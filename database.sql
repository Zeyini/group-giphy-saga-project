-- Database name should be: giphy_search_favorites
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS categories;


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

CREATE TABLE favorites 
  ( id SERIAL PRIMARY KEY,
    giphy_id VARCHAR(200),
    title VARCHAR(200),
    url VARCHAR(500),
    category_id INT REFERENCES categories DEFAULT NULL
  );

  