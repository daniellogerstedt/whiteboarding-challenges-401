# Solution Module

  The solution module contains the function used to solve the problem domain assigned for day 14. The problem domain was to take a given linked list, remove duplicates and return a new linked list containing no duplicates. The function does this with the use of a stack and is a pure function as it does not alter the original referenced list. It accomplishes this by making a copy of the list immediately then iterating through and manipulating the data in the copy. The first step after input validation and instantiation of the stack and copy is to move the head of the list to the top of the stack then iterate through the copy. On each iteration the value head of the copy is checked against the top of the stack, this results in one of two occurances:

      If the two have the same value the node is removed from the head of the list but not placed in the stack.

      If the two have differing values the node is removed from the list and pushed to the top of the stack.

  This process having removed all duplicates then iterates through the stack moving each node back into the copy of the list. By using a stack it allows us to keep the original order of the items as they exited the copy and when placing them back into the copy we only need to insert them at the head. After all remaining nodes have been moved back to the copy it then returns the copy of the list.


          Big O: O(1)  

          The required input(s) for this method are: 
        
            This functionality requires a data value for use in Node object instantiation.

          This method is tested for input verification, input validation, and output validation.

# Nd Module

  This module contains a single unnamed class and constructor function which is used to instantiate node objects for the other modules. It takes a single argument which represents the value assigned to the node.

          Big O: O(1)  

          The required input(s) for this method are: 
        
            This functionality requires a data value for use in Node object instantiation.

          This method is tested for input verification, input validation, and output validation.

# Stack Module

  This module contains an unnamed class, constructor, and two prototype methods. It is used to instantiate the shell of the Stack as well as push, pop, and peek the stack. The constructor requires no arguments but can be passed an optional maximum size which defaults to 1048.

  1. Push: similar to the array method push adds and item to the stack, however instead of adding it to the end of an array, it adds it to the top of the stack. This method takes a single argument in the form of a value which it passes through the node constructor before putting the returned node ontop of the stack. Increments the stack size before ending the method.
  
          Big O: O(1)  

          The required input(s) for this method are: 
        
            This functionality requires a data value for use in Node object instantiation.

          This method is tested for input verification, input validation, and output validation.

  2. Pop: just like push this method is similar to the array method. It's designed to remove the top item from the stack and return it for use. This modifies the stack by removing the top item and dereferencing it from the stack. The method takes no arguments. Decrements the stack size before ending the function.

          Big O: O(1)  

          The required input(s) for this method are: 
        
            This functionality requires a data value for use in Node object instantiation.

          This method is tested for input verification, input validation, and output validation.

  3. Peek: The purpose of this method is to look at the top item of the stack, it literally just returns the stack top property.

          Big O: O(1)  

          The required input(s) for this method are: 
        
            This functionality requires a data value for use in Node object instantiation.

          This method is tested for input verification, input validation, and output validation.

# Single Linked List Module

The SLL Module contains the following list of functionality:

  1. The Single Linked List constructor builds an empty list item containing two properties head which represents the beginning of the list and is instantiated to "null" and lLen which represents the current list length and is instantiated to "0".

          Big O: O(1)  

          The required input(s) for this method are: 
        
            This functionality requires no inputs.

          This method is tested for input verification, input validation, and output validation.

  2. The insertHead Method of the SLL class uses the Nd Module to create a new Node and adds it to the head of the list. It accomplishes this by setting the next property on the new object to the current head and changing the head property of the list to the new Node object. Once this is completed it increments the lLen property of the list object.

          Big O: O(1)

          The required input(s) for this method are:

            This functionality requires a data value for use in Node object instantiation.

          This method is tested for input verification, input validation, output verification, and output validation.

  3. The insertTail Method of the SLL class uses the Nd Module to create a new Node and adds it to the end of the list. It accomplishes this by iterating to the end of the list then changing the last item's next value from "null" to the new Node object. Once this is completed it increments the lLen property of the list object.

          Big O: O(n)

          The required input(s) for this method are:

            This functionality requires a data value for use in Node object instantiation.

          This method is tested for input verification, input validation, output verification, and output validation.

  4. The remove Method of the SLL class iterates through the list to the nth object and removes it from the list. It accomplishes this by saving the current module as the previous module just before each iteration so that it can set the previous Node's next value to the next value of the node to be removed. Once this has been completed it decrements the lLen property of the list object.

          Big O: O(n)

          The required input(s) for this method are:

            This functionality requires a number value representing the list item to be removed.
        
          This method is tested for input verification, input validation, output verification, and output validation.

  5. The reverse Method of the SLL class reverses the list order. It accomplishes this through the use of a previous, current, next cycle where it stores the current node's next value in a next node variable before setting it to the previous node then stores the current node with the new link in the previous node variable and iterating to the next node variable.

          Big O: O(n)

          The required input(s) for this method are:

            This functionality requires no inputs.

          This method is tested for input verification, input validation, and output validation.

  6. The findNthNode Method of the SLL class finds the Nth node from the beginning of the list and returns it. It accomplishes this by iterating to the Nth position of the list starting at the list head object.

          Big O: O(n)

          The required input(s) for this method are:

            This functionality requires a number value representing the list item to be retrieved.

          This method is tested for input verification, input validation, and output validation.

  7. The findNthFromLastNode Method of the SLL class finds the Nth node from the end of the list and returns it. It accomplishes this by first subtracting "n" from the lLen value of the list object, then iterates to the object at that position and returns it.

          Big O: O(n)

          The required input(s) for this method are:

            This functionality requires a number value representing the list item to be retrieved, counting from the end of the list.

          This method is tested for input verification, input validation, and output validation.