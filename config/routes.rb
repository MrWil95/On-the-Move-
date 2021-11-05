Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :categories, only: :index
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users
  get `/posts/categories/${:category_id}`, to: 'posts#findgeneralposts'
end
