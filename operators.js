//<OPERATORS>

// arithemetic (+. -. *. /, %, **, ++, --)
let x = 10;
let y = 3; 
console.log("START:  X: " + x + ", Y: " + y);
console.log("Arithemetic operator + : " + (x + y));
console.log("Arithemetic operator - : " + (x - y));
console.log("Arithemetic operator / : " + (x / y));
console.log("Arithemetic operator * : " + (x * y));
console.log("Arithemetic operator % : " + (x % y));
console.log("Arithemetic operator ** : " + (x ** y));
console.log("Arithemetic operator ++ before variable (start 10, prints ten, x is 11 in the program now though) : " + (x++));
console.log("Arithemetic operator ++ after variable (start 11, increments to 12, prints 12, x value 12) : " + (++x));
console.log("Arithemetic operator -- before variable (start 3, prints 3, decriments, value of y in code is now 2): " + (y--));
console.log("Arithemetic operator -- before variable (start 2, decriments first to 1, prints one, value is one in program): " + (--y));

// assignment (=, +=, -=, /=, *=, %=, **=)
let a1 = 5;
let a2 = 4;
console.log("START:  A1: " + a1 + ", A2: " + a2);
console.log('Assignment operator = (a1 is now 6) : ' + (a1 = 6));
console.log(a1 + ' ' + a2);

console.log('Assignment operator += : ' + (a1 += a2));
console.log(a1 + ' ' + a2);

// console.log('Assignment operator =+ : ' + (a1 =+ a2));

console.log('Assignment operator -= : ' + (a1 -= a2));
console.log(a1 + ' ' + a2);

console.log('Assignment operator /= : ' + (a1 /= a2));
console.log(a1 + ' ' + a2);

console.log('Assignment operator *= : ' + (a1 *= a2));
console.log(a1 + ' ' + a2);

console.log('Assignment operator %= : ' + (a1 %= a2));
console.log(a1 + ' ' + a2);

console.log('Assignment operator **= : ' + (a1 **= a2));
console.log(a1 + ' ' + a2);

//comparison (relational: <, >, <=, >=  equality: ===, !==, ==, != )
let c1 = 12;
let c2 = 0;
console.log("START:  C1: " + c1 + ", C2: " + c2);
console.log('Comparison relational operator < : ' + (c1 < c2));
console.log('Comparison relational operator > : ' + (c1 > c2));
console.log('Comparison relational operator <= : ' + (c1 <= c2));
console.log('Comparison relational operator >= : ' + (c1 >= c2));
console.log('Comparison equality operator === (identity): ' + (c1 === c2));
console.log('Comparison equality operator !== (nonidentity): ' + (c1 !== c2));
console.log('Comparison equality operator == (equality): ' + (c1 == c2));
console.log('Comparison equality operator != (inequality): ' + (c1 != c2));

let c3 = '12';
let c4 = 12;
console.log("START:  C3: " + c3 + ' ' + typeof(c3) + ", C4: " + c4 + ' ' + typeof(c4));
console.log('Comparison identity (strict) operator === to show type and value: ' + (c3 === c4));
console.log('Comparison equality (loose) operator == to show type and value: ' + (c3 == c4));

//ternary (condition ? ifTrue : ifFalse)

let points = 110;
const divideLine = 100;
console.log("START:  Points: " + points + ", Gold if above, silve if below: " + divideLine);
let type = (points >= divideLine ? 'gold' : 'silver');
console.log(type);

//logical operators (AND &&, OR ||, NOT )
l1 = true;
l2 = false;
console.log("START:  l1: " + l1 + ", l2: " + l2);
console.log('Logical operator w/ booleans && : ' + (l1 && l2));
console.log('Logical operator w/ booleans  || : ' + (l1 || l2));
console.log('Logical operator w/ booleans  ! (Not l1(true)): ' + (!l1));
console.log('Logical operator w/o booleans (false OR string leah) || : ' + (l2 || 'leah')); //returns 'leah' because its the first truthy value
console.log('Logical operator w/o booleans (false OR 1) || : ' + (l2 || 1));

//falsy: undefined, null, 0, -0, 0n, false, NaN
function evaluateTruthiness (val) {
    if (val) return 'truthy' 
    else return 'falsy'
} 
console.log('START: Truthy vs. Falsy (function)');
console.log('undefined: ' + evaluateTruthiness(undefined));
console.log('null: ' + evaluateTruthiness(null));
console.log('0: ' + evaluateTruthiness(0));
console.log('-0: ' + evaluateTruthiness(-0));
console.log('0n: ' + evaluateTruthiness(0n));
console.log('false: ' + evaluateTruthiness(false));
console.log('NaN: ' + evaluateTruthiness(NaN));
console.log('true: ' + evaluateTruthiness(true));
console.log('one: ' + evaluateTruthiness(1));
console.log('random string: ' + evaluateTruthiness('leah'));
console.log('Short Circuiting with false OR 1 OR 2, 2 ignored: ' + (false || 1 || 2));

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log('Getting a default value if the desired isnt set (ex user chooses a color, if no color then its undefined || default so default will be returned): ' + currentColor);
userColor = 'red';
let currentColor2 = userColor || defaultColor;
console.log('Set userColor to red: ' + currentColor2);

//bitwise  (| (or), & (and), ^ (XOR), << (left shift), >> (rigth shift), >>> (unsigned right shift))
//leaving shifts for later

//1 = 00000001
//2 = 00000010
//OR result (evaluates straight down, 0 if both 0, 1 if either is one): 00000011 (3)
//AND result (if both are 1 then 1, if not 0): 00000000 (0)
//XOR result (0 if they are the same, 1 if different): 000000011 (3)
console.log('Bitwise or |: ' + (1 | 2));
console.log('Bitwise and &: ' + (1 & 2));
console.log('Bitwise xor ^: ' + (1 ^ 2));

// ex: read (00000100), write (00000010), execute (00000001) system
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let userPermission = 0;
// 00000000 = 00000000 OR 00000100 OR 00000010 = 00000110. 
userPermission = userPermission | readPermission | writePermission;
let hasRead = (userPermission & readPermission) ? 'yes' : 'no';
let hasWrite = (userPermission & writePermission) ? 'yes' : 'no';
let hasExecute = (userPermission & executePermission) ? 'yes' : 'no';

console.log('Use bitwise and with ternary to check read permissions (yes): ' + hasRead);
console.log('Use bitwise and with ternary to check write permissions (yes): ' + hasWrite);
console.log('Use bitwise and with ternary to check execute permissions (no): ' + hasExecute);

//operator precedence
let op1 = 2 + 3 * 4; 
console.log('2+3*4 with operator prededence: ' + op1);
let op2 = (2 + 3) * 4;
console.log('(2+3)*4 with operator prededence: ' + op2);


//</OPERATORS>