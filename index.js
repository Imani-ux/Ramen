const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];

const newImages = document.getElementById('ramen-menu');

function displayRamens() {
    for (let element of ramens) {
    const ramenMenu = document.createElement('img');
        ramenMenu.src = element.image;
        ramenMenu.alt = element.name;
        ramenMenu.classList.add('img');

        newImages
    });
}

function handleClick(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.innerHTML = `
        <h2>${ramen.name}</h2>
        <p>Restaurant: ${ramen.restaurant}</p>
        <p>Rating: ${ramen.rating}</p>
        <p>Comment: ${ramen.comment || 'No comment'}</p>
    `;
}

function addSubmitListener() {
    const form = document.getElementById('ramen-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const newRamen = {
            id: ramens.length + 1,
            name: formData.get('name'),
            restaurant: formData.get('dish'),
            image: `${formData.get('dish')}.jpg`,
            rating: parseInt(formData.get('rating')),
            comment: formData.get('comments')
        };
        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventWireup('DOMContentLoaded', main)/*