class VideosController < ApplicationController

  def index
    @video = Video.find(1)
    @videos = Video.all.where.not(id: 1)
    # @videos = Video.order("id ASC").limit(5)
  end

  def image_for
    @videos = Video.find(params[:id])
    send_data(@videos.image)
  end

end
