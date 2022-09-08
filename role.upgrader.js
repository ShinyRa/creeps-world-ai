const Upgrader = {
  run(creep) {
    const spawnKey = Object.keys(Game.spawns)[0];
    const spawn = Game.spawns[spawnKey];

    if (creep.store[RESOURCE_ENERGY] >= creep.store.getCapacity()) {
      console.log("I DONT HAVE ENERGY!!!");
      if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(spawn);
      } else {
        creep.transfer(spawn, RESOURCE_ENERGY);
      }
    } else if (
      creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE
    ) {
      console.log(creep.room.controller);
      creep.moveTo(creep.room.controller);
    }
  },
};

module.exports = Upgrader;
