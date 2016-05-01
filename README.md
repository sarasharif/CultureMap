# CultureMap

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: https://culturemap.herokuapp.com/

## Minimum Viable Product

CultureMap is a web application inspired by GeoGuessr that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [x] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an GeoGuessr-inspired site: Users will be able to initialize a game, input their guess on a zoom-able Google map, and receive a score and information about the true location
- [ ] Users will also be able to access all sites they have guessed, and favorite any sites included in that index
- [x] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README

## Product Goals and Priorities

CultureMap will allow users to do the following:

- [x] Create an account (MVP)
- [x] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Choose to initialize a game and enter the Google Street View of a randomly selected UNESCO World Heritage Site (MVP)
- [ ] Input a guess (lat/long) for each of 5 rounds (MVP)
- [ ] Receive a score and map for each site after each round with a button to advance to the next round (MVP)
- [ ] Receive a score and map at the end of each game with a button to initiate another game (MVP)
- [ ] Receive information from UNESCO regarding each site (expected feature, but not MVP)
- [ ] Filter game-play by country/continent (expected feature, but not MVP)
- [ ] View previously played rounds and scores (expected feature, but not MVP)
- [ ] View game score statistics (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/wireframes.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline For Week 2

### Done.

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin
- [x] create `Site` model
- [x] seed db with UN csv
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### M/T: GamePlay BEST be done.

**Objective:** Users can initialize game, play 5 rounds, and get a score/info

- [ ] backend algorithms
- [ ] Flux Loop for updating user guess data(lat, long, round_num)
- [ ] Add "information" component
- [ ] ajax request distance/points/map/UN data

### W/Th: Everything Profile

**Objective:** Users can access their profile! And see the sites they've been to.

- [ ] Set up the components in path: /me
- [ ] Flux Loop it up
- [ ] Get requests on get requests
- [x] setup React Router

### F: Cloudinary/Bootstrap/FlexBox/AllThePrettyThings

**Objective:** Streamline the site. UX flow should be OBVIOUS.

- [ ] Get your splash page image to actually work on Heroku
- [ ] Fix that hideous navbar
- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals to signup/signin form, transitions, and other styling flourishes.

### Bonus: Favorites (Weekend)

**Objective:** Previously guessed sites can be favorited and accessed by the user.

- [ ] create `Favorites` model and join table
- build out API, Flux loop, and components for:
- [ ] fetching status for sites
- [ ] adding status to sites
- [ ] Style new elements

### Bonus Features (TBD)
- [ ] infinite scroll for Category Index
