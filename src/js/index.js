
let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this
    },
    down: function () {
        this.step--;
        return this
    },
    showStep: function () {
        return this
    }
};

const result = ladder.up().up().up().up().down().showStep().step;
console.log(result)