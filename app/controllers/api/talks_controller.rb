class Api::TalksController < ApplicationController
  def index
    video = Video.find(params[:video_id])
    @talks = video.talks.includes(:user).where("id > #{params[:id].to_i}")
  end
end