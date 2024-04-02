class Queue {
    constructor(list = []) {
        this.list = list;
    }
    dequeue() {
        if (!this.isEmpty()) {
            return this.list.shift();
        }
        return "Empty queue";
    }
    enqueue(value) {
        this.list.push(value);
    }
    seek() {
        return this.list[0];
    }
    isEmpty() {
        if (!this.list.length) {
            return true;
        }
        return false;
    }
    queue() {
        return this.list;
    }
}
/*let arr = new Queue([1, 5, 6]);
arr.dequeue();
arr.enqueue(8);
console.log(arr.seek());
console.log(arr.queue());
console.log(arr.enqueue(9));
console.log(arr.dequeue());
console.log(arr.seek());
console.log(arr.isEmpty());
console.log(arr);
console.log(arr.dequeue());
console.log(arr.dequeue());
console.log(arr.dequeue());
console.log(arr.dequeue());
console.log(arr.isEmpty());
console.log(arr);
*/