let add = (x, y) => {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else {
        return 'Both inputs must be numbers';
    }
};

console.log(add(4, "8"));
