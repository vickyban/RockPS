document.addEventListener("DOMContentLoaded", function(){
    const picks_value = { rock: 1, paper:2, scissors:3};
    const picks = ["rock", "paper", "scissors"]; 

    let player = { score: 0 };
    let pc = { score: 0};

    // when Submit 
    let form = document.forms['interface'];
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let user = getInput();
        let cmp = pcPick();
        let res = result(user, cmp);
        let text = resultText(res);

        document.getElementById("text").innerText = `User picked ${picks[user - 1]}. Pc picked ${picks[cmp - 1]}. ${text}`;
        document.getElementById("user_score").innerText = player.score;
        document.getElementById("pc_score").innerText = pc.score;
    })


    // helpers
    function getInput() {
        let input = form.querySelector("input[type='text']").value.toLowerCase();
        return picks_value[input];
    }


    function pcPick(){
        return Math.floor(Math.random() * 3) + 1;
    }

    function result(user, cmp){
        if(user === cmp){
            return null;
        }else if (user === 1 && cmp === 3 ){
            return true;
        }else if (user === 2 && cmp === 1){
            return true;
        }else if (user === 3 && cmp === 2){
            return true;
        }else if (user === 1 && cmp === 2){
            return false;
        }else if (user === 2 && cmp === 3){
            return false;
        }else if (user === 3 && cmp === 1){
            return false;
        }
    }

    function resultText(res){
        if(res === null){
            player.score++;
            pc.score++;
            return "A Draw";
        }
        if(res){
            player.score++;
            return "Player Win";
        }else{
            pc.score++;
            return "Pc Win";
        }
    }


});

