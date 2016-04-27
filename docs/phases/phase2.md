### Phase 2: Sites Model, API, and basic APIUtil (1.5 days)

- [ ] create `UnescoSite` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for sites (`SitesController`)
- [ ] ajax request for street view for sites
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

## Rails
### Models
* Site

### Controllers
* Api::SitesController (index, show)

### Views

## Flux
### Views (React Components)


### Stores

### Actions
* ApiActions.receiveAllSites -> triggered by ApiUtil
* ApiActions.receiveSingleNote
* SiteActions.fetchAllSites -> triggers ApiUtil
* SiteActions.fetchSingleSite

### ApiUtil
* ApiUtil.fetchAllSites
* ApiUtil.fetchSingleSite

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
