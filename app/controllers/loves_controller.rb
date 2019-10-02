class LovesController < ApplicationController
  before_action :set_post

  def create
    @love = Love.new(user_id: current_user.id, post_id: @post.id)
    @love.save
      redirect_to posts_path
    # @love_conut = Love.where(post_id: @post.id).count
  end

  def destroy
    @love = Love.find_by(user_id: current_user.id, post_id: @post.id)
    @love.destroy
      redirect_to posts_path
    # @love_conut = Love.where(post_id: @post.id).count
  end

private
  def set_post
    @post = Post.find(params[:post_id])
  end
    
end
