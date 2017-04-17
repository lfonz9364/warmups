Rails.application.routes.draw do
  get '/pokemon/new', to: 'pokemon#new'
  post '/pokemon/show', to: 'pokemon#create'

  get '/pokemon/show', to: 'pokemon#show'

  delete '/pokemon/destroy', to: 'pokemon#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
