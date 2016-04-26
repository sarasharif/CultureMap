# Flux Cycles

## Game Cycles

* `createGame`
  0. invoked from PLAY button `onClick`
  0. `POST /api/games` is called.
  0. `receiveSingleGame` is set as the callback.
  0. state includes `category`.

* `fetchSingleGuess`
  0. this is called 5 times.
  0. `GET /api/guess/:id` is called.
  0. `receiveSingleGuess` is set as the callback.

* `updateGuess`
  0. invoked from `GuessForm` `onSubmit`
  0. `POST /api/guesses` is called.
  0. `receiveSingleGuess` is set as the callback.


### Notes API Response Actions

* `receiveAllGuesses`
  0. invoked from an API callback.
  0. `Guess` store updates `_guesses` and emits change.

* `receiveSingleGuess`
  0. invoked from an API callback.
  0. `Guess` store updates `_guesses[id]` and emits change.


### Store Listeners

* `GuessIndex` component listens to `Guess` store.
* `GameSummary` component listens to `Game` store.
