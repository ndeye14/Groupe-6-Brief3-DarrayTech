
const searchBar = document.querySelector("#searchInput");
searchBar.addEventListener("keyup", (e) => {
    // console.log(e);
    const searchedLetters = e.target.value;
    const cards = document.querySelectorAll(".card");
    // console.log(cards);
    
    filterElements(searchedLetters, cards)
});


function filterElements(letters, elements) {
    if (letters.length > 2) {
        for (let i = 0; i < elements.length; i++) {

            if (elements[i].textContent.toLowerCase().includes(letters)) {
                elements[i].style.display = "";
            }
            else {
                elements[i].style.display = "none";
            }
    }

}
}
// ---------
// function search_formations() {
//     let input = document.getElementById('searchBar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('card');
//     // if (letters.length > 2) {
      
//         for (i = 0; i < x.length; i++) {
//             if (!x[i].innerHTML.toLowerCase().includes(input)) {
//                 x[i].style.display = "none";
//             }
//             else {
//                 x[i].style.display = "list-items";
//             }
//         }
//     // }
// }