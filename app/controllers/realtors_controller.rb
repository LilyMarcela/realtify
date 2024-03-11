class RealtorsController < ApplicationController
  include Pagy::Backend
  
  def index
    sort_order = params[:sort] == 'asc' ? 'asc' : 'desc'
    @pagy, @realtors = pagy(Realtor.order(first_name: sort_order), items: 10, link_extra: 'data-turbo-stream="true"')
  end
end
