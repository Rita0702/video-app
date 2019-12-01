json.user_id @post.user.id
json.user_name @post.user.name
json.date Time.now.strftime("%Y/%m/%d %H:%M")
json.title @post.title
json.text @post.text
json.image @post.image
json.video @post.video