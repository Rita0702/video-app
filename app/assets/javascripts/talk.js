$(function () {
  function buildHTML(talk) {
    var html = `<div class='comment' data-talk-id="${talk.id}">
                  <div class='comment__name'>${talk.user_name}</div>
                  <div class='comment__text'>${talk.comment}</div>
                </div>`
    return html;
  }
  function rollcomment(talk) {
    var comment = `<div class='comment' data-talk-id="${talk.id}">
                    <div class='comment__text'><span>${talk.comment}</span></div>
                   </div>`
    return comment;
  }

  function scroll() {
    $('.comment-area').animate({ scrollTop: $('.comment-area')[0].scrollHeight });
  }

  function rightbottommove() {
    $('span:last').animate({ left: '600', top: '650' }, 1000, 'linear');
  }
  function bottommove() {
    $('span:last').animate({ left: '0', top: '650' }, 3000);
  }
  function rightmove() {
    $('span:last').animate({ left: '600', top: '180' }, 4000, 'linear');
  }
  function topreturnmove() {
    $('span:last').animate({ left: '600', top: '180' }, 2000);
    $('span:last').animate({ left: '0', top: '180' }, 1000);
  }
  function bottomreturnmove() {
    $('span:last').animate({ left: '0', top: '650' }, 1000, 'linear');
    $('span:last').animate({ left: '0', top: '180' }, 3000, 'linear');
  }
  function centermove() {
    $('span:last').animate({ left: '300', top: '250' }, 7000, 'linear');
  }


  function redmove() {
    $('span:last').css('color', 'red');
    $('span:last').css('font-size', '50px');
    $('span:last').animate({ left: '600', top: '650' }, 2000, 'linear');
  }
  function greenmove() {
    $('span:last').css('color', 'green');
    $('span:last').animate({ left: '0', top: '650' }, 1000, 'linear');
    $('span:last').animate({ left: '0', top: '180' }, 3000, 'linear');
  }
  function yellowmove() {
    $('span:last').css('color', 'yellow');
    $('span:last').animate({ left: '600', top: '180' }, 2000);
    $('span:last').animate({ left: '0', top: '180' }, 1000);
  }
  function bluemove() {
    $('span:last').css('color', 'blue');
    $('span:last').animate({ left: '600', top: '650' }, 1000, 'linear');
  }
  function whitemove() {
    $('span:last').css('color', 'white');
    $('span:last').animate({ left: '300', top: '250' }, 7000, 'linear');
  }


  function rightbottommove2() {
    $('span:last').fadeIn();
    $('span:last').css({
      'color': 'white', 'font-size': '30px',
      'position': 'absolute',
      'top': '500px',
      'left': '600px'
    });
    $('span:last').animate({ left: '0', top: '180' }, 1000, 'linear');
  }
  function bottommove2() {

    $('span:last').css({
      'color': 'white', 'font-size': '30px',
      'position': 'absolute',
      'top': '500px',
      'left': '0px'
    });
    $('span:last').animate({ left: '0', top: '180' }, 3000);
  }
  function rightmove2() {

    $('span:last').css({
      'color': 'white', 'font-size': '30px',
      'position': 'absolute',
      'top': '180px',
      'left': '600px'
    });
    $('span:last').animate({ left: '0', top: '180' }, 4000, 'linear');
  }
  function topreturnmove2() {

    $('span:last').css({
      'color': 'white', 'font-size': '30px',
      'position': 'absolute',
      'top': '180px',
      'left': '600px'
    });
    $('span:last').animate({ left: '0', top: '180' }, 2000);
    $('span:last').animate({ left: '600', top: '180' }, 1000);
  }
  function bottomreturnmove2() {

    $('span:last').css({
      'color': 'white', 'font-size': '30px',
      'position': 'absolute',
      'top': '650px',
      'left': '0px'
    });
    $('span:last').animate({ left: '0', top: '180' }, 1000, 'linear');
    $('span:last').animate({ left: '0', top: '650' }, 3000, 'linear');
  }
  function centermove2() {
    $('span:last').fadeIn();
    $('span:last').css({
      'color': 'white', 'font-size': '30px',
      'position': 'absolute',
      'top': '650px',
      'left': '600px'
    });
    $('span:last').animate({ left: '250', top: '250' }, 7000, 'linear');
  }

  function redmove2() {
    $('span:last').css('color', 'red');
    $('span:last').fadeIn();
    $('span:last').css({
      'font-size': '30px',
      'position': 'absolute',
      'top': '650px',
      'left': '600px'
    });
    $('span:last').animate({ left: '0', top: '180' }, 1000, 'linear');
  }
  function greenmove2() {
    $('span:last').css('color', 'green');
    $('span:last').css({
      'font-size': '30px',
      'position': 'absolute',
      'top': '650px',
      'left': '0px'
    });
    $('span:last').animate({ left: '0', top: '180' }, 3000);
  }
  function yellowmove2() {
    $('span:last').css('color', 'yellow');
    $('span:last').css({
      'font-size': '30px',
      'position': 'absolute',
      'top': '180px',
      'left': '600px'
    });
    $('span:last').animate({ left: '0', top: '180' }, 4000, 'linear');
  }
  function bluemove2() {
    $('span:last').css('color', 'blue');
    $('span:last').css({
      'font-size': '30px',
      'position': 'absolute',
      'top': '180px',
      'left': '600px'
    });
    $('span:last').animate({ left: '0', top: '180' }, 2000);
    $('span:last').animate({ left: '600', top: '180' }, 1000);
  }
  function whitemove2() {
    $('span:last').css({
      'color': 'white', 'font-size': '30px',
      'position': 'absolute',
      'top': '650px',
      'left': '0px'
    });
    $('span:last').animate({ left: '0', top: '180' }, 1000, 'linear');
    $('span:last').animate({ left: '0', top: '650' }, 3000, 'linear');
  }


  // ランダムに背景色変更
  function randomColor(node, colorBoolean) {
    if (node[0]) {
      if (!node[0].nodeName) return
    } else {
      if (!node.nodeName) return
    }
    if (node.style) {
      var dom = [node];
      length = 1;
    } else {
      if (!node[0].style) {
        return
      }
      var dom = node;
      length = node.length;
    }
    for (var i = 0; i < length; i++) {
      var colorR = ~~(256 * Math.random());
      var colorG = ~~(256 * Math.random());
      var colorB = ~~(256 * Math.random());
      dom[i].style.backgroundColor = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
      if (colorBoolean) {
        if (colorR + colorG + colorB > 382.5) {
          var fontColor = "#333";
        } else {
          var fontColor = "#fff";
        }
        dom[i].style.color = fontColor;
      }
    }
  }

  $('#new_talk').on('submit', function (e) {
    e.preventDefault();
    var talk = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: talk,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        var html = buildHTML(data);
        $('.comments').append(html);
        var comment = rollcomment(data);
        $('.comments').append(comment);

        $('.video_view').css('position', 'relative');
        $('span:last').css({
          'color': 'white', 'font-size': '30px',
          'position': 'absolute',
          'top': '180px',
          'left': '0px'
        });

        var number = 1 + Math.floor(Math.random() * 23);
        console.log(number);

        $(function () {
          switch (number) {
            case number = 1: randomColor($('span:last'), true); break;
            case number = 2: rightbottommove(); break;
            case number = 3: bottommove(); break;
            case number = 4: rightmove(); break;
            case number = 5: topreturnmove(); break;
            case number = 6: bottomreturnmove(); break;
            case number = 7: centermove(); break;
            case number = 8: redmove(); break;
            case number = 9: greenmove(); break;
            case number = 10: yellowmove(); break;
            case number = 11: bluemove(); break;
            case number = 12: whitemove(); break;

            case number = 13: rightbottommove2(); break;
            case number = 14: bottommove2(); break;
            case number = 15: rightmove2(); break;
            case number = 16: topreturnmove2(); break;
            case number = 17: bottomreturnmove2(); break;
            case number = 18: centermove2(); break;
            case number = 19: redmove2(); break;
            case number = 20: greenmove2(); break;
            case number = 21: yellowmove2(); break;
            case number = 22: bluemove2(); break;
            case number = 23: whitemove2(); break;
          }
        });

        $('span:last').fadeOut();
        scroll();
        $('.form-submit').prop('disabled', false);
        $('#new_talk')[0].reset();
      })
      .fail(function () {
        alert('送信エラー');
        $('.form-submit').prop('disabled', false);
      })
  })

  var moveComments = function () {

    if (window.location.href.match(/\/videos\/\d+\/talks/)) {
      last_talk_id = $('.comment:last').data("talk-id");
      console.log(last_talk_id);

      $.ajax({
        Type: 'GET',
        url: 'api/talks',
        data: { id: last_talk_id },
        dataType: 'json'
      })
        .done(function (talks) {
          var insertHTML = '';
          talks.forEach(function (talk) {
            insertHTML += buildHTML(talk);
            $('.comments').append(insertHTML);
            scroll();
            insertHTML += rollcomment(talk);
            $('.comments').append(insertHTML);

            $('.video-view').css('position', 'relative');
            $('span:last').css({
              'color': 'white', 'font-size': '30px',
              'position': 'absolute',
              'top': '180px',
              'left': '0px'
            });

            var number = 1 + Math.floor(Math.random() * 23);
            console.log(number);

            $(function () {
              switch (number) {
                case number = 1: randomColor($('span:last'), true); break;
                case number = 2: rightbottommove(); break;
                case number = 3: bottommove(); break;
                case number = 4: rightmove(); break;
                case number = 5: topreturnmove(); break;
                case number = 6: bottomreturnmove(); break;
                case number = 7: centermove(); break;
                case number = 8: redmove(); break;
                case number = 9: greenmove(); break;
                case number = 10: yellowmove(); break;
                case number = 11: bluemove(); break;
                case number = 12: whitemove(); break;

                case number = 13: rightbottommove2(); break;
                case number = 14: bottommove2(); break;
                case number = 15: rightmove2(); break;
                case number = 16: topreturnmove2(); break;
                case number = 17: bottomreturnmove2(); break;
                case number = 18: centermove2(); break;
                case number = 19: redmove2(); break;
                case number = 20: greenmove2(); break;
                case number = 21: yellowmove2(); break;
                case number = 22: bluemove2(); break;
                case number = 23: whitemove2(); break;
              }
            });

            $('span:last').fadeOut();

          })
        })
        .fail(function () {
          alert('送信エラー');
        });
    };
  }
  setInterval(moveComments, 1000);
});