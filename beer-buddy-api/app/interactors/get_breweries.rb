class GetBreweries
  include Interactor

  def initialize(context = nil)
    @logger = Rails.logger
    super
  end

  def call
    @logger.info('Retrieving breweries from the database...')
    breweries = Brewery.all.includes(:beers, :address)
    number_of_breweries = breweries.count

    @logger.info("#{number_of_breweries} breweries retrieved!")
    mapped_breweries = BreweryBlueprint.render_as_hash(breweries, view: :normal, root: :breweries, meta: { total: number_of_breweries })

    context.response = {
      success: true,
      data: mapped_breweries,
      message: 'Breweries retrieved from the database successfully.'
    }
  end
end
