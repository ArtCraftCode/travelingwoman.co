require 'sinatra'
require 'omniauth-ravelry'
require 'sinatra/reloader' if development?

DEVELOPMENT = false
DEVELOPMENT = true if development?

configure do
  set :sessions, true
  use Rack::Session::Cookie
  use OmniAuth::Builder do
    provider :ravelry, ENV['RAV_ACCESS'], ENV['RAV_SECRET']
  end
end

helpers do
  def current_user
    !session[:uid].nil?
  end

  def assets_path(type)
    return "/dist/#{type}" if DEVELOPMENT
    return "/#{type}"
  end
end

get '/' do
  redirect to('/auth/ravelry') unless current_user
  haml :index
end

post '/auth/:name/callback' do
  # this is here because...?
end

get '/auth/ravelry/callback' do
  session[:uid] = request.env['omniauth.auth']['uid']
  redirect to('/')
end
