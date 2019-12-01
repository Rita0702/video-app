crumb :root do
  link "トップページ", root_path, class: 'top'
end

crumb :talk do
  link "view&talk", video_talks_path
  parent :root
end

crumb :post do
  link 'post&rank', posts_path
  parent :root
end