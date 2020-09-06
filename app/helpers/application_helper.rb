module ApplicationHelper

  def asset_exists? logical_path
    if Rails.configuration.assets.compile
      Rails.application.assets.find_asset(logical_path) != nil
    else
      Rails.application.assets_manifest.assets[logical_path].present?
    end
  end

end
