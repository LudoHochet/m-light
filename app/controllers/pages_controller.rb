class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    if params[:query].present?
      @projects = Project.search_global(params[:query])
      @clear = "clear the result"
      if @projects.count == 0
        @result = "sorry no result"
      end
      @projects.each do |project|
        clean_illustrations(project)
      end
    else
      @projects = Project.order(:created_at)
      @projects.each do |project|
        clean_illustrations(project)
      end
    end
  end

  def contact
    @contact = Contact.new
  end

  def tv
    @tvs = Project.where(category: "TV")
  end

  def event
    @events = Project.where(category: "Events")
  end

  def live
    @lives = Project.where(category: "Live")
  end

  def fashion
    @fashions = Project.where(category: "Fashion")
  end

  private

    def clean_illustrations(project)
    project.illustrations.each do |illustration|
      if illustration.photos.attached? == false
        illustration.destroy
      end
    end
  end
end
