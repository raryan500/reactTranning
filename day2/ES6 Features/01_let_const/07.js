const family = {
    father: "a",
    mother: "b",
};

// family = "somethingelse"; // TypeError: Assignment to constant variable.
family.father = "ABC"; // We can update object
console.log(family);
