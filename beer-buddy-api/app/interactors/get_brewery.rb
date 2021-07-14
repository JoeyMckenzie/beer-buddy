class GetBrewery
  include Interactor

  def initialize(context = nil)
    @logger = Rails.logger
    super
  end

  def call
    @logger.info("Retrieving brewery with id #{context.id}...")
    brewery = Brewery.find(context.id)

    context.response = BreweryBlueprint.render_as_hash(brewery, view: :normal, root: :brewery)
  end
end
