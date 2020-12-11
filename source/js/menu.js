  var navMain = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".page-header__toggle");
  var navWrapper = document.querySelector(".page-header__wrapper");
  var marginDownload = document.querySelector(".download__header");

  navToggle.addEventListener("click", function () {
    if (navToggle.classList.contains("page-header__toggle--closed")) {
      navToggle.classList.remove("page-header__toggle--closed");
      navMain.classList.remove("main-nav--closed");
      navWrapper.classList.remove("page-header__wrapper--closed");
      marginDownload.classList.add("download__header--opened");
      navToggle.classList.add("page-header__toggle--opened");
    } else {
      navToggle.classList.remove("page-header__toggle--opened");
      marginDownload.classList.remove("download__header--opened");
      navMain.classList.add("main-nav--closed");
      navToggle.classList.add("page-header__toggle--closed");
      navWrapper.classList.add("page-header__wrapper--closed");

    }
  });
