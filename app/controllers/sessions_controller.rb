class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_pseudo(params[:session][:pseudo])
    if user && user.authenticate(params[:session][:password])
      log_in user
      params[:session][:remember_me] == '1' ? remember(user) : forget(user)
      redirect_to user_url(user.pseudo)
    else
      flash.now[:danger] = 'Vos identifiants ne sont pas corrects !'
      render 'new'
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url
  end

end
