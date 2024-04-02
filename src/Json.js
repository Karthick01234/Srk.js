let email = "vhhjv@gmail.com"
let obj = {
    name: '',
    age: '',
    address: '',
    [email]: {
        name: "vhjcdg",
        age: 20
    },
    set setV(value) {
        obj[value[0]] = value[1];
    }
}
obj.setV = ["name", "karthi"];
console.log(obj)
