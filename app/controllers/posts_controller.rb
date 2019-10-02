class PostsController < ApplicationController

  def index
    @post = Post.new
    @posts = Post.all
    # @posts = Post.includes(:user).order("created_at DESC").limit(7)

    ranking_ids = Love.group(:post_id).order('count_post_id DESC').limit(5).count(:post_id).keys
    @ranking = ranking_ids.map{ |id| Post.find(id)}
    # binding.pry
    
    # product_ids = Review.group(:product_id).order('count_product_id DESC').limit(5).count(:product_id).keys
    # @ranking = product_ids.map { |id| Product.find(id) }
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
