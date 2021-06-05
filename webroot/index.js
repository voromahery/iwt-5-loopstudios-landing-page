const heading = document.querySelector('.masthead__title')
const menu = document.querySelector('.menu')
const closeIcon = document.querySelector('.close__menu')
const navigation = document.querySelector('.navigation')

menu.style.display = 'block'
closeIcon.style.display = 'none'

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop
  ;(scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop)
    })
}

function openMenu() {
  menu.style.display = 'none'
  closeIcon.style.display = 'block'
  heading.style.zIndex = '1'
  navigation.classList.add('opened__menu')
  document.body.style.overflowY = 'hidden'
}

function closeMenu() {
  menu.style.display = 'block'
  closeIcon.style.display = 'none'
  heading.style.zIndex = '0'
  navigation.classList.remove('opened__menu')
  document.body.style.overflowY = 'visible'
}

menu.addEventListener('click', openMenu)
closeIcon.addEventListener('click', closeMenu)
