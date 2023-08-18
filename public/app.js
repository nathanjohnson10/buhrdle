const max_guesses = 8;
var guessCount = 0;
var guessCountText = guessCount + " of " + max_guesses + " guesses";

var guesses = [];

var done = true;

var copyText = "";


async function get() {
    let url = '/rankings'
    let obj = await (await fetch(url)).json();
    
    //console.log(obj);
    return obj;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var data;
(async () => {
  data = await get()
  //console.log(data)
  //document.getElementById("data").innerHTML = JSON.stringify(data);
})()

const answer = getRandomInt(120);
//$results = DB::select('SELECT * from answers where date = CURDATE()');

function buttonClick(){
    var choice = document.getElementById('playerList');
    var choiceValue = choice.value;
    var choiceName = choice.options[choice.selectedIndex].text;

    if (guessCount < max_guesses && done && guesses.indexOf(choiceValue) == -1){
    //if (guessCount < max_guesses && done){

        guesses.push(choiceValue);
        var answerPDGA = parseInt(data[answer].pdga_number);
        var answerName = data[answer]['Guess a Player'];
        var answerDiv = data[answer].division;
        var answerHome = data[answer].HomeStateCountry;
        var answerCountry = data[answer].country;
        var answerRank = parseInt(data[answer].week_rank);
        var answerEvents = parseInt(data[answer].TotalEvents);
        var answerWins = parseInt(data[answer].Wins);
        //var answerEarnings = parseInt(data[answer].Earnings);


        if (choiceName != 'Guess a Player') {
            var choiceRow;
            data.forEach((element, i) => {
                if (element.pdga_number == choiceValue)
                    choiceRow = i
            });
            
            guessCount++;
            guessCountText = guessCount + " of " + max_guesses + " guesses";

            document.getElementById("guessCountP").innerText = guessCountText;

            var tBodyRef = document.getElementById('guesses').getElementsByTagName('tbody')[0];

            var newRow = tBodyRef.insertRow(-1);

            var nameCell = newRow.insertCell(0);
            var pdgaCell = newRow.insertCell(1);
            var divCell = newRow.insertCell(2);
            var stateCell = newRow.insertCell(3);
            var rankCell = newRow.insertCell(4);
            var eventsCell = newRow.insertCell(5);
            var winsCell = newRow.insertCell(6);
            //var earningsCell = newRow.insertCell(7);

            var pdgaText = document.createTextNode(choiceValue);
            var nameText = document.createTextNode(choiceName);
            var divText = document.createTextNode(data[choiceRow].division);
            var stateText = document.createTextNode(data[choiceRow].HomeStateCountry);
            var rankText =  document.createTextNode(data[choiceRow].week_rank);
            var eventsText = document.createTextNode(data[choiceRow].TotalEvents);
            var winsText = document.createTextNode(data[choiceRow].Wins);
            //var earningsText = document.createTextNode("$" + data[choiceRow].Earnings);

            pdgaCell.appendChild(pdgaText); 
            if(parseInt(choiceValue) != answerPDGA && parseInt(choiceValue) >= answerPDGA - 5000 && parseInt(choiceValue) <= answerPDGA + 5000){
                pdgaCell.setAttribute("class", "off")
                copyText = copyText + "🟨";
            }       
            else if(choiceValue == answerPDGA){
                pdgaCell.setAttribute("class", "correct");
                copyText = copyText + "🟩";
            }
            else {
                copyText = copyText + "⬜";
            }
            if(choiceValue > answerPDGA){
                pdgaCell.innerHTML = pdgaCell.innerHTML + " <img src='down-arrow.png' height='20' style='display: inline;'>"
            }
            else if(choiceValue < answerPDGA){
                pdgaCell.innerHTML = pdgaCell.innerHTML + " <img src='up-arrow.png' height='20' style='display: inline;'>"
            }

            nameCell.appendChild(nameText);
            if(choiceName == answerName){
                nameCell.setAttribute("class", "correct")
            }

            divCell.appendChild(divText);
            if(data[choiceRow].division == answerDiv){
                divCell.setAttribute("class", "correct");
                copyText = copyText + "🟩";
            }
            else{
                copyText = copyText + "⬜";
            }

            stateCell.appendChild(stateText);
            if(data[choiceRow].HomeStateCountry == answerHome){
                stateCell.setAttribute("class", "correct");
                copyText = copyText + "🟩";
            }
            else if(data[choiceRow].country == answerCountry){
                stateCell.setAttribute("class", "off")
                copyText = copyText + "🟨";
            }
            else{
                copyText = copyText + "⬜";
            }

            rankCell.appendChild(rankText);
            if(parseInt(data[choiceRow].week_rank) != answerRank && parseInt(data[choiceRow].week_rank) >= answerRank - 2 && parseInt(data[choiceRow].week_rank) <= answerRank + 2){
                rankCell.setAttribute("class", "off");
                copyText = copyText + "🟨";
            }
            else if(parseInt(data[choiceRow].week_rank) == answerRank){
                rankCell.setAttribute("class", "correct");
                copyText = copyText + "🟩";
            }
            else{
                copyText = copyText + "⬜";
            }
            if(parseInt(data[choiceRow].week_rank) < answerRank){
                rankCell.innerHTML = rankCell.innerHTML + " <img src='down-arrow.png' height='20' style='display: inline;'>"
            }
            else if(parseInt(data[choiceRow].week_rank) > answerRank){
                rankCell.innerHTML = rankCell.innerHTML + " <img src='up-arrow.png' height='20' style='display: inline;'>"
            }

            eventsCell.appendChild(eventsText);
            if(parseInt(data[choiceRow].TotalEvents) != answerEvents && parseInt(data[choiceRow].TotalEvents) >= answerEvents - 10 && parseInt(data[choiceRow].TotalEvents) <= answerEvents + 10){
                eventsCell.setAttribute("class", "off");
                copyText = copyText + "🟨";
            }
            else if(parseInt(data[choiceRow].TotalEvents) == answerEvents){
                eventsCell.setAttribute("class", "correct");
                copyText = copyText + "🟩";
            }
            else{
                copyText = copyText + "⬜";
            }

            if(parseInt(data[choiceRow].TotalEvents) > answerEvents){
                eventsCell.innerHTML = eventsCell.innerHTML + " <img src='down-arrow.png' height='20' style='display: inline;'>"
            }
            else if(parseInt(data[choiceRow].TotalEvents) < answerEvents){
                eventsCell.innerHTML = eventsCell.innerHTML + " <img src='up-arrow.png' height='20' style='display: inline;'>"
            }

            winsCell.appendChild(winsText);
            if(parseInt(data[choiceRow].Wins) != answerWins && parseInt(data[choiceRow].Wins) >= answerWins - 5 && parseInt(data[choiceRow].Wins) <= answerWins + 5){
                winsCell.setAttribute("class", "off");
                copyText = copyText + "🟨";
            }
            else if(parseInt(data[choiceRow].Wins) == answerWins){
                winsCell.setAttribute("class", "correct");
                copyText = copyText + "🟩";
            }
            else{
                copyText = copyText + "⬜";
            }
            
            if(parseInt(data[choiceRow].Wins) > answerWins){
                winsCell.innerHTML = winsCell.innerHTML + " <img src='down-arrow.png' height='20' style='display: inline;'>"
            }
            else if(parseInt(data[choiceRow].Wins) < answerWins){
                winsCell.innerHTML = winsCell.innerHTML + " <img src='up-arrow.png' height='20' style='display: inline;'>"
            }

            /*
            earningsCell.appendChild(earningsText);
            if(data[choiceRow].Earnings != answerEarnings && parseInt(data[choiceRow].Earnings) >= answerEarnings - 10000 && parseInt(data[choiceRow].Earnings) <= answerEarnings + 10000){
                earningsCell.setAttribute("class", "off");
                copyText = copyText + "🟨";
            }
            else if(data[choiceRow].Earnings == answerEarnings){
                earningsCell.setAttribute("class", "correct");
                copyText = copyText + "🟩";
            }
            else{
                copyText = copyText + "⬜";
            }
            
            if(parseInt(data[choiceRow].Earnings) > answerEarnings){
                earningsCell.innerHTML = earningsCell.innerHTML + " <img src='down-arrow.png' height='20' style='display: inline;'>"
            }
            else if(parseInt(data[choiceRow].Earnings) < answerEarnings){
                earningsCell.innerHTML = earningsCell.innerHTML + " <img src='up-arrow.png' height='20' style='display: inline;'>"
            }

            */

            if(choiceValue == answerPDGA){
                winCountText = "You won in " + guessCount + " guesses.";
                document.getElementById("guessWinText").innerText = winCountText;
                document.getElementById("submit").style.display = "none";
                document.getElementById("share").style.display = "inline";
                document.getElementById("tweet").style.display = "inline";

                done = false;
                copyText = "Buhrdle " + "day" + " - " + guessCount + "/" + max_guesses + '\n' + copyText + '\nwww.buhrdle.com';

                tweetText = copyText.replaceAll('\n', '%0a');
                tweetText = tweetText.replaceAll(' ', '%20');
                document.getElementById("tweet").setAttribute("href", document.getElementById("tweet").getAttribute("href") + tweetText);

                winOn();
            }
            else if(guessCount == max_guesses){
                document.getElementById("guessLoseText").innerText = "The mystery disc golfer was " + answerName;
                document.getElementById("submit").style.display = "none";
                document.getElementById("share").style.display = "inline";
                document.getElementById("tweet").style.display = "inline";

                guessCount = "X";
                copyText = "Buhrdle " + "day" + " - " + guessCount + "/" + max_guesses + '\n' + copyText  + '\nwww.buhrdle.com';

                tweetText = copyText.replaceAll('\n', '%0a');
                tweetText = tweetText.replaceAll(' ', '%20');

                document.getElementById("tweet").setAttribute("href", document.getElementById("tweet").getAttribute("href") + tweetText);              ;

                done = false;
                loseOn();
            }

            copyText = copyText + '\n';
        }
    }
}

function statsButtonClick() {
    winOff();
    loseOff();
    document.getElementById("statsOverlay").style.display = "block";
}
  
function statsOff() {
    document.getElementById("statsOverlay").style.display = "none";
}

function winOn() {
    document.getElementById("winOverlay").style.display = "block";
}
  
function winOff() {
    document.getElementById("winOverlay").style.display = "none";
}

function loseOn() {
    document.getElementById("loseOverlay").style.display = "block";
}
  
function loseOff() {
    document.getElementById("loseOverlay").style.display = "none";
}

function share() {
    setTimeout(async()=>console.log(
        await navigator.clipboard.writeText(copyText)), 1000)
    
    document.getElementById("loseShareText").style.display = "block";
    document.getElementById("winShareText").style.display = "block";

    //alert("copied: " + copyText);
}
