//enter club
function enter_club(password) {
    if (password === "Apple123") {
        return "Access Granted";
    } else {
        return "Access Denied"; 
    }
}

//check the weather
function check_weather(temperature) {
    if (temperature > 25) {
        return "It is a hot day!";
    } else {
        return "It is a lovely day!";
    }
}
