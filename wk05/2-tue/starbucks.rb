require "pry"
require_relative "coffee.rb"

c1 = Coffee.new('latte','2 sugars','medium','Darryl').to_s

puts c1
puts Coffee.new('latte','2 sugars','medium','Darryl').ready?
