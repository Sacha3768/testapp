module ApplicationHelper

  # Returns the full title on a per-page basis.
  def full_title(page_title = '')
    base_title = "GaiaServeur"
    if page_title.empty?
      base_title
    else
      page_title + " | " + base_title
    end
  end

  def nav_link(link_text, link_path)
    class_name = current_page?(link_path) ? 'active' : ''

    link_to link_text, link_path, class: class_name
  end
end