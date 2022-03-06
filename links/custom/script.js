$(document).ready(function () {
    $('.home_btn').click(function () {
        $('.about').fadeOut()
        $('.education').fadeOut()
        $('.projects').fadeOut()
        $('.bg_img').addClass('bg_img_animation')
        $('.home').slideDown(1500)
    })
    $('.about_btn').click(function () {
        $('.home').fadeOut()
        $('.education').fadeOut()
        $('.projects').fadeOut()
        $('.bg_img').addClass('bg_img_animation')
        $('.about').slideDown(1500)
    })
    $('.education_btn').click(function () {
        $('.home').fadeOut()
        $('.about').fadeOut()
        $('.projects').fadeOut()
        $('.bg_img').addClass('bg_img_animation')
        $('.education').slideDown(1500)
    })
    $('.projects_btn').click(function () {
        $('.home').fadeOut()
        $('.education').fadeOut()
        $('.about').fadeOut()
        $('.bg_img').addClass('bg_img_animation')
        $('.projects').slideDown(1500)
    })
    $('.theme').click(function() {
        $('.theme_options').slideToggle()
    })
    $('.light_theme_btn').click(function() {
        $('body').addClass('light_theme')
        // $('body').removeClass('amazing_theme')
    })
    $('.dark_theme_btn').click(function() {
        // $('body').removeClass('amazing_theme')
        $('body').removeClass('light_theme')
    })
    // $('.amazing_theme_btn').click(() => {
    //     $('body').addClass('amazing_theme')
    //     $('body').removeClass('light_theme')
    // })
})
setInterval(() => {
    document.getElementById('bg_img').classList.remove('bg_img_animation')
}, 3000);