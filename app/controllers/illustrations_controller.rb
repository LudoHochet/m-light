class IllustrationsController < ApplicationController

  def create
    @illustration = Illustration.new(params_illustrations)
    @project = Project.find(params[:project_id])
    @illustration.project = @project
    @illustration.save
    redirect_to project_path(@project)
  end

  def delete_photo_attachment
    @project = Project.find(params[:project_id])
    @illustration = Illustration.find(params[:id])
    @photo = @illustration.photos.find(params[:format])
    @photo.purge
    redirect_to project_path(@project), notice: 'Photo supprimée'
  end

  private

  def params_illustrations
    params.require(:illustration).permit(photos: [])
  end

end
