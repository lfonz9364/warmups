class CreatePokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemons do |t|
      t.string :species
      t.string :nickname
      t.integer :level

      t.timestamps
    end
  end
end
