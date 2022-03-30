window.onscroll = () => scrollFunction()

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.top = "0"
  } else {
    document.querySelector(".navbar").style.top = "-100px"
    $nav.classList.remove("active")
  }
}

// NAVBAR ACTIONS

const $barsIcon = document.querySelector(".barsIcon")
const $nav = document.querySelector(".nav")
const $nav_links = document.querySelectorAll(".nav-link")

window.onclick = (e) => hideMenu(e)

function hideMenu(e) {
  if (
    !e.target.classList.contains("navbar") &
    !e.target.classList.contains("barsIcon") &
    !e.target.classList.contains("switch")
  ) {
    $nav.classList.remove("active")
    if ($nav.classList.contains("active")) {
      $barsIcon.innerHTML = "close"
    } else {
      $barsIcon.innerHTML = "menu"
    }
  }
}

$barsIcon.addEventListener("click", handleClickMenu)

function handleClickMenu() {
  $nav.classList.toggle("active")
  if ($nav.classList.contains("active")) {
    $barsIcon.innerHTML = "close"
  } else {
    $barsIcon.innerHTML = "menu"
  }
}

$nav_links.forEach((el) => {
  el.addEventListener("click", handleLinkClick)
})

function handleLinkClick() {
  $nav.classList.remove("active")
}

// SWITCH

const btnSwitch = document.querySelector("#switch")

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("light")
  btnSwitch.classList.toggle("active")
  changeColors()
})

function changeColors() {
  const icon_linkedin = document.querySelectorAll("#icon_linkedin")
  const icon_github = document.querySelectorAll("#icon_github")
  if (document.body.classList.contains("light")) {
    icon_linkedin.forEach((el) => (el.src = "../images/icon_linkedin_black.svg"))
    icon_github.forEach((el) => (el.src = "../images/icon_github_black.svg"))
  } else {
    icon_linkedin.forEach((el) => (el.src = "../images/icon_linkedin.svg"))
    icon_github.forEach((el) => (el.src = "../images/icon_github.svg"))
  }
}
