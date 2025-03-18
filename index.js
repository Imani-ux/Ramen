const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];
function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.innerHTML = `
        <h2>${ramen.name}</h2>
        <p>Restaurant: ${ramen.restaurant}</p>
        <p>Rating: ${ramen.rating}</p>
        <p>Comment: ${ramen.comment}</p>
    `;
}

function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const restaurant = document.getElementById('restaurant').value;
        const image = document.getElementById('image').value;
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;
        const newRamen = { id: ramens.length + 1, name, restaurant, image, rating, comment };
        ramens.push(newRamen);
        displayRamens();
    });
}

