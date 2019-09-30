json.array! @talks do |talk|
  json.comment talk.comment
  json.user_name talk.user.name
  json.id talk.id
end