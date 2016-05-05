json.game @game

json.guesses do
  json.array! @guesses do |guess|
    json.title_en guess.unesco_site.title_en
    json.title_fr guess.unesco_site.title_fr
    json.site_no guess.unesco_site.id_no
    json.true_lat guess.unesco_site.lat
    json.true_long guess.unesco_site.long

  end

end
