function searchSong() {
    //DOM
    const input = document.getElementById('filter').value.toUpperCase();
    console.log(input);

    const cardContainer = document.getElementById('card-list');
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('card');
    console.log(cards);

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('figcaption.card-tittle');
        console.log(title);

        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }

    }

}