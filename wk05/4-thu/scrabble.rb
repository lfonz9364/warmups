require "pry"
class Scrabble

  def self.score(word)
    @score = 0
    scrabble_words = word.chomp.upcase.split("")
    scrabble_words.each do |i|
      if /[AEIOULNRST]/.match(i)
        @score = @score + 1
      elsif /[DG]/.match(i)
        @score = @score + 2
      elsif /[BCMP]/.match(i)
        @score = @score + 3
      elsif /[FHVWY]/.match(i)
        @score = @score + 4
      elsif /[K]/.match(i)
        @score = @score + 5
      elsif /[JX]/.match(i)
        @score = @score + 8
      elsif /[QZ]/.match(i)
        @score = @score + 10
      else
        @score
      end
    end
    p @score
  end
end

Scrabble.score("a"):double
