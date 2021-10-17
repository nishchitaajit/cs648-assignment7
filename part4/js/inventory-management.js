/*eslint-env browser*/

function updateInventory(number, newStock, inventory) {
    for (i = 0; i < inventory.length; i += 1) {
        if (parseInt(inventory[i][0]) === parseInt(number)) {
            inventory[i][2] = "(".concat(newStock).concat(")");
            window.console.log("Sku Number " + number + " was updated.");
        }
    }
}

function showInventory(inventory) {
    window.console.log("List of inventory \n");
    for (var index = 0; index < inventory.length; index++) {
        window.console.log(inventory[index][0] + ", " + inventory[index][1] + ", " + inventory[index][2] + ", " + inventory[index][3]);

    }
}

function main() {
    var inventory = [
        [4824, "Shirt", "(10)", "$15 .99"],
        [6343, "Jeans", "(22)", "$39.99"],
        [3223, "Socks", "(36)", "$9.99"],
        [2233, "Hat", "(12)", "$14.99"],
        [9382, "Jacket", "(5)", "$49.99"]
    ];

    while (true) {
        var command = window.prompt("Enter a  command you wish to perform :\n 1.Show \n 2.Update\n 3.Exit");
        command = command.toLowerCase();
        if (command == "show") {
            showInventory(inventory);
        } else if (command == "update") {
            number = window.prompt("Enter Sku Number");
            newStock = window.prompt("Enter New Stock Quantity");
            updateInventory(number, newStock, inventory);
        } else if (command == "exit") {
            break;
        } else {
            window.alert("Wrong Input");
            break;
        }
    }
}

main();
