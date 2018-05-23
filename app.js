
    const outcome = {
        rock:     {rock: "draw", paper: "lose", scissors: "win"},
        paper:    {rock: "win",  paper: "draw", scissors: "lose"},
        scissors: {rock: "lose", paper: "win",  scissors: "draw"},
    };

    let gamers = {player: 0,pc: 0};

    // when Submit 
    document.forms['interface'].addEventListener("submit", function(event){
        event.preventDefault();
        let user = getInput();
        let pc = pcPick();
        let text = result(user, pc, gamers);

        document.getElementById("text").innerText = `You picked ${user}. Pc picked ${pc}. ${text}`;
        document.getElementById("user_score").innerText = gamers["player"];
        document.getElementById("pc_score").innerText = gamers["pc"];
    })

    // helpers
    function getInput() {
        return document.forms['interface'].querySelector("input[type='text']").value.toLowerCase();
    }

    function pcPick(){
        const choices = {0: "rock", 1: "paper", 2: "scissors"};
        return choices[Math.floor(Math.random() * 3)];
    }

    function result(user, pc, gamers){
        let res = outcome[user][pc];
        if(res === "draw"){
            gamers["player"]++;
            gamers["pc"]++;
            return "It's a draw!"
        }
        if(res === "win"){
            gamers["player"]++;
            return "You win!"
        }else{
            gamers["pc"]++;
            return "You lose!"
        }
    }

