Rails.application.routes.draw do
  devise_for :users
  root "videos#index"

  resources :users, only: [:show, :edit, :update]
  resources :videos, only: [:index, :show]
    resources :talks, only: [:create]
  resources :posts, only: [:index, :show]
    resources :comments, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
