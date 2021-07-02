Rails.application.routes.draw do
  namespace :api do
    resources :beers
    resources :addresses
    resources :breweries
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
