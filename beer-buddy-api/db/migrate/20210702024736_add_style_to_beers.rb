class AddStyleToBeers < ActiveRecord::Migration[6.1]
  def change
    add_column :beers, :style, :integers
  end
end
