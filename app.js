const number =
parseInt(prompt('Enter an integar: '));
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log('${number} * ${i} = ${result}'); 
    
}

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1)
{
    return 1;
}
while (num > 1) {
    num--;
    result = result * num;
}
return result;
}
factorialize(5); 