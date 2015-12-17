require 'sinatra'
require 'omniauth-ravelry'
require 'sinatra/reloader' if development?
require 'json'
require 'pry'
require 'pry-nav'

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

  def set_user
    info = session[:info]
    @user = { username: info['nickname'], first_name: info['first_name'] }.to_json
  end
end

get '/' do
  redirect to('/login') unless current_user
  set_user unless @user
  haml :index
end

get '/login' do
  haml :login
end

get '/logout' do
  session[:uid] = nil
  @user = nil
  haml :login
end

post '/auth/:name/callback' do
  # this is here because...?
end

get '/auth/ravelry/callback' do
  session[:uid] = request.env['omniauth.auth']['uid']
  session[:info] = request.env['omniauth.auth']['info']
  set_user
  puts @user
  redirect to('/')
end
