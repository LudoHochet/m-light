Rails.application.routes.draw do
  get 'contacts/create'
  devise_for :users
  root to: 'pages#home'
  get '/contact', to: 'pages#contact'
  get '/about', to: 'pages#about'
  get '/cqlp', to: 'pages#cqlp'
  get '/tv', to: 'pages#tv'
  get '/event', to: 'pages#event'
  get '/live', to: 'pages#live'
  get '/fashion', to: 'pages#fashion'
  resources :contacts, only: [:create]
  resources :projects do
    member do
      delete :delete_photo_attachment
    end
    resources :illustrations, only: [:create] do
      member do
        delete :delete_photo_attachment
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
