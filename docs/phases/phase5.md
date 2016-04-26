### Phase 5: Favorites (1.5 days)

**Objective:** Rounds/sites can be favorited.

- [ ] create `Favorites` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching status for sites
  - [ ] adding status to sites
- [ ] Style new elements


## Rails
### Models
* Favorite

### Controllers
* Api::FavoritesController (create, destroy, index, show, update)

### Views
* favorites/index.json.jbuilder

## Flux
### Views (React Components)
* FavoritesIndex
  - FavoriteIndexItem
* FavoriteShow
* FavoriteForm

### Stores
* Favorite

### Actions
* ApiActions.receiveAllFavorites -> triggered by ApiUtil
* ApiActions.receiveSingleFavorite
* ApiActions.deleteFavorite
* FavoriteActions.fetchAllFavorites -> triggers ApiUtil
* FavoriteActions.fetchSingleFavorite
* FavoriteActions.createFavorite
* FavoriteActions.updateFavorite
* FavoriteActions.destroyFavorite

### ApiUtil
* ApiUtil.fetchAllFavorites
* ApiUtil.fetchSingleFavorite
* ApiUtil.createFavorite
* ApiUtil.updateFavorite
* ApiUtil.destroyFavorite

## Gems/Libraries
