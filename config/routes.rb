Rails.application.routes.draw do
  resources :users, only: [:create, :update, :destroy] do
    resources :profiles, only: [:update, :destroy]
  end

  resources :users, only: [:create, :update, :destroy] do
    resources :posts
  end

  resources :categories, only: [:index, :show] do
    resources :posts
  end

  resources :posts do
    resources :comments
  end

  resources :posts do
    resources :likes, only: [:create, :destroy]
  end

  resources :posts do
    resources :comments do
      resources :likes, only: [:create, :destroy]
    end
  end

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  # put '/posts/:id/like', to: 'posts#like', as: 'post_likes'
  # put '/posts/:id/comments/:id/like', to: 'comments#like', as: 'comment_likes'
end
