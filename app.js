let thenabel = {
    then: function (resolve, reject) {
        resolve(42);
    }
};

let p1 = Promise.resolve(thenabel);
p1.then(function (value) {
    console.log(value)
})