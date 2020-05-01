class IllustrationsController < ApplicationController

  def create
    @illustration = Illustration.new(params_illustrations)
    @project = Project.find(params[:project_id])
    @illustration.project = @project
    @illustration.save
    redirect_to project_path(@project)
  end

  private

  def params_illustrations
    params.require(:illustration).permit(photos: [])
  end

end
