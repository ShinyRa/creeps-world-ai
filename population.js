const WorkerName = require("workername");

class Population {
  /**
   * Add screep to the first spawn, if enough energyis present
   */
  add() {
    const MAX_CREEPS = 4;
    const spawnKey = Object.keys(Game.spawns)[0];
    const spawn = Game.spawns[spawnKey];
    let population = 0;
    for (let creep in Game.creeps) {
      population++;
    }

    if (spawn.store[RESOURCE_ENERGY] > 0 && population < MAX_CREEPS) {
      const name = WorkerName.getFreeName(Object.keys(Game.creeps) || []);
      spawn.spawnCreep([WORK, CARRY, MOVE], name, {
        memory: { role: "Upgrader" },
      });
      Game.notify(`${name} has been created, and has been assigned: harvester`);
    }
  }

  /**
   * Print info about current population
   */
  info() {
    console.log("Population info:");
    Object.keys(Game.creeps).forEach((creep) => console.log(`-> ${creep}`));
  }
}

module.exports = Population;
