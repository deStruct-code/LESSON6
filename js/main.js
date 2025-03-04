/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");



var brandsReadMore = document.querySelector('.brands__read-more');
var brandsHideMore = document.querySelector('.brands__hide-more');
var brandsList = document.querySelector('.brands__list');
brandsReadMore.addEventListener('click', function () {
  brandsReadMore.style.display = 'none';
  brandsHideMore.style.display = 'block';
  brandsList.style.height = 'auto';
});
brandsHideMore.addEventListener('click', function () {
  brandsHideMore.style.display = 'none';
  brandsReadMore.style.display = 'block';
  brandsList.style.height = '160px';
});
var servicesList = document.querySelector('.services__list');
var servicesReadMore = document.querySelector('.services__read-more');
var servicesHideMore = document.querySelector('.services__hide-more');
servicesReadMore.addEventListener('click', function () {
  servicesReadMore.style.display = 'none';
  servicesHideMore.style.display = 'block';
  servicesList.style.height = 'auto';
});
servicesHideMore.addEventListener('click', function () {
  servicesHideMore.style.display = 'none';
  servicesReadMore.style.display = 'block';
  servicesList.style.height = '165px';
});
var textReadMore = document.querySelector('.text__read-more');
var textHideMore = document.querySelector('.text__hide-more');
textReadMore.addEventListener('click', function () {
  // document.querySelector('.text__main').style.height = 'auto';
  textReadMore.style.display = 'none';
  textHideMore.style.display = 'block';
});
textHideMore.addEventListener('click', function () {
  // document.querySelector('.text__main').style.height = '262px';
  textHideMore.style.display = 'none';
  textReadMore.style.display = 'block';
});
var modalCloseText = document.querySelector('.modal__close-text');
var modalCloseCall = document.querySelector('.modal__close-call');
var modalWindowCall = document.querySelector('.modal__call');
var modalWindowText = document.querySelector('.modal__text'); // const pricesCall = document.querySelectorAll('.prices__link');

var modalCall2 = document.querySelector('.menu__call');
var menuText = document.querySelector('.menu__text');
var wrapper = document.querySelector('.site-container');
var aside = document.querySelector('.aside');
var menuCall = document.querySelector('.header__tablet-other-call');
var menuChat = document.querySelector('.header__tablet-other-chat');
var menuBurger = document.querySelector(".header__tablet-burger");
var menu = document.querySelector('.header__tablet');
var asideClose = document.querySelector('.burger__close');
var closeAside = document.querySelector('.close-cross');
var body = document.body;
menuChat.addEventListener('click', function () {
  modalWindowText.style.right = '0px';
  modalWindowCall.style.right = '-1000px';
  wrapper.classList.add('blur');
  aside.classList.add('blur');
  menu.classList.add('blur');
});
modalCall2.addEventListener('click', function () {
  modalWindowCall.style.right = '0px';
  modalWindowText.style.right = '-1000px';
  wrapper.classList.add('blur');
  aside.classList.remove('showAside');
  aside.classList.add('blur');
});
menuCall.addEventListener('click', function () {
  aside.classList.remove('showAside');
  modalWindowCall.style.right = '0px';
  modalWindowText.style.right = '-1000px';
  wrapper.classList.add('blur');
  menu.classList.add('blur');
});
wrapper.addEventListener('çlick', function () {
  aside.classList.remove('blur');
  menu.classList.remove('blur');
}); // pricesCall.forEach(element => {
//     element.addEventListener('click', ()=>{
//         modalWindowCall.style.right = '0px';
//         modalWindowText.style.right = '-1000px';
//         wrapper.classList.add('blur');
//         aside.classList.remove('showAside');
//         aside.classList.add('blur');
//     })
// });

modalCloseCall.addEventListener('click', function () {
  body.classList.remove('no-scroll');
  modalWindowCall.style.right = '-1000px';
  aside.classList.remove('blur');
  wrapper.classList.remove('blur');
  menu.classList.remove('blur');
});
modalCloseText.addEventListener('click', function () {
  body.classList.remove('no-scroll');
  modalWindowText.style.right = '-1000px';
  wrapper.classList.remove('blur');
  aside.classList.remove('blur');
  menu.classList.remove('blur');
});
menuText.addEventListener('click', function () {
  aside.classList.remove('showAside');
  aside.classList.add('blur');
  modalWindowText.style.right = '5px';
  modalWindowCall.style.right = '-325px';
  wrapper.classList.add('blur');
  menu.classList.add('blur');
});
menuBurger.addEventListener('click', function () {
  body.classList.add('no-scroll');
  aside.classList.add('showAside');
  wrapper.classList.add('blur');
  asideClose.style.display = 'flex';
  menu.classList.add('blur');
});
closeAside.addEventListener('click', function () {
  aside.classList.remove('showAside');
  body.classList.remove('no-scroll');
  wrapper.classList.remove('blur');
  aside.classList.remove('blur');
  menu.classList.remove('blur');
});
wrapper.addEventListener('click', function () {
  body.classList.remove('no-scroll');
  aside.classList.remove('showAside');
  modalWindowCall.style.right = '-1000px';
  modalWindowText.style.right = '-1000px';
  wrapper.classList.remove('blur');
  aside.classList.remove('blur');
  menu.classList.remove('blur');
});
var swiper = new Swiper('.swiper', {
  breakpoints: {
    320: {
      enabled: true
    },
    768: {
      enabled: false
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  spaceBetween: 0,
  slidesPerView: 'auto'
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burgermenu/burger.svg */ "./img/burgermenu/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burgermenu/logo.svg */ "./img/burgermenu/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burgermenu/call.svg */ "./img/burgermenu/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burgermenu/chat.svg */ "./img/burgermenu/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burgermenu/profile.svg */ "./img/burgermenu/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burgermenu/repair.svg */ "./img/burgermenu/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burgermenu/checkstatus.svg */ "./img/burgermenu/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/readmore.svg */ "./img/readmore.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hidemore.svg */ "./img/hidemore.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/photo.png */ "./img/photo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/acer.svg */ "./img/brands/acer.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/bosch.svg */ "./img/brands/bosch.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/apple.svg */ "./img/brands/apple.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/hp.svg */ "./img/brands/hp.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/lenovo.svg */ "./img/brands/lenovo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/samsung.svg */ "./img/brands/samsung.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/sony.svg */ "./img/brands/sony.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/brands/viewsonic.svg */ "./img/brands/viewsonic.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burgermenu/close.svg */ "./img/burgermenu/close.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link\n  rel=\"stylesheet\"\n  href=\"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css\"\n/>\n<script src=\"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js\"></script>\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\n  <title>| CPS Service |</title>\n</head>\n<body class=\"body\">\n  <aside class=\"aside\">\n      <div class=\"aside__burger burger\">\n        <div class=\"aside__nav\">\n        <div href=\"#\" class=\"burger__close\">\n            <a class=\"close-cross\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"40\" height=\"40\" fill=\"#FF3E79\" rx=\"20\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M13.793 12.257a1 1 0 0 0-1.414 0l-.122.122a1 1 0 0 0 0 1.415L18.464 20l-6.207 6.206a1 1 0 0 0 0 1.415l.122.122a1 1 0 0 0 1.415 0L20 21.536l6.206 6.207a1 1 0 0 0 1.415 0l.122-.122a1 1 0 0 0 0-1.415L21.536 20l6.207-6.207a1 1 0 0 0 0-1.414l-.122-.122a1 1 0 0 0-1.415 0L20 18.464l-6.207-6.207Z\" clip-rule=\"evenodd\"/></svg>\n            </a>\n        </div>\n            <div class=\"burger__logo\"><a href=\"#\" class=\"menu__link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"98\" height=\"52\" fill=\"none\"><path fill=\"#6B7B84\" fill-rule=\"evenodd\" stroke=\"#80949F\" stroke-width=\".5\" d=\"M36.57.593a1 1 0 0 0-1 1v4.274a1 1 0 0 0 1 1h36.327c10.127 0 18.08 7.797 18.08 17.89 0 .285.232.517.518.517h5.262a.517.517 0 0 0 .517-.517c0-13.49-10.842-24.164-24.377-24.164H36.57ZM7.107 25.712a.438.438 0 0 0-.438-.438H1.164a.438.438 0 0 0-.438.438c0 13.65 10.223 24.92 23.443 25.657l42.341.037a1 1 0 0 0 1.001-1v-4.58a1 1 0 0 0-1-1H25.627c-10.237-.028-18.52-8.543-18.52-19.114Z\" clip-rule=\"evenodd\"/><path fill=\"#6B7B84\" fill-rule=\"evenodd\" d=\"M28.142 39.792c2.738 0 5.02-.532 7.273-1.627l.155-.145v-7.835l-.843 1.08c-1.622 1.773-3.801 2.749-6.266 2.749-4.592 0-9.203-2.968-9.203-8.64 0-4.287 3.18-8.842 9.041-8.842 1.17 0 4.014.276 6.424 2.836l.847 1.044v-7.8l-.148-.147c-2.296-1.15-4.638-1.71-7.308-1.71-4.567 0-8.132 1.203-10.97 3.674-1.8 1.549-4.803 5.02-4.803 10.863 0 4.321 1.538 7.695 4.826 10.622 3.058 2.682 6.45 3.878 10.974 3.878Z\" clip-rule=\"evenodd\"/><path stroke=\"#80949F\" stroke-width=\".5\" d=\"M28.142 39.792c2.738 0 5.02-.532 7.273-1.627l.155-.145v-7.835l-.843 1.08c-1.622 1.773-3.801 2.749-6.266 2.749-4.592 0-9.203-2.968-9.203-8.64 0-4.287 3.18-8.842 9.041-8.842 1.17 0 4.014.276 6.424 2.836l.847 1.044v-7.8l-.148-.147c-2.296-1.15-4.638-1.71-7.308-1.71-4.567 0-8.132 1.203-10.97 3.674-1.8 1.549-4.803 5.02-4.803 10.863 0 4.321 1.538 7.695 4.826 10.622 3.058 2.682 6.45 3.878 10.974 3.878\"/><path fill=\"#6B7B84\" fill-rule=\"evenodd\" d=\"M47.911 17.289h1.364c1.252 0 2.678.068 3.758.804.527.377 1.411 1.248 1.411 2.832 0 1.17-.517 2.219-1.37 2.873-1.096.795-2.397.75-3.443.75h-1.72v-7.26Zm3.066 12.529c3.231 0 5.76-.932 7.517-2.688 2.161-2.156 2.484-5.123 2.484-6.686 0-1.674-.397-4.937-3.057-7.3-2.18-1.911-4.507-2.389-7.789-2.389h-8.754v29.037h6.658v-9.974h2.941Z\" clip-rule=\"evenodd\"/><path fill=\"#80949F\" d=\"M47.911 17.289v-.25h-.25v.25h.25Zm5.122.804.145-.203-.004-.004-.141.207Zm.04 5.705.147.203.005-.004-.152-.199Zm-5.162.75h-.25v.25h.25v-.25Zm10.583 2.582-.176-.177.176.177Zm-.573-13.986.166-.187-.001-.002-.165.188Zm-16.543-2.389v-.25h-.25v.25h.25Zm0 29.037h-.25v.25h.25v-.25Zm6.658 0v.25h.25v-.25h-.25Zm0-9.974v-.25h-.25v.25h.25Zm-.125-12.28h1.364v-.5h-1.364v.5Zm1.364 0c1.258 0 2.609.074 3.617.761l.282-.413c-1.151-.784-2.653-.847-3.898-.847v.5Zm3.613.758c.487.349 1.306 1.154 1.306 2.629h.5c0-1.692-.95-2.63-1.516-3.035l-.29.406Zm1.306 2.629c0 1.095-.483 2.07-1.273 2.675l.304.397c.92-.704 1.47-1.828 1.47-3.072h-.5Zm-1.268 2.671c-1.017.738-2.229.702-3.295.702v.5c1.025 0 2.416.054 3.59-.797l-.294-.405Zm-3.295.702h-1.72v.5h1.72v-.5Zm-1.47.25v-7.26h-.5v7.26h.5Zm2.816 5.52c3.28 0 5.88-.947 7.694-2.761l-.353-.354c-1.699 1.698-4.158 2.615-7.341 2.615v.5Zm7.694-2.761c2.232-2.228 2.557-5.278 2.557-6.863h-.5c0 1.542-.321 4.424-2.41 6.509l.353.354Zm2.557-6.863c0-1.702-.402-5.054-3.14-7.487l-.333.373c2.581 2.293 2.973 5.468 2.973 7.114h.5Zm-3.142-7.488c-2.246-1.969-4.644-2.45-7.954-2.45v.5c3.255 0 5.51.472 7.624 2.325l.33-.375Zm-7.954-2.45h-8.754v.5h8.754v-.5Zm-9.004.25v29.036h.5V10.755h-.5Zm.25 29.286h6.658v-.5h-6.658v.5Zm6.908-.25v-9.974h-.5v9.974h.5Zm-.25-9.724h2.941v-.5h-2.94v.5Z\"/><path fill=\"#6B7B84\" fill-rule=\"evenodd\" d=\"M80.953 24.469c-1.448-1.283-3.468-2.027-5.762-2.798-1.634-.568-2.535-.882-3.135-1.429-.474-.402-.685-.839-.685-1.416 0-1.264.86-2.615 3.27-2.615 1.64 0 3.011.701 4.079 2.082l.424.548 3.516-4.475-.32-.322c-2.151-2.152-4.985-3.289-8.196-3.289-6.478 0-9.378 4.215-9.378 8.392 0 2.241.8 4.049 2.37 5.37 1.408 1.206 3.124 1.882 4.77 2.434l.185.061c1.462.483 2.974.983 3.876 1.791.629.578.908 1.205.908 2.034 0 1.9-1.496 3.177-3.723 3.177-1.76 0-4.079-.863-5.305-3.284l-.32-.635-4.371 4.046.258.365c1.394 1.974 4.54 5.286 9.945 5.286 5.96 0 10.123-3.831 10.123-9.317 0-3.138-1.377-5-2.529-6.006Z\" clip-rule=\"evenodd\"/><path stroke=\"#80949F\" stroke-width=\".5\" d=\"M80.953 24.469c-1.448-1.283-3.468-2.027-5.762-2.798-1.634-.568-2.535-.882-3.135-1.429-.474-.402-.685-.839-.685-1.416 0-1.264.86-2.615 3.27-2.615 1.64 0 3.011.701 4.079 2.082l.424.548 3.516-4.475-.32-.322c-2.151-2.152-4.985-3.289-8.196-3.289-6.478 0-9.378 4.215-9.378 8.392 0 2.241.8 4.049 2.37 5.37 1.408 1.206 3.124 1.882 4.77 2.434l.185.061c1.462.483 2.974.983 3.876 1.791.629.578.908 1.205.908 2.034 0 1.9-1.496 3.177-3.723 3.177-1.76 0-4.079-.863-5.305-3.284l-.32-.635-4.371 4.046.258.365c1.394 1.974 4.54 5.286 9.945 5.286 5.96 0 10.123-3.831 10.123-9.317 0-3.138-1.377-5-2.529-6.006\"/></svg>\n        </div>\n\n        <div class=\"burger__search\">\n            <div class=\"checkstatus desktop\"><a href=\"#\" class=\"menu__link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"40\" height=\"40\" fill=\"#FF3E79\" rx=\"20\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M12 11a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v17.5a1.5 1.5 0 0 0-1.5 1.5h-1a1.5 1.5 0 0 0-3 0h-1a1.5 1.5 0 0 0-3 0h-1a1.5 1.5 0 0 0-3 0h-1a1.5 1.5 0 0 0-1.5-1.5V11Zm9.416 10.788a4.236 4.236 0 0 1-3.086.595c-1.802-.336-3.24-1.85-3.47-3.672a4.318 4.318 0 0 1 4.994-4.83c1.802.287 3.25 1.763 3.547 3.555a4.248 4.248 0 0 1-.614 2.991l2.11 2.1a.97.97 0 0 1-1.37 1.37l-2.11-2.109Zm-4.71-3.73a2.354 2.354 0 1 1 4.707.003 2.354 2.354 0 0 1-4.707-.002Z\" clip-rule=\"evenodd\"/></svg>\n                \n                \n                            </a></div>\n        </div>\n        </div>\n\n        <div class=\"burger__list aside__list\">\n        <ul class=\"list\">\n            <li class=\"list__item\"><a href=\"#\" class=\"list__link\">Ремонт техники</a></li>\n            <li class=\"list__item\"><a href=\"#\" class=\"list__link\">Услуги и сервисы</a></li>\n            <li class=\"list__item\"><a href=\"#\" class=\"list__link\">Корпоративным клиентам</a></li>\n            <li class=\"list__item\"><a href=\"#\" class=\"list__link\">Продавцам техники</a></li>\n            <li class=\"list__item\"><a href=\"#\" class=\"list__link\">Партнерам</a></li>\n            <li class=\"list__item\"><a href=\"#\" class=\"list__link\">Производителям</a></li>\n            <li class=\"list__item\"><a href=\"#\" class=\"list__link\">Наши сервисные центры</a></li>\n            <li class=\"list__item\"><a href=\"#\" class=\"list__link\">Контакты</a></li>\n        </ul>\n        </div>\n\n        <div class=\"burger__footer\">\n        <div class=\"burger__items\">\n            <div class=\"menu__item menu__call\"> <a class=\"menu__link\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"40\" height=\"40\" fill=\"#FF3E79\" rx=\"20\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"m12.76 23.25 2.54-.29c.61-.07 1.21.14 1.64.57l1.84 1.84c2.83-1.44 5.15-3.75 6.59-6.59l-1.85-1.85a1.99 1.99 0 0 1-.57-1.64l.29-2.52c.12-1.01.97-1.77 1.99-1.77h1.73c1.13 0 2.07.94 2 2.07-.53 8.54-7.36 15.36-15.89 15.89-1.13.07-2.07-.87-2.07-2v-1.73c-.01-1.01.75-1.86 1.76-1.98Z\" clip-rule=\"evenodd\"/></svg>\n          </a>\n        </div>\n\n      <div class=\"menu__item menu__text\">\n        <a class=\"menu__link\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"40\" height=\"40\" fill=\"#FF3E79\" rx=\"20\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M28 11H12c-1.1 0-1.99.9-1.99 2L10 31l4-5h14c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2Zm-7 11h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1Zm4-5H15c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1Z\" clip-rule=\"evenodd\"/><mask id=\"a\" width=\"20\" height=\"20\" x=\"10\" y=\"11\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M28 11H12c-1.1 0-1.99.9-1.99 2L10 31l4-5h14c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2Zm-7 11h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1Zm4-5H15c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1Z\" clip-rule=\"evenodd\"/></mask></svg>\n         </a>\n        </div>\n      <div class=\"menu__item\"><a class=\"menu__link\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"40\" height=\"40\" fill=\"#FF3E79\" rx=\"20\"/><path fill=\"#fff\" d=\"M20.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM10.017 26.612c-.13.73.518 1.388 1.322 1.388H28.66c.83 0 1.453-.659 1.323-1.388C29.23 22.4 25.056 20 20 20c-5.057 0-9.231 2.4-9.983 6.612Z\"/></svg>\n          </a>\n        </div>\n        </div>\n        <div class=\"burger__footer-contacts\">\n          <a href=\"mailto:mail@cps.com\" class=\"mail\">mail@cps.com</a>\n          <a href=\"tel:88008908900\" class=\"tel\">8 800 890 8900</a>\n        </div>\n        <div class=\"langs\">\n            <a class=\"lang lang__ru\" href=\"#\">ru</a>\n            <a class=\"lang lang__en\" href=\"#\">en</a>\n            <a class=\"lang lang__ch\" href=\"#\">ch</a> \n        </div>\n        </div>\n\n      </div>\n  </aside>\n\n  <div class=\"header__tablet\">\n     <div class=\"header__tablet-logo-burger\">\n        <div class=\"img__burger\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"bm\" class=\"header__tablet-burger\">\n        </div> \n        <div class=\"img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"logo\">\n        </div>\n     </div>\n     <div class=\"header__tablet-other\">\n      <div class=\"img\">\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"call\" class=\"header__tablet-other-call\">\n    </div>\n    <div class=\"img\">\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"chat\" class=\"header__tablet-other-chat\">\n    </div>\n    <div class=\"img__profile\">\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"profile\" class=\"header__tablet-other-profile\">\n    </div>\n    <div class=\"img\">\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"repair.svg\" class=\"header__tablet-other-repair\">\n    </div>\n    <div class=\"img\">\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"checkstatus\">\n    </div>\n     </div>\n     <h1 class=\"header__title\">Услуги и сервисы</h1>\n  </div>\n\n  <div class=\"site-container \">\n\n    <header class=\"header\">\n      <h1 class=\"header__title\">Услуги и сервисы</h1>\n      <div class=\"header__menu\">\n      <div class=\"header__item\">\n        <a href=\"#\" class=\"header__link\">\n          <span class=\"header__span\"> Оставить заявку</span> <img class=\"header__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Оставить заявку\"> </a>\n      </div>\n      <div class=\"header__item\">\n        <a href=\"#\" class=\"header__link\">\n          <span class=\"header__span\">Статус ремонта</span> <img class=\"header__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Статус ремонта\"></a>\n      </div>\n    </div>\n    </header>\n\n\n    <section class=\"main\">\n\n      <div class=\"info\">\n        <ul class=\"info__list\">\n            <li class=\"info__item\"> <a href=\"#\" class=\"info__link\">Ремонтируемые бренды </a></li>\n            <li class=\"info__item\"> <a href=\"#\" class=\"info__link\">Ремонтируемые устройства </a></li>\n            <li class=\"info__item\"> <a href=\"#\" class=\"info__link\">Дополнительные услуги</a></li>\n            <li class=\"info__item\"> <a href=\"#\" class=\"info__link\">Цены на услуги</a></li>\n            <li class=\"info__item\"> <a href=\"#\" class=\"info__link\">Адреса сервисных центров</a></li>\n            <li class=\"info__item\"> <a href=\"#\" class=\"info__link\">Специальные цены</a></li>\n            <li class=\"info__item\"> <a href=\"#\" class=\"info__link\">Отзывы </a></li>\n        </ul>\n    </div>\n    <div class=\"text\">\n      <div class=\"text__main\">\n        Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\n      <br><br>\n      Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\n      <span class=\"text__read-more\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" class=\"details__arrows\" alt=\"show element\">Показать всё</span>\n      <span class=\"text__hide-more hidden\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" class=\"details__arrows\" alt=\"hide element\">Скрыть</span>\n      </div>\n\n      <div class=\"text__img\">\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Фото сервисного центра\">\n      </div>\n      \n    </div>\n\n    </section>\n\n    <section class=\"brands\">\n      <h2 class=\"secondary-title\">\n        Ремонт техники различных брендов\n      </h2>\n      <div class=\"swiper\">\n      <ul class=\"brands__list swiper-wrapper\">\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"acer\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"bosh\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"apple\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"hp\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"lenovo\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"samsung\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"sony\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"viewsonic\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"apple\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"bosch\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"brands__item swiper-slide\"><a href=\"#\" class=\"brands__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"samsung\"><svg class='brands__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n      </ul>\n      <div class=\"swiper-pagination\"></div>\n    </div>\n\n      <span class=\"brands__read-more\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" class=\"details__arrows\" alt=\"show element\">Показать всё</span>\n      <span class=\"brands__hide-more \"><img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" class=\"details__arrows\" alt=\"hide element\">Скрыть</span>\n    </section>\n\n    <section class=\"services\">\n      <h2 class=\"secondary-title\">\n        Ремонт различных видов техники\n      </h2>\n      <ul class=\"services__list\">\n        <li class=\"services__item\"><a href=\"#\" class=\"services__link\">Ремонт ноутбуков <svg class='services__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></svg> </a></li>\n        <li class=\"services__item\"><a href=\"#\" class=\"services__link\">Ремонт планшетов <svg class='services__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"services__item\"><a href=\"#\" class=\"services__link\">Ремонт ПК<svg class='services__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"services__item\"><a href=\"#\" class=\"services__link\">Ремонт мониторов<svg class='services__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"services__item\"><a href=\"#\" class=\"services__link\">Ремонт приставок<svg class='services__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"services__item\"><a href=\"#\" class=\"services__link\">Ремонт телевизоров<svg class='services__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"services__item\"><a href=\"#\" class=\"services__link\">Ремонт телефонов<svg class='services__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"services__item\"><a href=\"#\" class=\"services__link\">Ремонт роботов<svg class='services__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n        <li class=\"services__item\"><a href=\"#\" class=\"services__link\">Ремонт аудиотехники<svg class='services__svg' xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\"><rect width=\"38\" height=\"38\" x=\"1\" y=\"1\" stroke=\"#FF3E79\" stroke-width=\"2\" rx=\"19\"/><path fill=\"#FF3E79\" fill-rule=\"evenodd\" d=\"m21.5 20-3.793-3.793a1 1 0 0 1 0-1.414l.086-.086a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-.086-.086a1 1 0 0 1 0-1.414L21.5 20Z\" clip-rule=\"evenodd\"/></a></li>\n      </ul>\n      <span class=\"services__read-more\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" class=\"details__arrows\" alt=\"show element\">Показать всё</span>\n      <span class=\"services__hide-more hidden\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" class=\"details__arrows\" alt=\"hide element\">Скрыть</span>\n    </section>\n\n    <section class=\"prices\">\n      <h2 class=\"secondary-title\">Цены на услуги</h2>\n      <div class=\"prices__table\">\n        <div class=\"prices__row\">\n          <div class=\"prices__cell1 prices__title\">Ремонтные услуги</div>\n          <div class=\"prices__cell2 prices__title\">Цены</div>\n          <div class=\"prices__cell3 prices__title\">Срок</div>\n          <div class=\"prices__cell4 prices__link prices__hidden\">nothing</div>\n        </div>\n        <div class=\"prices__row\">\n          <div class=\"prices__cell1\">Диагностика</div>\n          <div class=\"prices__cell2\">Бесплатно</div>\n          <div class=\"prices__cell3\">30 мин</div>\n          <div class=\"prices__cell4 prices__link\"><a class=\"prices__modal\">заказать</a>\n          </div>\n        </div>\n        <div class=\"hr\"></div>\n        <div class=\"prices__row\">\n          <div class=\"prices__cell1\">Замена дисплея</div>\n          <div class=\"prices__cell2\">1000р.</div>\n          <div class=\"prices__cell3\">30-120 мин</div>\n          <div class=\"prices__cell4 prices__link\"><a  class=\"prices__modal\">заказать</a>\n          </div>\n        </div>\n        <div class=\"hr\"></div>\n        <div class=\"prices__row\">\n          <div class=\"prices__cell1\">Замена динамика</div>\n          <div class=\"prices__cell2\">1000р.</div>\n          <div class=\"prices__cell3\">30-120 мин</div>\n          <div class=\"prices__cell4 prices__link\"><a  class=\"prices__modal\">заказать</a>\n          </div>\n        </div>\n        <div class=\"hr\"></div>\n        <div class=\"prices__row\">\n          <div class=\"prices__cell1\">Тестирование устройства</div>\n          <div class=\"prices__cell2\">1000р.</div>\n          <div class=\"prices__cell3\">30-120 мин</div>\n          <div class=\"prices__cell4 prices__link\"><a class=\"prices__modal\">заказать</a>\n          </div>\n        </div>\n        <div class=\"hr\"> <span></span> </div>\n        <div class=\"prices__row\">\n          <div class=\"prices__cell1\">Обновление прошивки</div>\n          <div class=\"prices__cell2\">1000р.</div>\n          <div class=\"prices__cell3\">30-120 мин</div>\n          <div class=\"prices__cell4 prices__link\"><a class=\"prices__modal\">заказать</a>\n          </div>\n        </div>\n        <!-- <hr class=\"hr\"> -->\n        <div class=\"prices__row\">\n          <div class=\"prices__cell1\">Замена П.О.</div>\n          <div class=\"prices__cell2\">1000р.</div>\n          <div class=\"prices__cell3\">30-120 мин</div>\n          <div class=\"prices__cell4 prices__link\"><a class=\"prices__modal\">заказать</a>\n          </div>\n        </div>\n\n\n      </div>\n      <p class=\"prices__info\">\n        Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.\n      </p>\n      <a class=\"prices__pdf\" target=\"_blank\">\n        Получить коммерческое предложение\n      </a>\n\n    </section>\n\n    <footer class=\"footer\">\n      <p class=\"footer__rights\">\n        © 2019 CPS <br>\n        Разработано командой Apesong \n      </p>\n      <p class=\"footer__politics\">\n        Политика конфиденциальности\n      </p>\n      <p class=\"footer__info\">\n        Информация, размещенная на данной странице,<br> не является публичной офертой\n      </p>\n    </footer>\n\n  </div>\n\n  <div class=\"modal__call modal \" >\n    <img class=\"modal__close-call\"src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"close\">\n    <h2 class=\"modal__title\">\n      Заказать звонок\n    </h2>\n     <input type=\"tel\" class=\"modal__tel\" minlength=\"9\" maxlength=\"9\" placeholder=\"Телефон\">\n     <p class=\"modal__agreement\">\n      Нажимая “отправить”, вы даете согласие на <span> обработку персональных данных </span>и соглашаетесь с нашей <span>политикой конфиденциальности</span>\n     </p>\n     <a href=\"#\" class=\"modal__link\">Отправить</a>\n  </div>\n\n  <div class=\"modal__text modal\">\n    <img class=\"modal__close-text\"src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"close\">\n    <h2 class=\"modal__title\">\n      Обратная связь\n    </h2>\n    <input class =\"modal__name\" type=\"text\" id=\"name\" placeholder=\"Имя\">\n    <input class=\"modal__tel\" type=\"tel\"  minlength=\"9\" maxlength=\"9\" placeholder=\"Телефон\">\n    <input class=\"modal__email\" type=\"email\" id=\"email\" placeholder=\"Электронная почта\">\n    <textarea class=\"modal__message\" type=\"text\" placeholder=\"Сообщение\"></textarea>\n      <p class=\"modal__agreement\">\n      Нажимая “отправить”, вы даете согласие на <span> обработку персональных данных </span>и соглашаетесь с нашей <span>политикой конфиденциальности</span>\n     </p>\n     <a href=\"#\" class=\"modal__link\">Отправить</a>\n  </div>\n\n</body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/brands/acer.svg":
/*!*****************************!*\
  !*** ./img/brands/acer.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/acer.svg";

/***/ }),

/***/ "./img/brands/apple.svg":
/*!******************************!*\
  !*** ./img/brands/apple.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/apple.svg";

/***/ }),

/***/ "./img/brands/bosch.svg":
/*!******************************!*\
  !*** ./img/brands/bosch.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bosch.svg";

/***/ }),

/***/ "./img/brands/hp.svg":
/*!***************************!*\
  !*** ./img/brands/hp.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/hp.svg";

/***/ }),

/***/ "./img/brands/lenovo.svg":
/*!*******************************!*\
  !*** ./img/brands/lenovo.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/lenovo.svg";

/***/ }),

/***/ "./img/brands/samsung.svg":
/*!********************************!*\
  !*** ./img/brands/samsung.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/samsung.svg";

/***/ }),

/***/ "./img/brands/sony.svg":
/*!*****************************!*\
  !*** ./img/brands/sony.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sony.svg";

/***/ }),

/***/ "./img/brands/viewsonic.svg":
/*!**********************************!*\
  !*** ./img/brands/viewsonic.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/viewsonic.svg";

/***/ }),

/***/ "./img/burgermenu/burger.svg":
/*!***********************************!*\
  !*** ./img/burgermenu/burger.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/burger.svg";

/***/ }),

/***/ "./img/burgermenu/call.svg":
/*!*********************************!*\
  !*** ./img/burgermenu/call.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/call.svg";

/***/ }),

/***/ "./img/burgermenu/chat.svg":
/*!*********************************!*\
  !*** ./img/burgermenu/chat.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./img/burgermenu/checkstatus.svg":
/*!****************************************!*\
  !*** ./img/burgermenu/checkstatus.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/burgermenu/close.svg":
/*!**********************************!*\
  !*** ./img/burgermenu/close.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/close.svg";

/***/ }),

/***/ "./img/burgermenu/logo.svg":
/*!*********************************!*\
  !*** ./img/burgermenu/logo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./img/burgermenu/profile.svg":
/*!************************************!*\
  !*** ./img/burgermenu/profile.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./img/burgermenu/repair.svg":
/*!***********************************!*\
  !*** ./img/burgermenu/repair.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./img/hidemore.svg":
/*!**************************!*\
  !*** ./img/hidemore.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/hidemore.svg";

/***/ }),

/***/ "./img/photo.png":
/*!***********************!*\
  !*** ./img/photo.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/photo.png";

/***/ }),

/***/ "./img/readmore.svg":
/*!**************************!*\
  !*** ./img/readmore.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/readmore.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-b0975e"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map