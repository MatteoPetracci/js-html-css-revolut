$(document).ready(
  function () {
    $('.relative a').hover(
      function () {
        $(this).next('.dropdown').toggleClass('active');
        $(this).next('.dropdown_product').toggleClass('active');
      }
    );
  }
);
