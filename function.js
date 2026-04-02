//enterclub
function enter_club(password) {
    if (password === "Apple123") {
        return "Access Granted"; 
    } else {
        return "Access Denied";
    }
}
let users = [
    { name: "Alice", password: "Apple123" },
    { name: "Bob", password: "wrong1" },
    { name: "John", password: "Apple123" },
    { name: "Emma", password: "12345" }
];
for (let i = 0; i < users.length; i++) {
      if (users[i].password === "Apple123") {
        console.log(users[i].name + ": Access Granted");
    } else {
        console.log(users[i].name + ": Access Denied");
    }
}

