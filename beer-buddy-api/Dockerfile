# Use the Ruby 2.7.1 image from Docker Hub
# as the base image (https://hub.docker.com/_/ruby)
FROM ruby:2.7.3

# Use a directory called /code in which to store
# this beer-buddy-apilication's files. (The directory name
# is arbitrary and could have been anything.)
WORKDIR /app

# Copy all the beer-buddy-apilication's files into the /code
# directory.
COPY ./beer-buddy-api/Gemfile Gemfile
# COPY ./beer-buddy-api/Gemfile.lock ./Gemfile.lock

# Run bundle install to install the Ruby dependencies.
RUN bundle install

COPY ./beer-buddy-api .

# Set "rails server -b 0.0.0.0" as the command to
# run when this container starts.
CMD ["rails", "s", "-b", "0.0.0.0", "-p", "3001", "-e", "production"]