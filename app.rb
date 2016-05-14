require 'sinatra'
require 'sinatra/json'
require 'omniauth-ravelry'
require 'json'
require 'gon-sinatra'

require_relative 'user'

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
  def authenticate!
    redirect to('/') unless current_user || @user
    set_user
  end

  def current_user
    !session[:uid].nil?
  end

  def set_user
    @user = User.new(session[:uid], session[:info][:first_name])
    gon.user = @user.data
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

before '/pattern/*' do
  authenticate!
end

get '/' do
  if current_user
    set_user unless @user
    haml :index, layout: :pattern
  else 
    haml :login
  end
end

# PATTERN RENDERING

get '/pattern/notes' do
  haml :notes, layout: :pattern
end

get '/pattern/charts' do
  haml :charts, layout: :pattern
end

get '/pattern/customizations' do
  haml :customizations, layout: :pattern
end

get '/pattern/custom-sizing' do
  haml :custom_sizing, layout: :pattern
end

get '/pattern/stitch-counts' do
  haml :stitch_counts, layout: :pattern
end

get '/pattern/photos' do
  haml :photos, layout: :pattern
end

# LOGGING IN AND OUT

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
  redirect to('/')
end
