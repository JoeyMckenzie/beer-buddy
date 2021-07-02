class Beer < ApplicationRecord
  belongs_to :brewery

  enum style: {
    lager: 0,
    ipa: 1,
    double_ipa: 2,
    triple_ipa: 3,
    stout: 4,
    porter: 5,
  }
end
