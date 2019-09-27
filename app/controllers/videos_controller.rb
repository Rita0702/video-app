class VideosController < ApplicationController
  # before action: set_params, only: [:index, :show]
  
  def index
    @video = Video.find(1)
    @videos = Video.all
    # @videos = Video.includes(:user).order("id DESC").limit(7)
    # binding.pry
    # @tweets = Tweet.includes(:user).page(params[:page]).per(5).order("created_at DESC")
    # @video = Video.find(2)
    # @video = Video.find()
    # @videos = Video.all.order(created_at ASC)
    #@images = Image.all
    # @videos = Video.all(:select => '２id, title, created_at, updated_at')
    # respond_to do |format|
    #   format.html # index.html.erb
    #   format.xml  { render :xml => @videos }
    # end
  end

  def show
    @video = Video.find(params[:id])
  end

  def image_for
    @videos = Video.find(params[:id])
    # @videos = Video.includes(:user).order("id DESC").limit(7)
    # binding.pry
    # @video = Video.find(2)
    send_data(@videos.image)
  end

  private
    # def get_image
    #   @video = Video.find(params[:id])
    #   send_data(@video.image, :disposition => "inline", :type => "image/jpeg")
    # end

    # def video_params
    #   params.require(:video).permit(:title, :video, :image)
    # end

    # def set_params
    #   @video = Video.find(params[:id])
    # end

end
