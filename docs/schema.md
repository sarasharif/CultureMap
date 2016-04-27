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
unesco_no   | integer   | not null
unesco_url  | string    | not null
title_en    | string    | not null
title_fr    | string    | not null
body_en     | text      | not null
body_fr     | text      | not null
state_n_en  | string    | not null
state_n_fr  | string    | not null
lat         | float     | not null
long        | float     | not null
state       | string    | not null
region      | string    | not null

## games
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
player_id   | integer   | not null, foreign key (references users), indexed
category    | string    | not null
guess1_id   | integer   | not null, foreign key (references guesses), indexed
guess2_id   | integer   | not null, foreign key (references guesses), indexed
guess3_id   | integer   | not null, foreign key (references guesses), indexed
guess4_id   | integer   | not null, foreign key (references guesses), indexed
guess5_id   | integer   | not null, foreign key (references guesses), indexed
points      | integer   | fn(guess[1..5_id.points)

## guesses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
site_id     | integer   | not null, foreign key (references unesco_sites), indexed
lat_guess   | float     |
long_guess  | float     |
points      | integer   | fn(lat_guess, long_guess, site_id.lat, site_id.long)

## favorites (BONUS)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
site_id     | string    | not null, foreign key (references unesco_sites), indexed
