# CultureMap

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: https://heritagehunter.herokuapp.com/

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

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Sites Model, API, and basic APIUtil (1.5 days)

**Objective:** Sites can be viewed but not guessed

- [x] create `Site` model
- [x] seed the database with a small amount of test data
- [ ] CRUD API for sites (`SitesController`)
- [ ] ajax request for street view for sites
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Sites can be guessed using a streetview/map `form`. Results/Summary is viewable

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each site component, building out the flux loop as needed.
  - [ ] `SitesIndex`
  - [ ] `SiteIndexItem`
  - [ ] `SiteForm`
  - [ ] `GuessResult`
  - [ ] `GameSummary`

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Favorites (1.5 days)

**Objective:** Rounds/sites can be favorited.

- [ ] create `Favorites` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching status for sites
  - [ ] adding status to sites
- [ ] Style new elements

### Phase 6: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] infinite scroll for Category Index
- [ ] Set reminders on notes

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
