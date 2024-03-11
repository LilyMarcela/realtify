module RealtorsHelper
   def sort_link(label:)
          link_to(label, realtors_path(direction: next_direction))
    end

    def next_direction
      params[:direction] == 'asc' ? 'desc' : 'asc'
    end

    def sort_indicator
      tag.span(class: "sort sort-#{params[:direction]}")
    end
end
