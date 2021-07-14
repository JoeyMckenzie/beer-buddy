class BeerBlueprint < Blueprinter::Base
  identifier :id
  fields :name, :ibu, :abv, :style
end
