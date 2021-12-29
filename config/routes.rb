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

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  
  # post '/posts/:post_id/comments', to: 'comments#create'
  # destroy 'posts/:post_id/comments/:id', to: 'comments#destroy'
end
