console.log(0.1 + 0.2 === 0.3); // 
// 0.1 = 0.0001100110011001100110011... (repeating infinitely)

// 0.2 = 0.0011001100110011001100110... (repeating infinitely)
// You might expect it to be exactly 0.3,
// but JavaScript (and most programming languages) use binary floating-point numbers (IEEE 754 64-bit format).

// This means numbers are stored in binary (base 2) —
// and not all decimal fractions can be represented exactly in binary.


// soln:
// Use a tolerance (epsilon) when comparing decimals:
// Here Number.EPSILON is 2.220446049250313e-16,
// the smallest difference between two distinct floating-point numbers in JS.
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log(Math.abs(0.1 + 0.2 === 0.3)  < Number.EPSILON);


// If you had an empty list and wanted to find the largest number,
// the result should logically be smaller than every possible number.
// → That’s why Math.max() = -Infinity — because any real number will be greater than it.
console.log(Math.max()); // -Infinity 


// Likewise, if you want the smallest of no numbers,
// it should be larger than every possible number.
// → That’s why Math.min() = Infinity —
// because any real number will be smaller than it.
console.log(Math.min()); //  Infinity


console.log(Math.max());             // -Infinity
console.log(Math.max(10, 20));       // 20
console.log(Math.max(-Infinity, 5)); // 5
console.log(Math.max(-Infinity));    // -Infinity ✅ stays same

console.log(Math.min());             // Infinity
console.log(Math.min(10, 20));       // 10
console.log(Math.min(Infinity, 5));  // 5
console.log(Math.min(Infinity));     // Infinity ✅ stays same


//Why not NaN?

// Because Math.max and Math.min are defined mathematically in ECMAScript spec —
// they must return an identity value that doesn’t break comparisons.
// NaN would ruin logic like: