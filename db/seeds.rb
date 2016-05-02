# require 'csv'

UnescoSite.delete_all

csv_text = File.read(Rails.root.join('lib', 'seeds', 'unesco_data.csv'))
csv = CSV.parse(csv_text, headers: true)
csv.each do |row|
  t = UnescoSite.new
  t.id_no = row['id_no'].to_i
  t.title_en = row['name_en']
  t.title_fr = row['name_fr']
  t.body_en = row['body_en']
  t.body_fr = row['body_fr']
  t.lat = row['lat'].to_f
  t.long = row['long'].to_f
  t.state = row['states_name_en']
  t.region = row['region']
  t.save
end


# https://www.google.com/maps/embed/v1/streetview?key=AIzaSyD0uYEJt5myjVIWmTJICUK6vOP-nndsXw8&location=46.414382,10.013988&heading=210&pitch=10&fov=35
