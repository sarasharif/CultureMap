Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :show, :destroy]
    resources :unesco_sites, only: [:show, :index]
    resources :games, only: [:create, :show, :index]
    resources :guesses, only: [:update]
  end

end
