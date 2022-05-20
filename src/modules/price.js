import getData from "./getData";
import renderGoods from "./renderGoods";
import { PriceFilter, saleFilter } from "./filters";

const price = () => {
    const minPrice = document.querySelector('#min');
    const maxPrice = document.querySelector('#max');
    const checkBoxInput = document.querySelector('#discount-checkbox'); 
    const checkboxSpan = document.querySelector('.filter-check_checkmark');
    
    // const priceForm = document.querySelector('form');
    // priceForm.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(priceForm);
    //     const url = new URL(window.location.href);
    //     url.searchParams.set('minprice', formData.get('minprice'));
    //     url.searchParams.set('maxprice', formData.get('maxprice'));
    //     window.history.replaceState(null, null, url);
    //     filterByPrice (formData.get('minprice'), formData.get('maxprice'));
    // });

    // function filterByPrice (min, max) {
    //     getData().then((data) => {
    //         let filteredData;
    //         if (max) {
    //             filteredData = data.filter(item => item.price > min && item.price < max);
    //         } else {
    //             filteredData = data.filter(item => item.price > min);
    //         }
    //         renderGoods(filteredData);
    //     });
    // }

    // if (window.location.search) {
    //     const url = new URL(window.location.href);
    //     if (url.searchParams.get('minprice') || url.searchParams.get('maxprice')) {
    //         filterByPrice (url.searchParams.get('minprice'), url.searchParams.get('maxprice'));
    //         minPrice.value = url.searchParams.get('minprice');
    //         maxPrice.value = url.searchParams.get('maxprice');
    //     }
    // }
    const minInputTimeOut = setTimeout(() => {
        minPrice.addEventListener('input', (e) => {
            getData().then((data) => {
                renderGoods(PriceFilter(saleFilter(data, checkBoxInput.checked), minPrice.value, maxPrice.value));
            });
        });
    }, 2000); 

    const maxInputTimeOut = setTimeout(() => {
        maxPrice.addEventListener('input', (e) => {
            getData().then((data) => {
                renderGoods(PriceFilter(saleFilter(data, checkBoxInput.checked), minPrice.value, maxPrice.value));
            });
        });
    }, 2000); 

    checkBoxInput.addEventListener('change', () => {
        if (checkBoxInput.checked) {
            checkboxSpan.classList.add('checked');
        } else {
            checkboxSpan.classList.remove('checked');
        }
        getData().then((data) => {
            renderGoods(PriceFilter(saleFilter(data, checkBoxInput.checked), minPrice.value, maxPrice.value));
        });
    });
};

export default price;