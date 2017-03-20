require "pry"
class Say

  def initialize(int)
    @int = int
  end

  def in_english
    numb_to_name = {
      1000000 => "million",
      1000 => "thousand",
      100 => "hundred",
      90 => "ninety",
      80 => "eighty",
      70 => "seventy",
      60 => "sixty",
      50 => "fifty",
      40 => "forty",
      30 => "thirty",
      20 => "twenty",
      19 => "nineteen",
      18 => "eighteen",
      17 => "seventeen",
      16 => "sixteen",
      15 => "fifteen",
      14 => "fourteen",
      13 => "thirteen",
      12 => "twelve",
      11 => "eleven",
      10 => "ten",
      9 => "nine",
      8 => "eight",
      7 => "seven",
      6 => "six",
      5 => "five",
      4 => "four",
      3 => "three",
      2 => "two",
      1 => "one",
      0 => "zero"
    }

    str = ""

    numb_to_name.each do |num, name|
      if @int == 0
        return str + "#{numb_to_name[@int]}"
      elsif @int.to_s.length == 1 && @int/num > 0
        return str + "#{name}"
      elsif @int < 100 && @int/num > 0
        if  @int%num == 0
          return str + "#{name}"
        elsif @int%num > 0
          return str + "#{name} " + Say.new(@int%num).in_english
        end
      end
    end
  end
end
binding.pry
p Say.new(22).in_english
