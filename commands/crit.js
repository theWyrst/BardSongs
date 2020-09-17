module.exports = {
    name: 'crit',
    description: 'this is a ping command!',
    execute(message, args){

        const random = require('random');

        const roll = random.int(min = 1, max = 100);

        const crittable = require('./tables/crit.json');

        for(i = 0; i < crittable.crit.length; i++) {
            if(roll >= crittable.crit[i].min && roll <= crittable.crit[i].max) {
                message.channel.send("You rolled a: " + roll);
                message.channel.send(crittable.crit[i].effect);
            }
        }
    }
}