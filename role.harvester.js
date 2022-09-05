var Harvester = {
    
    run: function(creep){
        var spawn = Game.spawns['Spawn1'];
        
        if(creep.carry.energy >= creep.carryCapacity){
            if(creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(spawn);
                creep.say("back")
            }
            else {
                creep.transfer(spawn, RESOURCE_ENERGY);
            }
        }else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(sources[0]);    
            }
        }
    }
};

module.exports = Harvester;
    