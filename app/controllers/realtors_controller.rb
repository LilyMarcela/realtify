class RealtorsController < ApplicationController
  include Pagy::Backend
  
  def index
    realtors = Realtor.all
    realtors = realtors.sorted_by(params[:order]) if params[:order].present?
    realtors = realtors.search_by_name(params[:query]) if params[:query].present?


    page = params[:page] || 1
    @pagy, @realtors = pagy(realtors, items: 10, page: page, link_extra: 'data-turbo-stream="true"')

    respond_to do |format|
      format.html
      format.turbo_stream do
        render turbo_stream: turbo_stream.update(
          'realtors_list',
          partial: 'realtors',
          collection: @realtors
        )
      end
     
    end
  end
end
