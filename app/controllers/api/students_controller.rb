class Api::StudentsController < ApplicationController
  def index
    render json: Student.all
  end

  def create
    render json: Student.create(student_params)
  end

  def student_params
    params.require(:student).permit(:id, :name, :talent)
  end
end
