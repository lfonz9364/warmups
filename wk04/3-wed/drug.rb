require 'pry'

source_text = File.open('source_file_txt.txt').read.gsub(/\r\n/m,",")
source_text_array = source_text.split(',')

table_content = []

i = 1
x = 0
y = 3
while source_text_array.length/4 != i  do
  temp_array = source_text_array[x..y]
  i = i + 1
  x = x + 4
  y = y + 4
  table_content.push(temp_array)
end

full_data = {}
k = 1
while k != table_content.length do
  person_transaction = []
  product_details = {}
  product_details[:product] = table_content[k][1]
  product_details[:unit_price] = table_content[k][2]
  product_details[:units] = table_content[k][3]
  total_transaction = product_details[:unit_price].to_f * product_details[:units].to_i
  product_details[:total_price] = sprintf("%0.02f", total_transaction)
  person_transaction.push(product_details)
  person_name = table_content[k][0]
  if person_name == table_content[(k-1)][0]
    full_data[person_name].push(person_transaction)
  elsif person_name != table_content[(k-1)][0]
    full_data[person_name] = person_transaction
  end
  k = k + 1
end

p full_data

binding.pry
