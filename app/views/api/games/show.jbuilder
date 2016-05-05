json.game @game

json.guesses do
  json.array! @guesses do |guess|
    json.title_en guess.unesco_site.title_en
    json.title_fr guess.unesco_site.title_fr
    json.site_no guess.unesco_site.id_no
    json.lat_true guess.lat_true
    json.long_true guess.long_true
    json.lat_guess guess.lat_guess
    json.long_guess guess.long_guess
    json.points guess.points
    json.round_num guess.round_num
    json.site_id guess.site_id
    json.game_id guess.game_id
    json.id guess.id
    json.created_at guess.created_at
  end

end
