const Harvester = require("role.harvester");
const WorkerName = require("workername");

class Population {
  /**
   * Add screep to the first spawn, if enough energyis present
   */
  add() {
    const spawnKey = Object.keys(Game.spawns)[0];
    const spawn = Game.spawns[spawnKey];

    if (spawn.store[RESOURCE_ENERGY] > 0) {
      const name = WorkerName.getFreeName(Object.keys(Game.creeps) || []);
      spawn.spawnCreep([WORK, CARRY, MOVE], name, {
        memory: { role: "Harvester" },
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
