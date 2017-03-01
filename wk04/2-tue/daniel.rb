
def leetSpeak(sentence)
  sentenceArray = sentence.partition(" ")
  puts 'Bro,' + sentenceArray[1..-1].join.gsub(/[aeiost]/,'a'=>'4','e'=>'3','i'=>'1','o'=>'0')
end

loop do
  puts "Please start the conversation. (say 'goodbye' if you are going)"
  start_chat = gets.chomp
  if start_chat.match(/\?/)
    puts "Sure"
  elsif start_chat.partition(" ").first == 'Bro,'
    leetSpeak(start_chat)
  elsif start_chat.empty?
    puts "Fine. Be that way!"
  elsif start_chat == start_chat.upcase
    puts "Woah, chill out!"
  elsif start_chat == 'goodbye'
    break
  else
    puts "Whatever"
  end
end
