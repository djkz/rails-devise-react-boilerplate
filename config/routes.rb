Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}  

  resource :profile
  resources :comments

  root "pages#index"
end
