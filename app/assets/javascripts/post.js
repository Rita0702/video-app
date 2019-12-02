$(function () {
  $('.form-filefield-image').on('change', function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    previewAreaImage = $('.preview-image');

    reader.onload = (function (e) {
      previewAreaImage.empty();
      previewAreaImage.append($('<img>').attr({
        src: e.target.result,
        width: "300px",
        class: "preview",
      }));
    });
    reader.readAsDataURL(file);
  });


  $('.form-filefield-video').on('change', function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    previewAreaVideo = $('.preview-video');

    reader.onload = (function (e) {
      previewAreaVideo.empty();
      previewAreaVideo.append($('<video>').attr({
        src: e.target.result,
        width: "300px",
        height: "200px",
        class: "preview-video",
        autoplay: "autoplay",
        muted: "true",
        loop: "loop",
        playsinline: "true"
      }));
    })
    reader.readAsDataURL(file);
  })
});

$(function () {
  function buildHTML(post) {
    var text = post.text ? `<div class='post-text'>${post.text}</div>` : ``;
    var image = post.image.url ? `<img src='${post.image.url}' class='post-image'>` : ``;
    var video = post.video.url ? `<video src='${post.video.url}' controls='true' autoplay='ture' muted='true' class='post-video'>` : ``;
    var html = `<div class='post-box'>
                    <div class='post-top'>
                      <div class='post-user'>${post.user_name}</div>
                      <div class='post-title'>${post.title}</div>
                      <div class='post-date'>${post.date}</div>
                    </div>
                    <div class='post-bottom'>
                      ${ text}
                      <div class='post-flex'>
                        ${ image}
                        ${ video}
                      </div>
                    </div>
                  </div>`
    return html;
  }

  function scroll() {
    $('.main-right').animate({ scrollTop: $('.main-right')[0].scrollHeight });
  }

  $('#new_post').on('submit', function (e) {
    e.preventDefault();
    var post = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: 'POST',
      data: post,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        var html = buildHTML(data);
        $('.posts-content').append(html);
        scroll();
        $('.form-submit').prop('disabled', false);
        $('#new_post')[0].reset();
        $('.preview-image').remove();
        $('.preview-video').remove();
      })
      .fail(function () {
        alert('送信エラーです');
        $('.form-submit').prop('disabled', false);
        $('.preview-image').remove();
        $('.preview-video').remove();
      })
  })
});
