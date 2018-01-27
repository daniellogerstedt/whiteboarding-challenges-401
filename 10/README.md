### Whiteboarding Challenge 10 Documentation

# Stack Verification

This function takes a single input of a string and iterates through the string to verify it is correctly formatted with respect to curly brackets. It accomplishes this by passing an item into the stack when a character equals '{' and removing an item from the stack if a character equals '}'. It then returns false if the stack is ever empty when it finds a '}' and returning true if it successfully gets through the entire string and has found atleast one set of curly brackets. The function returns null for invalid inputs and inputs not containing curly brackets.


# Binary Search

This function searches an array for a given value through a binary search method. It does this by adding or subtracting half the value of the current search range to the current index if the value is higher or lower than the current index's value respectively. It then returns an object containing the value and index it was found if it successfully finds the number and returns null if the number is not located. The function also returns null for any invalid inputs and inputs that exceed the range of the array.