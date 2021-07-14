# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# Add logging
Rails.logger = Logger.new(STDOUT)
Rails.logger.level = Logger::INFO
Rails.logger.datetime_format = "%Y-%m-%d %H:%M:%S"
