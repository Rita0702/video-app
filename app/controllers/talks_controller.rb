class TalksController < ApplicationController
  before_action :set_video

  def index
    @talk = Talk.new
    @talks = @video.talks.includes(:user)
  end

  def create
    @talk = @video.talks.new(talk_params)
    if @talk.save
      respond_to do |format|
        format.html { redirect_to video_talks_path(@video), notice: 'コメント投稿完了' }
        format.json
      end
    else
      @talks = @video.talks.includes(:user)
      render :index
    end
  end

private
  def talk_params
    params.require(:talk).permit(:comment, :video_id).merge(user_id: current_user.id)
  end

  def set_video
    @video = Video.find(params[:video_id])
  end

end