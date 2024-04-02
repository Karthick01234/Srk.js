class Sort {
    swap(arr, a, b) {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    heapify(arr, n, i) {
        let l = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left < n && arr[left] > arr[l]) {
            l = left;
        }
        if (right < n && arr[right] > arr[l]) {
            l = right;
        }
        if (l != i) {
            this.swap(arr, i, l);
            this.heapify(arr, n, l);
        }
    }
    heapSort(arr, n) {
        const num = Math.trunc(n / 2);
        for (let i = num - 1; i >= 0; i--) {
            this.heapify(arr, n, i);
        }
        for (let i = n - 1; i >= 0; i--) {
            this.swap(arr, 0, i);
            this.heapify(arr, i, 0);
        }
    }

}
let obj = new Sort();
//const arr = [4, 6, 7, 9, 1, 5];
const arr = ["z", "a", "d", "c", "b", "e"];
obj.heapSort(arr, arr.length);
console.log(arr)


