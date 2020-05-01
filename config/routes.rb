Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
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
