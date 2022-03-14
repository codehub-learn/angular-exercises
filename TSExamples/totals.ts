function sumOfNumbers(numbers:number[]): number {
    return numbers.reduce((acc:number, currentNumber:number) => {
        return acc += currentNumber;
    }, 0);
}
