function handleNum(num, cb1, cb2) {
   num % 2 === 0 ? cb1() : cb2();
}

function handleEven(){
    console.log(`Number is even`)
}

function handleOdd(){
    console.log(`Number is odd`)
}

handleNum(4, handleEven, handleOdd)