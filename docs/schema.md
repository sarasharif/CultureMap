# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## unesco_sites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
unesco_id_no| integer   | not null
unesco_url  | string    | not null
title_en    | string    | not null
title_fr    | string    | not null
body_en     | text      | not null
body_fr     | text      | not null
state_n_en  | string    | not null
state_n_fr  | string    | not null
lat         | float     | not null
long        | float     | not null
state       | string    |
region      | string    |

## games
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
player_id   | integer   | not null, foreign key (references users), indexed
category    | string    | not null (DO LATER)      
score       | integer   | fn(guess[1..5_id.points)

## guesses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
game_id     | integer   | not null, foreign key
round_num   | integer   | not null
site_id     | integer   | foreign key (references unesco_sites), indexed
lat_guess   | float     | user input from map component
long_guess  | float     | user input from map component
points      | integer   | fn(lat_guess, long_guess, site_id.lat, site_id.long)

## favorites (BONUS)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
site_id     | string    | not null, foreign key (references unesco_sites), indexed
