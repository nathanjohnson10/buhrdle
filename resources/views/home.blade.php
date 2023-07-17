<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="stylesheet" href="/app.css"/>
        
        <title>Buhrdle</title>

    </head>
    <body>
        <div class="header" style="background-color: aliceblue;">
            <h1>BUHRDLE</h1>
        </div>
        <div class="body" align="middle" padding="20px">
            <h3>A Disc Golf Guessing Game</h3>

            <p> 0 of 6 Guesses</p>
    
            <select name="players" id="playerlist">
                <
                <option value="gannon">Gannon Buhr</option>
                <option value="paul">Paul McBeth</option>
            </select>
    
            <br>
            <br>

            <button name="submit" id="submit">Submit</button>

            <br>
            <br>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Division</th>
                    <th>Starting Year</th>
                    <th>Home State/Country</th>
                    <th>World Ranking</th>
                    <th>Career Events</th>
                    <th>Career Wins</th>
                    <th>Career Earnings</th>
                </tr>
            </table>
    
            <br>
            <br>

            <h3>How to Play</h3>
    
            <p>Welcome to Buhrdle! The disc golf guessing game. The objective of the game is to correctly identify today's mystery disc golfer. Eligible disc golfers include the top 100 MPO and top 60 FPO players in the world according to StatMando. To play, choose a disc golfer from the list. Then, you will see how the mystery disc golfer compares to your guess. A green highlight means they are the same in that category, where as yellow means you are close. You get 6 guesses per day, so choose wisely! Good Luck!</p>
    
        </div>
    </body>
</html>
