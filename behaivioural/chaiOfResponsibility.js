class MySum {
    constructor(initialValue=42) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this
    }
}

const s1 = new MySum()
console.log(s1.add(12).add(90));

