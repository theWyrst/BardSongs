module.exports = {
    name: 'ping',
    description: 'this is a ping command!',
    execute(message, args){

        if(message.member.roles.cache.has('754429209518014505' || message.member.user.equals('theWyrst'))){
            message.channel.send('pong!');
        } else{
            message.channel.send('Nope, you are not authorized');
        }
    }
}