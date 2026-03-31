function discount (){
let iterm1 = 500;
let iterm2 = 1000;
let iterm3 = 3000;
let iterm4 = 20000;


     if (item1 > 600) {
        let disc = item1 * 0.5 / 100;
        let finalPrice = item1 - disc;
        console.log(item1 + " -> discount applied, final price: " + finalPrice);
    } else {
        console.log(item1 + " -> discount denied");
    }
    if(iterm2 > 600){
        let  disc = iterm2 * 0.5/100;
        let finalPrice = iterm2-disc;
        console.log(iterm2 + "-> discount applied, final price:+ finalprice");

    }
    if (item3> 600) {
        let disc = item1 * 0.5 / 100;
        let finalPrice = item1 - disc;
        console.log(item2+ " -> discount applied, final price: " + finalPrice);
    } else {
        console.log(item2 + " -> discount denied");
    }
    if (item3 > 600) {
        let disc = item1 * 0.5 / 100;
        let finalPrice = item1 - disc;
        console.log(item3+ " -> discount applied, final price: " + finalPrice);
    } else {
        console.log(item3 + " -> discount denied");
    }
    if (item4 > 600) {
        let disc = item1 * 0.5 / 100;
        let finalPrice = item1 - disc;
        console.log(item4 + " -> discount applied, final price: " + finalPrice);
    } else {
        console.log(item4 + " -> discount denied");
    }
}

discount()
