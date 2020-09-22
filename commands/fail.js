module.exports = {
    name: 'fail',
    description: 'this is a ping command!',
    execute(message, args){

        const random = require('random');

        const roll = random.int(min = 1, max = 100);

        const crittable = require('./tables/fail.json');

        for(i = 0; i < crittable.fail.length; i++) {
            if(roll >= crittable.fail[i].min && roll <= crittable.fail[i].max) {
                message.channel.send("You rolled a: " + roll);
                message.channel.send(crittable.fail[i].effect);
            }
        }
    }
}