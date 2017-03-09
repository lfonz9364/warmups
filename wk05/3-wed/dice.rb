require "pry"
require 'active_support'
require 'active_support/core_ext'

class Dice
  def self.roll(times)
    @@array = []
    currentTurn = 0
    while currentTurn != times
      @@array.push(rand(1..6).to_i)
      currentTurn = currentTurn + 1
    end
    p @@array
     self
  end

  def self.sum
    @@try = []
    @@try << @@array
    @@try << @@array.inject(0){|sum,x| sum + x}.to_i
    p @@try
  end
end

binding.pry

Dice.roll(3).sum
