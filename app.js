let countersEl = document.querySelectorAll('.counter');

console.log(countersEl);

countersEl.forEach( (counterEl) => {
    counterEl.innerText = "0";

    incrementConter()
    function incrementConter(){
        let currentNum = +counterEl.innerText;
        let dataCeil = counterEl.getAttribute("data-ceil");
        let incrementBase = Math.ceil(dataCeil/15);
        currentNum = currentNum + incrementBase;

        if(currentNum < dataCeil) {
            counterEl.innerText = currentNum;
           setTimeout(incrementConter,50)
        } else {
            counterEl.innerText = dataCeil
        }
    }
})

