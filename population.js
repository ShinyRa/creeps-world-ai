var PopulationHandler = {
    run: function(){
        
        
     /*if(Game.spawns['Spawn1'].energy > 0){
        Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE],'Harvester3');
        }
    */
    
    var myCreeps = [];
        for(var name in Game.creeps){
            myCreeps.push(name);
        }
    
    console.log("Our colony excists of " + myCreeps.length + " creeps named: ");
        for(var x = 0; x < myCreeps.length; x++){
            console.log(myCreeps[x]);
        }
    }
};

module.exports = PopulationHandler;