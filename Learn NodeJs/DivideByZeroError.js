class DivideByZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DivideByZeroError';
    }
}

function divide(a, b) {
    if (b === 0) {
        throw new DivideByZeroError('b cannot be 0');
    }
    return a / b;
}
divide(2, 0); // DivideByZeroError: b cannot be 0