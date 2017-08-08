var calculator = (function(){
    var name = "kewen";
    var add = function(x, y)
    {
        return x + y;
    };

    var multiply = function multiply(x, y)
    {
        return x * y;
    }
    return {
        add : add,
        multiply : multiply
    };
})();

console.log(calculator.add(1,2));
console.log(calculator.name);

module.exports = calculator;
