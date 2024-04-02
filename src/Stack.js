class Stack {
    constructor(list = []) {
        this.list = list;
        this.i = (this.list.length == undefined) ? 0 : (this.list.length - 1);
    }
    pop() {
        if (!this.isEmpty()) {
            this.i--;
            return this.list.pop();
        }
        return "Empty Stack";
    }
    push(value) {
        this.i++;
        this.list.push(value);
    }
    peek() {
        return this.list[this.i];
    }
    isEmpty() {
        if (this.i < 0) {
            return true;
        }
        return false;
    }
    stack() {
        return this.list;
    }
}
/*let arr = new Stack([1, 5, 6]);
arr.pop();
arr.push(8);
console.log(arr.peek());
console.log(arr.stack());
console.log(arr.push(9));
console.log(arr.pop());
console.log(arr.peek());
console.log(arr.isEmpty());
console.log(arr);
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.isEmpty());
console.log(arr);*/
