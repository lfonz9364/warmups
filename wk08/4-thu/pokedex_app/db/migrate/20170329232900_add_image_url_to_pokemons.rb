class AddImageUrlToPokemons < ActiveRecord::Migration[5.0]
  def change
    add_column :pokemons, :image_url, :text
  end
end
