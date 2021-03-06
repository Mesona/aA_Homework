Rails.application.routes.draw do
  resources :albums, except: [:new]
  resources :bands do
    resources :albums, only: :new
  end
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resource :session, only: [:new, :create, :destroy]
end
