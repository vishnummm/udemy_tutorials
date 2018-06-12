$(function(){

    var $header = $('header');
    var headerClone = $header.clone().addClass('sticky');
    headerClone.insertBefore($header);

    $(document).scroll(function(e){
       var needsHeaderClone = ($(window).scrollTop() > 25 );
        console.log(needsHeaderClone);
       $('body').toggleClass('scroll', needsHeaderClone);
    })
});