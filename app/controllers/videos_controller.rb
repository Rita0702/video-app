class VideosController < ApplicationController

  def index
    @video = Video.find(1)
    @videos = Video.all
    # @videos = Video.order("id ASC").limit(5)
  end

  def show
    @video = Video.find(params[:id])
    @video = Video.new
  end

  def image_for
    @videos = Video.find(params[:id])
    send_data(@videos.image)
  end

  # def video_for
  #   @videos = Video.find(params[:id])
  #   send_data(@videos.video)
  # end

end
