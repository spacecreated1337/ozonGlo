export function searchFilter (goods, value) {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    });
}

export function categoryFilter (goods, value) {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;
    });
}

export function saleFilter (goods, sale) {
    return goods.filter((goodsItem) => {
        if (sale) {
            return goodsItem.sale === true;
        } else {
            return goodsItem;
        }
    });
}

export function PriceFilter (goods, min, max) {
    return goods.filter((goodsItem) => {
        if (goodsItem.price > min && goodsItem.price < max) {
            return goodsItem.price;
        } else if (goodsItem.price > min && max == '') {
            return goodsItem.price;
        } else if (goodsItem.price < max && min == '') {
            return goodsItem.price;
        }
    });
}
