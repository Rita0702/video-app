Rails.application.routes.draw do
  devise_for :users
  root "videos#index"

  resources :users, only: [:show, :edit, :update]
  resources :videos, only: [:index, :show] do
    member do
      get 'image_for'
    end
  end
  #   resources :talks, only: [:create]
  # end
  resources :posts, only: [:index, :show] do
    resources :comments, only: [:create]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
