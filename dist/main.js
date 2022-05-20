/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/price */ \"./src/modules/price.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_price__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n    const cartBtn = document.getElementById('cart');\r\n    const cartModal = document.querySelector('.cart');\r\n    const cartCloseBtn = cartModal.querySelector('.cart-close');\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    const cartTotal = cartModal.querySelector('.cart-total > span');\r\n    const cartWrapper = document.querySelector('.cart-wrapper');\r\n    const cartSendBtn = document.querySelector('.cart-confirm');\r\n    let cartCounter = cartBtn.querySelector('.counter');\r\n    \r\n    function cartCount () {\r\n        let counter = JSON.parse(localStorage.getItem('cart')).length;\r\n        console.log(counter)\r\n        cartCounter.textContent = counter;\r\n    }\r\n\r\n    const openCart = () => {\r\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ;\r\n        cartModal.style.display = 'flex';\r\n        (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n        cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n            return sum + goodItem.price;\r\n        }, 0);\r\n    };\r\n\r\n    const closeCart = () => {\r\n        cartModal.style.display = '';\r\n    };\r\n\r\n    cartBtn.addEventListener('click', openCart);\r\n    cartCloseBtn.addEventListener('click', closeCart);\r\n\r\n    goodsWrapper.addEventListener('click', (e) => {\r\n        if (e.target.matches('.btn-primary')) {\r\n            const card = e.target.closest('.card');\r\n            const key = card.dataset.key;\r\n            const goods = JSON.parse(localStorage.getItem('goods'));\r\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ;\r\n            const goodItem = goods.find((item) => {\r\n                return item.id === +key;\r\n            });\r\n            cart.push(goodItem);\r\n            localStorage.setItem('cart', JSON.stringify(cart));\r\n            cartCount ();\r\n        }\r\n    });\r\n\r\n    cartWrapper.addEventListener('click', (e) => {\r\n        if (e.target.matches('.btn-primary')) {\r\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ;\r\n            const card = e.target.closest('.card');\r\n            const key = card.dataset.key;\r\n            const index = cart.findIndex((item) => {\r\n                return item.id === +key;\r\n            });\r\n            cart.splice(index, 1);\r\n            localStorage.setItem('cart', JSON.stringify(cart));\r\n            (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n        cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n            return sum + goodItem.price;\r\n        }, 0);\r\n        }\r\n        cartCount ();\r\n    });\r\n\r\n    cartSendBtn.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ;\r\n        cartCounter.textContent = 0;\r\n        (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n            localStorage.removeItem('cart');\r\n            (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\r\n        });\r\n        cartTotal.textContent = 0;\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const btnCatalog = document.querySelector('.catalog-button > button');\r\n    const catalogModal = document.querySelector('.catalog');\r\n    const catalogModalItems = document.querySelectorAll('.catalog li');\r\n    let isOpen = false;\r\n\r\n    btnCatalog.addEventListener('click', () => {\r\n        isOpen = !isOpen;\r\n        if (isOpen) {\r\n            catalogModal.style.display = 'block';\r\n        } else {\r\n            catalogModal.style.display = '';\r\n        }\r\n    });\r\n\r\n    catalogModalItems.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            const text = item.textContent;\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text));\r\n            });\r\n        });\r\n    });\r\n};  \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PriceFilter\": () => (/* binding */ PriceFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"saleFilter\": () => (/* binding */ saleFilter),\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\nfunction searchFilter (goods, value) {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase());\r\n    });\r\n}\r\n\r\nfunction categoryFilter (goods, value) {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.category === value;\r\n    });\r\n}\r\n\r\nfunction saleFilter (goods, sale) {\r\n    return goods.filter((goodsItem) => {\r\n        if (sale) {\r\n            return goodsItem.sale === true;\r\n        } else {\r\n            return goodsItem;\r\n        }\r\n    });\r\n}\r\n\r\nfunction PriceFilter (goods, min, max) {\r\n    return goods.filter((goodsItem) => {\r\n        if (goodsItem.price > min && goodsItem.price < max) {\r\n            return goodsItem.price;\r\n        } else if (goodsItem.price > min && max == '') {\r\n            return goodsItem.price;\r\n        } else if (goodsItem.price < max && min == '') {\r\n            return goodsItem.price;\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getData(str) {\r\n    return fetch(\r\n        `https://ozonglo-47663-default-rtdb.firebaseio.com/goods.json`)\r\n    .then((response) => {\r\n        return response.json();\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst load = () => {\r\n    const cartBtn = document.getElementById('cart');\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction postData(cart) {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(cart),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n      })\r\n      .then(res => res.json());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/price.js":
/*!******************************!*\
  !*** ./src/modules/price.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst price = () => {\r\n    const minPrice = document.querySelector('#min');\r\n    const maxPrice = document.querySelector('#max');\r\n    const checkBoxInput = document.querySelector('#discount-checkbox'); \r\n    const checkboxSpan = document.querySelector('.filter-check_checkmark');\r\n    \r\n    // const priceForm = document.querySelector('form');\r\n    // priceForm.addEventListener('submit', (e) => {\r\n    //     e.preventDefault();\r\n    //     const formData = new FormData(priceForm);\r\n    //     const url = new URL(window.location.href);\r\n    //     url.searchParams.set('minprice', formData.get('minprice'));\r\n    //     url.searchParams.set('maxprice', formData.get('maxprice'));\r\n    //     window.history.replaceState(null, null, url);\r\n    //     filterByPrice (formData.get('minprice'), formData.get('maxprice'));\r\n    // });\r\n\r\n    // function filterByPrice (min, max) {\r\n    //     getData().then((data) => {\r\n    //         let filteredData;\r\n    //         if (max) {\r\n    //             filteredData = data.filter(item => item.price > min && item.price < max);\r\n    //         } else {\r\n    //             filteredData = data.filter(item => item.price > min);\r\n    //         }\r\n    //         renderGoods(filteredData);\r\n    //     });\r\n    // }\r\n\r\n    // if (window.location.search) {\r\n    //     const url = new URL(window.location.href);\r\n    //     if (url.searchParams.get('minprice') || url.searchParams.get('maxprice')) {\r\n    //         filterByPrice (url.searchParams.get('minprice'), url.searchParams.get('maxprice'));\r\n    //         minPrice.value = url.searchParams.get('minprice');\r\n    //         maxPrice.value = url.searchParams.get('maxprice');\r\n    //     }\r\n    // }\r\n    const minInputTimeOut = setTimeout(() => {\r\n        minPrice.addEventListener('input', (e) => {\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.PriceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, checkBoxInput.checked), minPrice.value, maxPrice.value));\r\n            });\r\n        });\r\n    }, 2000); \r\n\r\n    const maxInputTimeOut = setTimeout(() => {\r\n        maxPrice.addEventListener('input', (e) => {\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.PriceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, checkBoxInput.checked), minPrice.value, maxPrice.value));\r\n            });\r\n        });\r\n    }, 2000); \r\n\r\n    checkBoxInput.addEventListener('change', () => {\r\n        if (checkBoxInput.checked) {\r\n            checkboxSpan.classList.add('checked');\r\n        } else {\r\n            checkboxSpan.classList.remove('checked');\r\n        }\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.PriceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, checkBoxInput.checked), minPrice.value, maxPrice.value));\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (price);\n\n//# sourceURL=webpack://ozon/./src/modules/price.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst renderCart = (goods) => {\r\n    const cartWrapper = document.querySelector('.cart-wrapper');\r\n    cartWrapper.innerHTML = '';\r\n    if (goods.length === 0) {\r\n        cartWrapper.insertAdjacentHTML('beforeend', `\r\n        <div id=\"cart-empty\">\r\n            Ваша корзина пока пуста\r\n        </div>\r\n        `);\r\n    } else {\r\n        goods.forEach((goodsItem) => {\r\n            cartWrapper.insertAdjacentHTML('beforeend', `\r\n                <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url('${goodsItem.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodsItem.price} P</div>\r\n                        <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                        <button class=\"btn btn-primary\">Удалить</button>\r\n                    </div>\r\n                </div>\r\n            `);\r\n        });\r\n    }\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    \r\n    localStorage.setItem('goods', JSON.stringify(goods));\r\n\r\n    goodsWrapper.innerHTML = '';\r\n    goods.forEach((goodsItem) => {\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                    <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url('${goodsItem.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodsItem.price} P</div>\r\n                        <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchInput = document.querySelector('.search-wrapper_input');\r\n    searchInput.addEventListener('input', (e) => {\r\n        const value = e.target.value;\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;