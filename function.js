
function enter_club(password) {
    if (password === "Apple123") {
        return "Access Granted";
    } else {
        return "Access Denied";
    }
}


let guest1 = "app0";
let guest2 = "Apple123";
let guest3 = "hello";
let guest4 = "Apple123";

// Guest1
console.log("guest1 : " + enter_club(guest1));
console.log("guest2 :" + enter_club(guest2));
console.log("guest3:" + enter_club(guest3));
console.log("guest4:" + enter_club(guest4));