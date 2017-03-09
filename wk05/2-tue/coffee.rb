class Coffee
attr_accessor :coffee_name, :additional_request, :size, :customer_name

  def initialize(coffee_name, additional_request, size, customer_name)
    @coffee_name = coffee_name
    @additional_request = additional_request
    @size = size
    @customer_name = mixup_name(customer_name)
  end


  def to_s
    start_time = Time.new
    puts "#{@customer_name}'s #{@coffee_name}, #{@size}, #{@additional_request}."
  end

  def mixup_name(name)
      array = "abcdefghijklmnopqrstuvwxyz".chars.to_a
      first_character = array.sample.upcase
      random = rand(1..(name.length-1)).abs.to_i
      name[random,1] = array.sample
      new_name = name.sub(/[A-Z]/, first_character)
    end

    def ready?
      binding.pry
      wait_time = Time.now - @start_time
    end
end
