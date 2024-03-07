function isPrime(num) {
    if (num <= 1) {
        return false;
    } else if (num <= 3) {
        return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

console.log("Bilangan prima dari 1 hingga 1000:");
for (let num = 1; num <= 1000; num++) {
    if (isPrime(num)) {
        process.stdout.write(num + " ");
    }
}