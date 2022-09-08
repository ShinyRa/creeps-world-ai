const Population = require("Population");
const Harvester = require("role.harvester");
module.exports.loop = () => {
  const population = new Population();

  population.add();
  // population.info();

  for (let name in Game.creeps) {
    const creep = Game.creeps[name];

    switch (creep.memory.role) {
      case "Harvester":
        Harvester.run(creep);
    }
  }
};
