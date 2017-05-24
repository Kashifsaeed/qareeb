# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

# Stylesheets
Rails.application.config.assets.precompile += %w( appviews.css )
Rails.application.config.assets.precompile += %w( cssanimations.css )
Rails.application.config.assets.precompile += %w( dashboards.css )
Rails.application.config.assets.precompile += %w( forms.css )
Rails.application.config.assets.precompile += %w( gallery.css )
Rails.application.config.assets.precompile += %w( graphs.css )
Rails.application.config.assets.precompile += %w( mailbox.css )
Rails.application.config.assets.precompile += %w( miscellaneous.css )
Rails.application.config.assets.precompile += %w( pages.css )
Rails.application.config.assets.precompile += %w( tables.css )
Rails.application.config.assets.precompile += %w( uielements.css )
Rails.application.config.assets.precompile += %w( widgets.css )
Rails.application.config.assets.precompile += %w( doctors.css )
Rails.application.config.assets.precompile += %w( clinics.css )
Rails.application.config.assets.precompile += %w( timings.css )

# Javascripts
Rails.application.config.assets.precompile += %w( appviews.js )
Rails.application.config.assets.precompile += %w( cssanimations.js )
Rails.application.config.assets.precompile += %w( dashboards.js )
Rails.application.config.assets.precompile += %w( forms.js )
Rails.application.config.assets.precompile += %w( gallery.js )
Rails.application.config.assets.precompile += %w( graphs.js )
Rails.application.config.assets.precompile += %w( mailbox.js )
Rails.application.config.assets.precompile += %w( miscellaneous.js )
Rails.application.config.assets.precompile += %w( pages.js )
Rails.application.config.assets.precompile += %w( tables.js )
Rails.application.config.assets.precompile += %w( uielements.js )
Rails.application.config.assets.precompile += %w( widgets.js )
Rails.application.config.assets.precompile += %w( doctors.js )
Rails.application.config.assets.precompile += %w( clinics.js )
Rails.application.config.assets.precompile += %w( timings.js )