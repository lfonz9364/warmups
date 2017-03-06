require "pry"
class Robot
  attr_accessor :name, :current_names, :random_alphabet, :instruction_count

  def initialize()
    @current_names = []
    @instruction_count = 0
  end

  @@random_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".chars.to_a

  def time_count
    time = []
    seconds = Time.now.to_a[0]
    time << seconds
    return time[0]
  end

  def name
    @creation_time = Time.now.to_i
    @instruction_count += 1
    @name = ""
    @name << @@random_alphabet.sample
    @name << @@random_alphabet.sample
    @name << rand(000..999).to_s
    save_name
    check_name

  end

  def save_name
    @current_names << @name
  end

  def check_name
    @current_names[0]
  end

  def reset
    @boot_time = Time.now.to_i
    @instruction_count += 1
    @current_names = Array.new
  end

  def timers
    @current_time = Time.now.to_i
    puts "{(@current_time - @boot_time)} seconds since last boot, #{(@current_time - @creation_time)} seconds since creation"
  end

end
