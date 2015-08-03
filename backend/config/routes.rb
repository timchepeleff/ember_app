Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :categories

      resources :tasks, only: [:create, :new, :destroy, :edit, :update]
    end
  end
end
