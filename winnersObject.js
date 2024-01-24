const participants = require('./participants');// works
const uniqueFilter = require('./uniqueFilter');

const winnersObject = function(matches){
    const players = participants(matches);
    const winners = []
    for(let i = 0; i<players.length; i++){
        winners.push({name: players[i], wonVs: []});
    }
    for(let i = 0; i<winners.length; i++){
        let name = winners[i].name;
        for(let j = 0; j<matches.length; j++){
                if(name == matches[j].winner){
                    winners[i].wonVs.push(matches[j].loser);
                }
        }
        winners[i].wonVs = uniqueFilter(winners[i].wonVs);// likely not most efficent solution. mem allocation twice. fix later if time
    }
    return winners;
}



module.exports = winnersObject;