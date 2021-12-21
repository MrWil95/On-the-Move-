Rails.application.routes.draw do
  resources :posts do
    resources :comments
  end

  resources :categories, only: [:index, :show] do
    resources :posts
  end
  
  resources :users, only: [:create, :update, :destroy] do
    resources :posts
  end

  post '/posts/:post_id/comments', to: 'comments#create'

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
end
