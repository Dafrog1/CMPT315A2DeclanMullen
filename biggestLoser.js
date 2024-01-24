const participants = require('./participants');// works

const biggestLoser = function(matches){
    const players = participants(matches);
    const losers = [];
    for(let i = 0; i<players.length; i++){
        losers.push({name: players[i], loserPoints: 0});
    }
    for(let i = 0; i<losers.length; i++){
        for(let j = 0; j<matches.length; j++){
            if(losers[i].name == matches[j].winner){
                losers[i].loserPoints = losers[i].loserPoints - matches[j].loser_points;
            }else if(losers[i].name == matches[j].loser){
                losers[i].loserPoints = losers[i].loserPoints + matches[j].loser_points;

            }
        }
    }
    let retName = losers[0].name;
    let retPoints = losers[0].loserPoints;
    for(let i = 1; i<losers.length; i++){
        if(losers[i].loserPoints>retPoints){
            retPoints = losers[i].loserPoints;
            retName = losers[i].name;
        }
    }
    return retName;
}
module.exports = biggestLoser;