$(function(){
  $('.form').on('change', 'input[type="file"]', function(e) {
    var file = e.target.files[0],
        reader = new FileReader(),
        previewArea = $('.preview');

    // if(file.type.indexOf("image") < 0){
    //   return false;
    // }
    reader.onload = (function() {
      return function(e) {
        previewArea.empty();
        previewArea.append($('<img>').attr({
                  src: e.target.result,
                  width: "150px",
                  class: "preview",
              }));
      };
    })
    (file);
    reader.readAsDataURL(file);
  });
  
});

$(function(){
  function buildHTML(post){
    var text = post.text ? `<div class='post-text'>${post.text}</div>` : ``;
    var image = post.image.url ? `<img src='${post.image.url}' class='post-image'>` : ``;
    var html = `<div class='post-box'>
                  <div class='post-top'>
                    <div class='post-user'>${post.user_name}</div>
                    <div class='post-title'>${post.title}</div>
                    <div class='post-date'>${post.date}</div>
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

// $(function(){
//   function buildHTML(post){
//     var text = post.text ? `<div class='post-text'>${post.text}</div>` : ``;
//     var image = post.image.url ? `<img src='${post.image.url}' class='post-image'>` : ``;
//     var html = `<div class='post-box'>
//                   <div class='post-top'>
//                     <div class='post-user'>${post.user_name}</div>
//                     <div class='post-title'>${post.title}</div>
//                     <div class='post-date'>${post.date}</div>
//                   </div>
//                   <div class='post-bottom'>
//                     ${ text }
//                     ${ image }
//                   </div>
//                 </div>`
//     return html;
//   }

//   function scroll(){
//     $('.main-right').animate({scrollTop: $('.main-right')[0].scrollHeight });
//   }

//     Dropzone.autoDiscover = false;
//     $(".dropzone").dropzone({
//       acceptedFiles: '.jpeg,.jpg,.png',
//       maxFilesize: 5, //In MB
//       maxFiles: 5,
//       addRemoveLinks: true,
//       raddedfilefile: function (file) {
//       if (file.xhr.responseText.length > 0) {
//           // var fileId = JSON.parse(file.xhr.responseText).id;
//           var post = new FormData(this);
//           var url = $(this).attr('action');

//           $.ajax({
//             // url: '/posts',
//             url: url,
//             type: 'POST',
//             data: post,
//             dataType: 'json',
//             processData: false,
//             contentType: false
//           })
//           .done(function(data){
//             var html = buildHTML(data);
//             $('.posts-content').append(html);
//             scroll();
//             $('.form-submit').prop('disabled', false);
//             $('#new_post')[0].reset();
//           })
//           .fail(function(){
//             alert('送信エラー');
//             $('.form-submit').prop('disabled', false);
//           })
//         }
//       }
//   });
// });  
