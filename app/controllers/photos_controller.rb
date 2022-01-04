class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :update, :destroy]

  # GET /photos
  def index
    @photos = Photo.all

    render json: @photos
  end

  # GET /photos/1
  def show
    render json: @photo
  end

  # POST /photos
  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render json: @photo, status: :created, location: @photo
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /photos/1
  def update
    if params[:file]
      @profile.avatar.attach(params[:file])
      photo = url_for(@profile.avatar)

    elsif params[:camera]
      blob = ActiveStorage::Blob.create_after_upload!(
        io: StringIO.new((Base64.decode64(params[:camera].split(',')[1]))),
        filename: 'user.png',
        content_type: 'image/png',
      )
      @profile.avatar.attach(blob)
      photo = url_for(@profile.avatar)
      
    else 
      photo = photo_params[:photo]
    end

    if @profile.update(photo: photo)
      render json: @profile, status: :ok
    end
  end

  # DELETE /photos/1
  def destroy
    @photo.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def photo_params
      params.require(:photo).permit(:content, :profile_id, :user_id)
    end
end
