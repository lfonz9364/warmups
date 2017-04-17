def get_squares numbers
  perfect_square = []
  numbers.each do |number|
    number_to_check = Math.sqrt(number)
    if number_to_check % 1 == 0 && !perfect_square.include?(number)
      perfect_square.push(number)
    end
  end
  p perfect_square.sort
end

get_squares([4, 1, 16, 1, 10, 35, 22])
