// function hundleSelect() {
//     console.log('boos ok')
// }
const allBtn = document.getElementsByClassName("add-btn");

let count = 0;

for (const baton of allBtn) {
    baton.addEventListener('click', function (e) {
        // console.log("boss select korsi");
        count = count + 1;
        const placeName = e.target.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.childNodes[3].innerText

        console.log();

        // const placeName = e.target.parentNode.childNodes[1].innerText;
        // console.log(e.target.parentNode.childNodes);
        setInnerText("card-count", count);

    });
}



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}