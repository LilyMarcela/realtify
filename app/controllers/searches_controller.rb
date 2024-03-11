# app/controllers/searches_controller.rb
class SearchesController < ApplicationController
    include Pagy::Backend

  def index
    realtors = Realtor.where("first_name LIKE ? OR last_name LIKE ?", "%#{params[:query]}%", "%#{params[:query]}%")
    @pagy, @realtors = pagy(realtors.order(first_name: "desc"), items: 10, link_extra: 'data-turbo-stream="true"')
    puts "heeeeeereeeee"
    respond_to do |format|
      format.turbo_stream do
         render turbo_stream: turbo_stream.update('realtors_list', partial: 'realtors/realtors', collection: @realtors)
      end
    end
  end
end
