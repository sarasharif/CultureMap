# cultureMap

Inspired by GeoGuessr, [cultureMap][culturemap] is an experience that allows users to travel the world. Competitively.

# Features.

Users can...
  - create an account
  - use demo account to access features
  - play a fun educational game
  - access their high scores and personal bests
  - view highest scores of other users

#Back-end Logic

Attributes from a selection of UNESCO World Heritage sites are captured in an `UnescoSites` model, including names and descriptions in French and English, as well as geographical location and url. Through the creation of `Game`s and `Guess`es, this data is sent through jbuilder to the frontend.

Users input a geographical location guess for each round of the game.
A haversine equation is used in the backend to calculate the distance and assign points to each round.

#Google API

Coordinates sent to the frontend are used to generate three types of Google Map products.
First, a Google Maps Panorama is created, which corresponds to a `Guess` item.
The client then utilizes a standard Google Map to send data back to the database for calculations.
![image1](https://github.com/sarasharif/CultureMap/blob/master/docs/screenshots/1.png)

Lastly, a static map containing both the true location and user guess is returned to the user.
This map is accompanied by the name of the site.
![image1](https://github.com/sarasharif/CultureMap/blob/master/docs/screenshots/2.png)


Upon completion of 5 rounds, the user is given a list of the answers, with corresponding links to the UNESCO website.
![image1](https://github.com/sarasharif/CultureMap/blob/master/docs/screenshots/3.png)



#User Profiles

Users are able to see their personal bests as well as a user scoreboard.

![image1](https://github.com/sarasharif/CultureMap/blob/master/docs/screenshots/4.png)
![image1](https://github.com/sarasharif/CultureMap/blob/master/docs/screenshots/5.png)




[culturemap]: http://www.culturemap.site
