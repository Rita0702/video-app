Rails.application.routes.draw do
  devise_for :users
  root "videos#index"
  
  resources :users, only: [:show, :edit, :update]
  resources :videos, only: [:index, :show] do
    resources :talks, only: [:index, :create]  
    namespace :api do
      resources :talks, only: :index, defaults: { format: 'json' }
    end
  end

  resources :videos, only: [:index, :show] do
    member do
      get 'image_for'
    end
  end

  # resources :videos, only: [:index, :show] do
  #   member do
  #     get 'video_for'
  #   end
  # end
    
  resources :posts, only: [:index, :show, :create]
  # resources :posts, only: [:index, :show] do
  #   resources :comments, only: [:create]
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
