Rails.application.routes.draw do
  resources :homes, only: [:index]
  namespace :api do
    resources :students, only: [:index, :create]
  end
end
