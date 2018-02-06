# K-Ary Trees and Whiteboard 15

### K-Ary Trees

  * Tree Node Constructor

          This Constructor takes in a value and sets it to value, it is used during execution of the insert method.

  * Tree Constructor

          This Constructor takes in no values and constructs the shell of the tree.

  * Insert

          This method takes in a value argument to be passed to the Tree Node Constructor and a parent value saying which node it should belong to. It then executes the breadthFirst method to search through the list for that parent node and pushes it to the parents children.

  * BreadthFirst

          This method iterates through the tree placing each node into a queue for use in the callback on each iteration.

  * RemoveByVal

          This method removes the first node found with the value provided.


### Whiteboard Solution

  * The solution takes in a K-Ary Tree and iterates through it looking for nodes who do not have children, it then pushes them to an array and returns the array after it has finished searching the tree.