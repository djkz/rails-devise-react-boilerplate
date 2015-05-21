Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}  
  root "pages#index"

  resource :profile

  resources :comments
end
