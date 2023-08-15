<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/app.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/1a081a68e9.js" crossorigin="anonymous"></script>
    <script src="/app.js"></script>

    <title>Buhrdle</title>

</head>

<body>
    <div class="icons" align="right">
        <button name="share" id="share" onclick="share()" style='font-size: 16px; display: none;'>Share <i class='fa-solid fa-share'></i></button>
        <a name="tweet" id="tweet" style="display: none;" href="https://twitter.com/intent/tweet?text=" target="_blank"><button style='font-size: 16px;'>Tweet <i class='fa-brands fa-twitter'></i></button></a>
        <button name="stats" id="stats" onclick="statsButtonClick()" style='font-size:16px'>Stats <i class='fa-solid fa-chart-simple'></i></button>
    </div>
    <div class="header">
        <h1>BUHRDLE</h1>
    </div>
    <div class="body" align="middle" padding="20px">
        <h3>A Disc Golf Guessing Game</h3>

        <p id="guessCountP">0 of 8 guesses</p>

        <select name="players" id="playerList">
        <?php
            $filehandle = fopen('/Users/nathan/Documents/buhrdle/resources/views/combinedrankings.csv', "r");
            while (($row = fgetcsv($filehandle, 0, ",")) != FALSE) {
                $players = $row[1];
                $pdga = $row[0];
?>
            <option value="<?php echo $pdga;?>"><?php echo $players;?></option>
<?php
            }
?>
        </select>

        <br>
        <br>

        <button name="submit" id="submit" onclick="buttonClick()" style="display: block;">Submit</button>

        <br>
        <br>

        
        <table id="guesses">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>PDGA #</th>
                    <th>Division</th>
                    <th>Home</th>
                    <th>Rank</th>
                    <th>Events</th>
                    <th>Wins</th>
                    <th>Earnings</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>

        <br>
        <br>

        <h3>How to Play</h3>

        <p>Welcome to Buhrdle! The disc golf guessing game. The objective of the game is to correctly identify today's mystery disc golfer. Eligible disc golfers include the top 80 MPO and top 40 FPO players in the world according to <a href="https://statmando.com/" target="_blank">StatMando</a>. To play, choose a disc golfer from the list. Then, you will see how the mystery disc golfer compares to your guess. A green highlight means they are the same in that category, where as yellow means you are close. You get 8 guesses per day, so choose wisely! Good Luck!</p>
        
        <br>
        <br>
        
        <div id="footer">Created by Nathan Johnson, PDGA <a href="https://www.pdga.com/player/138355" target="_blank">#138355</a></div>
    </div>
    <div id="statsOverlay">
        <div id="exit" align="right">
            <button name="quit" id="quit" onclick="statsOff()" style='font-size:12px; background-color:rgb(90, 90, 90);'><i class='fa-solid fa-x'></i></button>
        </div>
        <div id="statsHeader">Stats</div>
        <div id="statsAllTime">Avg</div>
    </div>
    <div id="winOverlay" class="overlay">
        <div id="exit" align="right">
            <button name="quit" id="quit" onclick="winOff()" style='font-size:12px; background-color:rgb(90, 90, 90);'><i class='fa-solid fa-x'></i></button>
        </div>
        <div id="overlayHeader">Congrats!</div>
        <div id="guessWinText" class="guessText">You won in _ guesses</div>
        <button name="winStats" id="winStats" class="overlayStats" onclick="statsButtonClick()" align="center">Stats</button>
        <button name="winShare" id="winShare" class="overlayShare" onclick="share()" align="center">Share</button>
        <div id="winShareText" class="overlayShared" style="display: none;">Copied to clipboard</div>
    </div>
    <div id="loseOverlay" class="overlay">
        <div id="exit" align="right">
            <button name="quit" id="quit" onclick="loseOff()" style='font-size:12px; background-color:rgb(90, 90, 90);'><i class='fa-solid fa-x'></i></button>
        </div>
        <div id="overlayHeader">That was your final guess</div>
        <div id="guessLoseText" class="guessText">The mystery disc golfer was _.</div>
        <button name="loseStats" id="loseStats" class="overlayStats" onclick="statsButtonClick()">Stats</button>
        <button name="loseShare" id="loseShare" class="overlayShare" onclick="share()" align="center">Share</button>
        <div id="loseShareText" class="overlayShared" style="display: none;">Copied to clipboard</div>
    </div>
</body>

</html>