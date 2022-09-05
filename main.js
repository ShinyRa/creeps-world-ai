var Harvester       = require('role.harvester');
var CreateCreeps    = require('population');
var Upgrader        = require('role.upgrader');

module.exports.loop = function(){
    
    //CreateCreeps.run();
    //Game.creeps['Harvester1'].memory.role = 'Harvester';
    //Game.creeps['Harvester2'].memory.role = 'Harvester';
    //Game.creeps['Upgrader1'].memory.role = 'Upgrader';
    
    
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        if(creep.memory.role == 'Harvester')
            Harvester.run(creep);
        if(creep.memory.role == 'Upgrader')
            Upgrader.run(creep);
    }
    
}