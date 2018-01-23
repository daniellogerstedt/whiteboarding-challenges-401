# Solution Documentation

1. The method checks to see if a list passed in as either the list or first node is circular. It does this by making a copy of the list then iterating through adding a flag to each object it passes after looking for the flag. If it ever finds the flag it returns true if it makes it through the list without finding the flag it returns false.

    The method requires 1 argument which is a list.

    Worst Case Big O is O(n), Best Case is O(1).