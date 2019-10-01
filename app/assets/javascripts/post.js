$(function(){
  function buildHTML(post){
    var text = post.text ? `<div class='post-text'>${post.text}</div>` : ``;
    var image = post.image.url ? `<img src='${post.image.url}' class='post-image'>` : ``;
    var html = `<div class='post-box'>
                  <div class='post-top'>
                    <div class='post-user'>${post.user_name}</div>
                    <div class='post-title'>${post.title}</div>
                    <div class='post-date'>${post.date}</div>
                    <div class='good-button'>❤️</div>
                    <div class='good-count'>10</div>
                  </div>
                  <div class='post-bottom'>
                    ${ text }
                    ${ image }
                  </div>
                </div>`
    return html;
  }

  function scroll(){
    $('.main-right').animate({scrollTop: $('.main-right')[0].scrollHeight });
  }
  
  $('#new_post').on('submit',function(e){
    e.preventDefault();
    var post = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      // url: '/posts',
      url: url,
      type: 'POST',
      data: post,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.posts-content').append(html);
      scroll();
      $('.form-submit').prop('disabled', false);
      $('#new_post')[0].reset();
    })
    .fail(function(){
      alert('送信エラー');
      $('.form-submit').prop('disabled', false);
    })
  })
});

