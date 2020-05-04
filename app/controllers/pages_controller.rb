class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    if params[:query].present?
      @projects = Project.search_global(params[:query])
    else
      @projects = Project.order(:created_at)
      @tvs = Project.where(category: "TV")
      @fashions = Project.where(category: "Mode")
      @events = Project.where(category: "Events")
      @lives = Project.where(category: "Live")
    end
  end

  def contact
    @contact = Contact.new
  end
end
