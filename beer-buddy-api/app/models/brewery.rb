class Brewery < ApplicationRecord
  has_many :beers, :dependent => :destroy
  has_one :address, :dependent => :destroy
end
