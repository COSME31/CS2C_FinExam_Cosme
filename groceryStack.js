function peek(stack) {
  if (stack.length === 0) {
    console.log("Stack is empty");
    return null;
  }
  return stack[stack.length - 1];
}

function push(stack, item) {
  stack.push(item);
  console.log("Stack after push:", stack);
  peek(stack);
}

function pop(stack) {
  if (stack.length === 0) {
    console.log("Stack is empty. Cannot pop.");
    return null;
  }
  const poppedItem = stack.pop();
  console.log("Stack after pop:", stack);
  peek(stack);
  return poppedItem;
}


const groceryItems = [];
const itemsToAdd = ["Milk", "Eggs", "Bread", "Cheese", "Apples"];


itemsToAdd.forEach(item => push(groceryItems, item));

pop(groceryItems);
pop(groceryItems);

