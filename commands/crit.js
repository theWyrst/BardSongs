module.exports = {
    name: 'crit',
    description: 'this is a ping command!',
    execute(message, args){

        const random = require('random');

        const roll = random.int(min = 1, max = 14);

        const crittable = require('../crit.json');

        console.log(crittable);

        for(i = 0; i < crittable.crit.length; i++) {
            if(roll >= crittable.crit[i].min && roll <= crittable.crit[i].max) {
                message.channel.send(crittable.crit[i].effect);
            }
        }
    }
}