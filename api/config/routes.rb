# frozen_string_literal: true

proxy = ApiProxy.new(
  backend: 'https://api.salesloft.com',
  prefix: '/api',
  bearer: ENV['API_KEY']
)

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  match '/api/*path', to: proxy, via: :all
end
