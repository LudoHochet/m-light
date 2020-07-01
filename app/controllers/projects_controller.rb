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
    clean_illustrations(@project)
    @all_photos = get_all_photos(@project)
    @count_photos = photos_count(@project)
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

# array1 = projet.photos.map { |photo| photo}
# array2 = projet.illustrations.map { |illustration| illustration.photos.map{|photo| photo}}.flatten
  # @all_photos = array1.concat(array2)
  private

  def clean_illustrations(project)
    project.illustrations.each do |illustration|
      if illustration.photos.attached? == false
        illustration.destroy
      end
    end
  end

  def get_all_photos(project)
    project_photos = project.photos.map { |photo| photo }
    illustration_photos = project.illustrations.map { |illustration| illustration.photos.map {|photo| photo}}.flatten
    all_photos = project_photos.concat(illustration_photos)
  end

  def photos_count(project)
    count = 0
    count += project.photos.count
    project.illustrations.each do |illustration|
      count += illustration.photos.count
    end
    return count
  end

  def set_project
    @project = Project.find(params[:id])
  end

  def params_projects
    params.require(:project).permit(:category, :name, :date, :location, :description, photos: [])
  end
end
