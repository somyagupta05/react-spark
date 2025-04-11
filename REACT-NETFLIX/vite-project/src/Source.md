React does not render `false`,`null`,`undefined`, or `NaN` in the dom. these values, when used in jsx, will result in nothing being displayed.

However, `0` and empty strings(`""`) are exceptions:
-**`0`** is rendered in the dom because it is considered a valid react node. This means that if `0` is the result of an expression, it will appear in your UI.

-**Empty string**(`""`) are also considered valid output and are rendered as well.


 1. variables
// you can embed any js variable within jsx by enclosing it in curly braces. the value of the variable will be inserted into the dom at the respective location.

2. expressions
// jsx allows you to write js expression inside curly braces. This includes operations, function calls, and other js expression that produce a value.

 3. function calls
//  functions, especially those that return jsx, can be invokes directly within your jsx.