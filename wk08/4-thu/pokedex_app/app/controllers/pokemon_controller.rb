class PokemonController < ApplicationController
  def new
  end

  def create
    pokemon = Pokemon.new
    pokemon.species = params[:species]
    pokemon.nickname = params[:nickname]
    pokemon.level = params[:level]
    if pokemon.save
      redirect_to '/pokemon/show'
    else
      render :new
    end
  end

  def show
    @pokemons = Pokemon.all
  end

  def destroy
    pokemon = Pokemon.find([:pokemon_id])
    if pokemon.destroy
      redirect_to '/pokemon/show'
    else
      render :show
    end
  end
end
