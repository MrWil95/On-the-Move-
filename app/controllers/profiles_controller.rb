class ProfilesController < ApplicationController
  before_action :set_profile, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_profile, only: [:update, :destroy]

  # GET /comments
  def index
    @profiles = Profile.all

    render json: @profiles
  end

  # GET /comments/1
  def show
    render json: @profile
  end

  # POST /comments
  def create
    @profile = Profile.new(profile_params)
    @profile.user = @current_user
    @profile.username = @current_user.username

    if @profile.save
      render json: @profile, status: :created
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @profile.update(profile_params)
      render json: @profile
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @profile.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_profile
      @profile = Profile.find(params[:id])
    end

    def set_user_profile
      @profile = @current_user.profiles.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def profile_params
      params.require(:profile).permit(:avatar, :email, :user_id)
    end
end
