Rails.application.routes.draw do
  resources :beers
  resources :addresses
  resources :breweries
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
