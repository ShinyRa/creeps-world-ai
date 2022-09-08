const Harvester = {
  run(creep) {
    const spawnKey = Object.keys(Game.spawns)[0];
    const spawn = Game.spawns[spawnKey];

    if (creep.store[RESOURCE_ENERGY] >= creep.store.getCapacity()) {
      if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.say("Delivering");
        creep.moveTo(spawn);
      } else {
        creep.say("Transfering");
        creep.transfer(spawn, RESOURCE_ENERGY);
      }
    } else {
      const sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.say("Harvesting");
        creep.moveTo(sources[0]);
      }
    }
  },

  getName() {
    return this.name;
  },
};

module.exports = Harvester;
