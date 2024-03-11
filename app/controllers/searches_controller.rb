# app/controllers/searches_controller.rb
class SearchesController < ApplicationController
  def index
    @realtors = Realtor.where("first_name LIKE ? OR last_name LIKE ?", "%#{params[:query]}%", "%#{params[:query]}%")
    puts @realtors.count
    respond_to do |format|
      format.turbo_stream do
         render turbo_stream: turbo_stream.update('realtors_list', partial: 'realtors/realtors_list', collection: @realtors)
      end
      format.html
    end
  end
end
