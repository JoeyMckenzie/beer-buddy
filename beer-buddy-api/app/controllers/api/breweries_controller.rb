module Api
  class BreweriesController < ApplicationController
    def initialize
      @logger = Rails.logger
      super
    end

    # GET /breweries
    def index
      @logger.info('Received request to retrieve all breweries')
      get_breweries_response = GetBreweries.call

      render json: ApiResponseBlueprint.render(get_breweries_response.response)
    end

    # GET /breweries/1
    def show
      get_brewery_response = GetBrewery.call(params)

      render json: get_brewery_response.response
    end

    # POST /breweries
    def create
      @brewery = Brewery.new(brewery_params)

      if @brewery.save
        render json: @brewery, status: :created, location: @brewery
      else
        render json: @brewery.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /breweries/1
    def update
      if @brewery.update(brewery_params)
        render json: @brewery
      else
        render json: @brewery.errors, status: :unprocessable_entity
      end
    end

    # DELETE /breweries/1
    def destroy
      @brewery.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_brewery
      @brewery = Brewery.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def brewery_params
      params.require(:brewery).permit(:name)
    end
  end
end
