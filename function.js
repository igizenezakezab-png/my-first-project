
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
if (guest1 === "Apple123") {
    console.log("Guest1: Access Granted");
} else {
    console.log("Guest1: Access Denied");
}

// Guest2
if (guest2 === "Apple123") {
    console.log("Guest2: Access Granted");
} else {
    console.log("Guest2: Access Denied");
}

// Guest3
if (guest3 === "Apple123") {
    console.log("Guest3: Access Granted");
} else {
    console.log("Guest3: Access Denied");
}

// Guest4
if (guest4 === "Apple123") {
    console.log("Guest4: Access Granted");
} else {
    console.log("Guest4: Access Denied");
}