### Phase 3: Flux Architecture and Router (3 days)

**Objective:** Sites can be guessed using a streetview/map `form`. Results/Summary is viewable

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each site component, building out the flux loop as needed.
  - [ ] `SitesIndex`
  - [ ] `SiteIndexItem`
  - [ ] `SiteForm`
  - [ ] `GuessResult`
  - [ ] `GameSummary`

## Rails
### Models
* Game
* Guess

### Controllers
* Api::GamesController (create, index, show)
* Api::GuessController (create, index, show)

### Views
* games/index.json.jbuilder
* games/show.json.jbuilder
* guess/index.json.jbuilder
* guess/show.json.jbuilder


## Flux
### Views (React Components)
* GameIndex
* GuessForm
* GameForm

### Stores

### Actions

### ApiUtil

## Gems/Libraries
