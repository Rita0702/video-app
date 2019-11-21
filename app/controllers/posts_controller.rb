class PostsController < ApplicationController
  before_action :ranking, only: [:index]

  def index
    @post = Post.new
    @posts = Post.all
  end
  

  def create
    @post = Post.new(post_params)
    if @post.save
      respond_to do |format|
        format.html { redirect_to posts_path }
        format.json
      end
    else
      @posts = @post.includes(:user)
      render :index
    end
  end

private
  def post_params
    params.require(:post).permit(:title, :text, :image).merge(user_id: current_user.id)
  end

  def ranking
    @love_count_id = Love.group(:post_id).order('count_post_id DESC').limit(3).count(:post_id).keys
    @love_count_post = @love_count_id.map{|id| Post.find(id)}
    @love_count = @love_count_id.map{|id| Love.where(post_id: id).count}
  end
  
end
