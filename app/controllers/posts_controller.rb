class PostsController < ApplicationController

  def index
    @post = Post.new
    # @posts = Post.all
    @posts = Post.includes(:user).order("created_at DESC").limit(7)
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

end
