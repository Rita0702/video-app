class PostsController < ApplicationController
  before_action :ranking, only: [:index]

  def index
    @post = Post.new
    @posts = Post.all
    # @posts = Post.includes(:user).order("created_at DESC").limit(7)
    # @all_ranks = Post.find(Love.group(:post_id).order('count(post_id) desc').limit(3).pluck(:post_id))
    # binding.pry
    # @ranks = Post.find(Love.group(:post_id)).order('count(:post_id) desc').limit(2).pluck(:note_id)
    # @ranks = @posts.loves.find_by(user_id: current_user.id)
    # Love.find_by(user_id: current_user.id, post_id: post.id)
    # binding.pry
    # ranking_ids = Love.group(:post_id).order('count(:post_id) DESC').limit(2).keys
    # binding.pry
    # @ranking = ranking_ids.map{ |id| Post.find(id)}
    # binding.pry
    
    # product_ids = Review.group(:product_id).order('count_product_id DESC').limit(5).count(:product_id).keys
    # @ranking = product_ids.map { |id| Product.find(id) }

  end
  

  def create
    # @image = Post.new(image_params)
    # if @image.save!
    #   respond_to do |format|
    #     format.json
    #   end
    # end
    @post = Post.new(post_params)
    # binding.pry
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
    # binding.pry
  end
  # def image_params
  #   params.require(:post).permit(:image).merge(user_id: current_user.id)
  # end
end
