class Api::V1::TasksController < ApplicationController
  def update
    @task = Task.find(params[:id])
    @task.update(task_params)

    render json: @task
  end

  def create
    @task = Task.new(task_params)
    @task.save!

    render json: @task
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
  end

  private

  def task_params
    params.require(:task).permit(:name, :category_id)
  end
end

