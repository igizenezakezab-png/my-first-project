function discount() {

    let items = [500, 1000, 3000, 20000];

    
    for (let i = 0; i < items.length; i++) {


        let price = items[i];

    
        if (price > 600) {
            
            console.log("final price:", price - (price * 0.5 / 100));
        } else {
            
            console.log("discount denied");
        }
    }
}


discount();