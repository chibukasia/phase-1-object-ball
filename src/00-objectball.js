function gameObject() {
  const teamStats = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 8,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DesSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return teamStats;
  //console.log(teamStats);
}

function numPointsScored(name) {
  const object = gameObject()
  const homePlayers = object.home.players
  const awayPlayers = object.away.players
  const players = Object.assign({}, homePlayers, awayPlayers)
  //console.log (players)
  const playerPoints = players[name].points
  //console.log(playerPoints)
  return playerPoints;

}
function shoeSize(name){
  const object = gameObject()
  const homePlayers = object.home.players
  const awayPlayers = object.away.players
  const players = Object.assign({}, homePlayers, awayPlayers)
  //console.log (players)
  const playerShoeSize = players[name].shoe
  //console.log(playerShoeSize)
  return playerShoeSize;
}

function teamColors(teamName) {
  const object = gameObject();
  let teamColors;
  const homeColors = object.home.colors;
  const awayColors = object.away.colors;
  if (teamName === "Brooklyn Nets"){
    teamColors = homeColors;
  }else if(teamName === "Charlotte Hornets"){
    teamColors =awayColors
  }
  //console.log(teamColors)
  return teamColors;
}

function teamNames(){
  const object = gameObject();
  let teamNames = []
  const homeTeamName = object.home.teamName;
  const awayTeamName = object.away.teamName;
  //console.log(homeTeamName)
  teamNames.push(homeTeamName);
  teamNames.push(awayTeamName);
  //console.log(teamNames)
  return teamNames

}
//TODO
function playerNumbers(teamName){
  const object = gameObject();
  const homeTeamPlayers = object.home.players;
  const awayTeamPlayers = object.away.players;
  //console.log(homeTeamPlayers)
  let teamNumber = [];
  if (teamName === "Charlotte Hornets") {
    for (const player in awayTeamPlayers){
      //console.log(homeTeamPlayers.player)
      const playerNum = player["number"]
      teamNumber.push(playerNum)
      return teamNumber
      //console.log(playerNum)
    }
  }else if(teamName === "Brooklyn Nets"){
    for (const player in homeTeamPlayers){
      //console.log(homeTeamPlayers.player)
      const playerNum = player["number"]
      teamNumber.push(playerNum)
      return teamNumber
      //console.log(playerNum)
    }
  }
}

function playerStats(name) {
  const object = gameObject()
  const homePlayers = object.home.players
  const awayPlayers = object.away.players
  const players = Object.assign({}, homePlayers, awayPlayers)
  const playerStats = players[name];
  //console.log(playerStats)
  return playerStats
}

function bigShoeRebounds(){
  const object = gameObject()
  let shoeSize = []
  let playerShoeSize;
  const homePlayers = object.home.players
  const awayPlayers = object.away.players
  const players = Object.assign({}, homePlayers, awayPlayers)
  for (let player in players){
    playerShoeSize = shoeSize.push(players.shoe)
    console.log(playerShoeSize)
  }
  
  console.log(playerShoeSize)
  //return playerShoeSize;
}

/* Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
First, find the player with the largest shoe size
Then, return that player's number of rebounds
Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.*/


numPointsScored("Jeff Adrien")
shoeSize("Jeff Adrien")
teamColors("Charlotte Hornets")
teamNames()
playerNumbers("Charlotte Hornets")
playerStats("Jeff Adrien")
bigShoeRebounds()