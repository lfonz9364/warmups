require 'test_helper'

class PokemonControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get pokemon_new_url
    assert_response :success
  end

  test "should get show" do
    get pokemon_show_url
    assert_response :success
  end

  test "should get destroy" do
    get pokemon_destroy_url
    assert_response :success
  end

end
