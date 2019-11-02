//POKEMON PROJECT 


//Cards Array 


let cardArray = 
[{
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle",
    damage: 40
  }]

let cardsPlayed = []


///////Players

class PlayerProfile {
  constructor(player) {
    this.player = player
    this.cards = []
    this.points = 0
    this.wins = 0
  }
}

let PlayerOne = new PlayerProfile("Player One") 
let cpu = new PlayerProfile("CPU")

//////// Game 

class Game {
  constructor(pokemon) {
    this.pokemon = pokemon
  }

  ///function to draw cards for each player
  draw(player) {

    for(let i = 0; i < 3; i++) {
        let drawRandom = cardArray.splice(Math.floor(Math.random() * cardArray.length), 1)[0];

          player.cards.push(drawRandom);

        console.log(player.player + " has drawn " + drawRandom.name )
        cardsPlayed.push(drawRandom.name)
      
    }
  }

 

/////Play card 

  playCard(player) {

    let playCard = player.cards.splice(Math.floor(Math.random() * player.cards.length), 1)[0];

    console.log(player.player + " played " + playCard.name + ". This has inflicted " + playCard.damage + " worth of damage.");
    
    return playCard;
  }


//////cards comparisson function 


  battle(player1, player2) {

  let x = this.playCard(PlayerOne)
    let y = this.playCard(cpu)

       if(x.damage > y.damage) {

          player1.points += 1;
          console.log("Player One wins!")

        } 
            else if (x.damage == y.damage) {
            console.log("It's a draw!")
        } 
              else if (x.damage < y.damage) {
               player2.points += 1;
                console.log("CPU wins!")
};

console.log(PlayerOne);
console.log(cpu); 

console.log(``)



    if (PlayerOne.points >= 1 ) {

      console.log(player1.player + " has " + player1.points + " point(s).") 
      } else {console.log(player1.player + " has 0 points")};


        console.log(``); 


      if (cpu.points >= 1 ) {

      console.log(player2.player + " has " + player2.points + " point(s).") 
       } else {console.log(player2.player + " has 0 points")};

    if (player1.points > player2.points) {
      //have to log the number of wins here 
      console.log(player1.player + " wins this round! ")

    }  else if (player1.points < player2.points) {
      //have to log the number of wins here
        console.log(player2.player + " wins this round! ")

  }



    console.log(``)
    console.log("Used Cards: " + cardsPlayed)

    console.log(``)
    console.log("Number of wins for first player: " + PlayerOne.wins)

    console.log(``)
    console.log("Number of wins for second player: " + cpu.wins)

    console.log(``)
    console.log("********************End of Round *********************")
    console.log(`


                `)
  }
}

//i think make this portion down here a loop
for (let i = 0; i < 3; i++) {
let game1 = new Game(cardArray)

game1.draw(PlayerOne)
  console.log(`
    `)
game1.draw(cpu)
  console.log(`
    `)
game1.battle(PlayerOne,cpu);
}













