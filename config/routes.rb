Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :categories, only: [:index, :show]
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users
end
