class LikesController < ApplicationController
  before_action :set_like, only: [:show, :destroy]
  before_action :set_user_like, only: [:destroy]

  # GET /likes
  def index
    @likes = Like.all

    render json: @likes
  end

  # GET /likes/1
  def show
    render json: @like
  end

  # POST /likes
  def create
    @like = Like.new(like_params)
    @like.user = @current_user
    @like.username = @current_user.username

    if @like.save
      render json: @like, status: :created, location: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /likes/1
  def destroy
    @like.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_like
      @like = Like.find(params[:id])
    end

    def set_user_like
      @like = @current_user.likes.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def like_params
      params.require(:like).permit(:user_id, :post_id, :comment_id)
    end
end
