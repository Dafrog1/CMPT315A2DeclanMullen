
const uniqueFilter = require('./uniqueFilter');

const participants = function(matches){
    const players = [];
    players.push(matches[0].winner);
    players.push(matches[0].loser);
    for(let i = 0; i<matches.length; i++){
        players.push(matches[i].winner);
        players.push(matches[i].loser);

    }
    return uniqueFilter(players);

}

module.exports = participants;