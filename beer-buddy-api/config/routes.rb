Rails.application.routes.draw do
  namespace :api do
    resources :beers
    resources :addresses
    resources :breweries do
      resources :beers
    end
  end
end
