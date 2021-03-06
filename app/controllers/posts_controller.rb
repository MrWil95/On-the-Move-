class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_post, only: [:update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts, include: :category
  end

  # GET /posts/1
  def show
    render json: @post, include: :comments
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    @post.username = @current_user.username

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  def like
    @post = Post.find.all(params[:id])
    Like.create(user_id: @current_user.id, post_id: @post.id)
    redirect_to post_path(@post)
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def set_user_post
    @post = @current_user.posts.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:content, :img_url, :link_url, :category_id, :user_id)
  end
end
