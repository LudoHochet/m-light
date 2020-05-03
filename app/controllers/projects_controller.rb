class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :destroy, :edit, :update, :delete_photo_attachment]
  skip_before_action :authenticate_user!, only: [:show]

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
    @illustration = Illustration.new
  end

  def edit
  end

  def update
    @project.update(params_projects)
    redirect_to project_path(@project)
  end

  def destroy
    @project.destroy
    redirect_to root_path
  end

  def delete_photo_attachment
    @photo = @project.photos.find(params[:format])
    @photo.purge
    redirect_to project_path(@project), notice: 'Photo supprimée'
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def params_projects
    params.require(:project).permit(:category, :name, :date, :location, :description, photos: [])
  end
end


​

