API_KEY="abe9e231ab0e8d06fc8aae16abc21090";

$(function() {
  $("#btn").on('click', function() {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType: 'jsonp',
    }).done(function (data) {
      // 通信成功
    }).fail(function (data) {
      // 通信失敗
    });
  });
});