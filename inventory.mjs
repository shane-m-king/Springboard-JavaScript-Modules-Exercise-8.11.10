const inventory = [];

export function addItem(item) {
  inventory.push(item);
  console.log(`${item} was added to the inventory.`);
}

export function removeItem(item) {
  const index = inventory.indexOf(item);
  if (index !== -1) {
    inventory.splice(index, 1);
    console.log(`${item} was removed from the inventory.`);
  } else {
    console.log(`${item} not found in inventory.`);
  }
}

export function listItems() {
  console.log(
    `The inventory currently contains the following items: ${inventory.join(
      ", "
    )}`
  );
}
