class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :destroy]

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(params_projects)
    if @project.save
      redirect_to project_path(@project)
    else
      render new
    end
  end

  def show
  end

  def destroy
    @project.destroy
    redirect_to root_path
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def params_projects
    params.require(:project).permit(:category, :name, :date, :location, :description, photos: [])
  end
end

