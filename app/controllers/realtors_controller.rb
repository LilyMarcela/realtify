class RealtorsController < ApplicationController
  include Pagy::Backend
  
  def index
    direction = "#{params[:direction]}"
    puts "**********************"
    puts params
    #sort_order = params[:sort] == 'asc' ? 'asc' : 'desc'
    @pagy, @realtors = pagy(Realtor.order(first_name: "desc"), items: 10, link_extra: 'data-turbo-stream="true"')
    puts '++++++++++++++++'
    puts "also heeeeere"
    puts @realtors
  end 
end
