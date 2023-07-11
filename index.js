function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    function namedFunction() {
        return 5
    }
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return (function() {
        return 5
    })
}