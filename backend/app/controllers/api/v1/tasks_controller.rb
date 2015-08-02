class Api::V1::TasksController < ApplicationController
  def index
    @tasks = Task.all

    render json: @tasks
  end

  def show
    @task = Category.find(params[:id]).tasks

    render json: @task
  end
end
