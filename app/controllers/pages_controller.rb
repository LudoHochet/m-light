class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
    if params[:query].present?
      @projects = Project.search_global(params[:query])
      @clear = true
      if @projects.count == 0
        @no_result = true
      end
      @projects.each do |project|
        clean_illustrations(project)
      end
    else
      @projects = Project.order(created_at:)
      # @projects = Project.order(created_at: :desc)
      @projects.each do |project|
        clean_illustrations(project)
      end
    end
  end

  def contact
    @contact = Contact.new
  end

  def about
  end

  def cqlp
  end

  def tv
    @tvs = Project.where(category: "TV")
    @clear = true
  end

  def event
    @events = Project.where(category: "Events")
    @clear = true
  end

  def live
    @lives = Project.where(category: "Live")
    @clear = true
  end

  def fashion
    @fashions = Project.where(category: "Fashion")
    @clear = true
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
