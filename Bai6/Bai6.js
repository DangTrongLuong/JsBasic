console.log("Hello world from JS");

// Key : Value
let obj = {
  name: "Luong",
  address: "Ha Noi",
  phone: "0974541156",
  a: function () {
    console.log("Hello world inside Object");
    return "";
  },
}; //Object

let b = "name";
obj[b] = "Dang Luong";
console.log("Type of a: ", typeof obj, "Type of b: ", typeof b);
console.log(`My name is: ${obj.name} and address is: ${obj.address}`);
console.log(`My name is: ${obj["name"]} and address is: ${obj["address"]}`);
console.log("Call function: ", obj.a);
