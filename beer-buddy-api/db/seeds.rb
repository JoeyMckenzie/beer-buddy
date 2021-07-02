# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
# Seed some breweries with their respective addresses
brewery = Brewery.create(name: 'Fall Rivery Brewery')
Address.create(street: '1030 E Cypress Ave Suite D', city: 'Redding', state: 'CA', zip_code: '96003', brewery: brewery)

# Seed beers respective of their breweries
Beer.create(name: 'Hexagenia', ibu: 120, abv: 7.4, brewery: brewery, style: 1)