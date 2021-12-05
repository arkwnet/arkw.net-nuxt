let pmid = 'windows'
const slideShow = [
  {
    Image: 'md_prohaya',
    URL: 'https://arkw.net/products/web/prohaya/',
  },
  {
    Image: 'md_dokaben',
    URL: 'https://arkw.net/products/web/dokaben/',
  },
  {
    Image: 'md_psk',
    URL: 'https://psk.arkw.net/',
  },
  {
    Image: 'md_kin',
    URL: 'https://arkw.net/products/web/kintetsu/',
  },
  {
    Image: 'md_mei',
    URL: 'https://arkw.net/products/web/meitetsu/',
  },
]

window.onload = function () {
  $('.slider').slick({
    autoplay: true,
    arrows: false,
  })
  $('body').css('font-family', 'Noto Sans JP')
}

function changeProductsMenu(a) {
  if (pmid != a) {
    $('#pr_menu_windows').removeClass('pr_menu_selected')
    $('#pr_menu_web').removeClass('pr_menu_selected')
    $('#pr_menu_dev').removeClass('pr_menu_selected')
    $('#pr_item_windows').hide(100)
    $('#pr_item_web').hide(100)
    $('#pr_item_dev').hide(100)
    $('#pr_menu_' + a).addClass('pr_menu_selected')
    $('#pr_item_' + a).show(100)
    pmid = a
  }
}