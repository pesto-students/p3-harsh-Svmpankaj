var a = 0, b = 1;
console.log(a);
console.log(b);
for(var i = 0; i <= 4; i++ ) {
    var temp = a + b; // 1 + 2 //3
    console.log(temp);
    a = b; // 1 => 2
    b = temp; // 2 => 3
}