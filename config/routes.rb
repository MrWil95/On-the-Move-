Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :categories, only: :index
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users
  # get `/posts/categories/${:categoryid}`, 'posts#findgeneralposts'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
