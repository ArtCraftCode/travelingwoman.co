require 'sinatra'
require 'sinatra/json'
require 'omniauth-ravelry'
require 'json'
require 'gon-sinatra'

# dev gems
require 'pry' if development?
require 'pry-nav' if development?
require 'sinatra/reloader' if development?

configure do
  set :sessions, true
  set :session_secret, 'super secret'
  use OmniAuth::Builder do
    provider :ravelry, ENV['RAV_ACCESS'], ENV['RAV_SECRET']
  end
  Sinatra::register Gon::Sinatra
end

helpers do
  def current_user
    !session[:uid].nil?
  end

  def set_user
    info = session[:info]
    @user = { username: info['nickname'], first_name: info['first_name'] }
    gon.user = @user
    @user
  end

  def clear_session
    session[:info] = nil
    session[:uid] = nil
    @user = nil
  end

  def set_session
    session[:uid] = request.env['omniauth.auth']['uid']
    session[:info] = request.env['omniauth.auth']['info']
  end
end

get '/' do
  if current_user
    set_user unless @user
    json [@user, session[:uid], session[:info]]
  else 
    haml :login
  end
end

get '/login' do
  haml :login
end

get '/logout' do
  clear_session
  redirect to('/')
end

post '/auth/:name/callback' do
  # this is here because...?
end

get '/auth/ravelry/callback' do
  set_session
  set_user
  json @user
end
