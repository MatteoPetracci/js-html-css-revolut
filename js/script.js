$(document).ready(
  function () {
    $('.relative a').mouseenter(
      function () {
        $(this).next('.dropdown').toggleClass('active');
      }
    );
  }
);
