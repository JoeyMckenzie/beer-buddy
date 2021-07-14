class BreweryBlueprint < Blueprinter::Base
  identifier :id
  fields :name

  view :normal do
    association :beers, blueprint: BeerBlueprint
    association :address, blueprint: AddressBlueprint
  end
end
