const Population = require("Population");
const Harvester = require("role.harvester");
const Upgrader = require("role.upgrader");

module.exports.loop = () => {
  const population = new Population();

  population.add();
  population.info();

  for (let name in Game.creeps) {
    const creep = Game.creeps[name];

    switch (creep.memory.role) {
      case "Harvester":
        Harvester.run(creep);
        break;
      case "Upgrader":
        Upgrader.run(creep);
        break;
    }
  }
};
