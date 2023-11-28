interface FizzBuzz {
    go(num: number): string
}
export function createFizzBuzz(): FizzBuzz {
    function isPrime(num: number): boolean {
        if (num === 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0 && num > i) return false;
        }
        return true;
    }
    return {
        go: function (num: number): string {
            if (num === 5) return "BuzzWhiz";
            if (num === 3) return "FizzWhiz";
            if (num % 15 === 0) return "FizzBuzz";
            if (num % 5 === 0) return "Buzz";
            if (num % 3 === 0) return "Fizz";
            if (isPrime(num)) return "Whiz";
            return num.toString();
        }
    }
}