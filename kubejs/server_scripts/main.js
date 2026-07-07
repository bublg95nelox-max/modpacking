// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')
ServerEvents.recipes(event => {

  event.replaceInput(
  { input: '#sophisticatedstorage:base_tier_wooden_storage' }, // Arg 1: the filter
  '#sophisticatedstorage:base_tier_wooden_storage',            // Arg 2: the item to replace
  '#c:barrels'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
/*
  event.shaped(
  Item.of('sophisticatedstorage:storage_io', 1),
  [
    'A B A',
    'D C E', // arg 2: the shape (array of strings)
    'A B A'
  ],
  {
    A: '#c:stones',
    B: '#minecraft:planks',  //arg 3: the mapping object
    C: '#c:barrels',
    D: 'minecraft:repeater',
    E: 'minecraft:gold_ingot'
  }
)*/
})


