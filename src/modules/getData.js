function getData(str) {
    return fetch(
        `https://ozonglo-47663-default-rtdb.firebaseio.com/goods.json`)
    .then((response) => {
        return response.json();
    });
}

export default getData;