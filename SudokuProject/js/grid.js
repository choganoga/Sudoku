///TODO for final project:
//fireworks animation at completion of game

//if cookie exists bypass login and go straight to the game
function checkCookie(){
    if(document.cookie.indexOf("3550timestamp") == -1){
        login();
    }
    else{
        window.open('sudoku.html', 'Play Sudoku!')
    }
}

//pop up for user login
function login(){
    document.body.innerHTML += "<div id='userlogin'>" +
    "<div id='close'>" +
    "<a href=''><img src='images/close.png' onclick='closeLogin()' onmouseover=\"this.src='images/close-hover.png'\" onmouseout=\"this.src='images/close.png'\" border='0'/></a></div>" +
    "<center><h2>Login to Play</h2>" + 
    "Username: <input type='text' id='username'/><br/>" + 
    "Password: &nbsp;<input type='password' id='password' onkeypress='return enterPassword(event)'/><br/><br/>" + 
    "<input type='button' value='Login'" +
    "onclick='loadSyncPost()' class='button'/>  <input type='button' value='Cancel' onclick='closeLogin()' class='button'/>" +
    "</center></div>" +
    "<div id='cover' onclick='closeLogin()'></div>";
    document.getElementById("username").focus();
}

//enables user to push enter to login
function enterPassword(evt){
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
        ((evt.which) ? evt.which : 0));
    if(charCode == 13){
        loadSyncPost();
    }
}

//closes login pop up
function closeLogin(){
    document.body.removeChild(document.getElementById("userlogin"));
    document.body.removeChild(document.getElementById("cover"));
}

//validates user login and brings user to game page
var alreadyWrong = false;
function loadSyncPost() {
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var data = "userName=" + name + "&password=" + password;
    var localRequest = new XMLHttpRequest();

    localRequest.open("POST", "http://universe.tc.uvu.edu/cs3550/assignments/PasswordCheck/check.php", false);
    localRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    localRequest.send(data);

    if (localRequest.status == 200) {
        var response = JSON.parse(localRequest.responseText);
        if(response["result"] == "valid"){
            window.open('sudoku.html', 'Play Sudoku!');
            document.cookie = "3550timestamp=" + response["userName"] + " " + response["timestamp"];
            closeLogin();
        }
        else{
            if(!alreadyWrong){
                document.getElementById("userlogin").innerHTML += "<br/><center><span style='color:#952521'>Invalid username/password</span></center>";
                alreadyWrong = true;
            }
        }
    }
}

//returns username of cookie
function getName(){
    var cookieArray = document.cookie.split(' ');
    return cookieArray[0].substring(14);
}

//returns login date from cookie
function getDate(){
    var cookieArray = document.cookie.split(' ');
    return cookieArray[1];
}

//returns login time from cookie
function getCookieTime(){
    var cookieArray = document.cookie.split(' ');
    return cookieArray[2];
}

//displays options of games to valid users
function displayDifficulty(){ 
    
    //if(document.cookie.indexOf("3550timestamp") == -1){
    if(false){ //for debugging in chrome on local machine
        document.getElementById("grid").innerHTML = "<center><h2>You need to login to play.</h2></center>";
    }
    else{
        document.getElementById("grid").innerHTML = "<div id='welcome'><b>Welcome, " + getName() + "!</b><br/>" +
        "Last login was: " + getDate() + " at " + getCookieTime() + "</div>" +
        "<div id='logout'><a href='' onclick=window.close()>Close this Window</a><br/>" +
        "<a href='sudoku.html' onclick='logout()'>Logout</a><br/></div><br/><br/>" +
        "<center><h1>Choose a game:</h1>" +
        "<form name='games' style='padding-bottom:25px;'>" +
        "<select name='easy' onchange='getSelectedItem(this)'>" +
        "<option selected='selected' disabled='disabled'>Easy</option>" +
        "<option value='grid1'>Game 1</option>" +
        "<option value='grid2'>Game 2</option>" +
        "<option value='grid3'>Game 3</option>" +
        "</select>&nbsp;&nbsp;&nbsp;" +
        "<select name='medium' onchange='getSelectedItem(this)'>" +
        "<option selected='selected' disabled='disabled'>Medium</option>" +
        "<option value='grid4'>Game 4</option>" +
        "<option value='grid5'>Game 5</option>" +
        "<option value='grid6'>Game 6</option>" +
        "</select>&nbsp;&nbsp;&nbsp;" +
        "<select name='hard' onchange='getSelectedItem(this)'>" +
        "<option selected='selected' disabled='disabled'>Hard</option>" +
        "<option value='grid7'>Game 7</option>" +
        "<option value='grid8'>Game 8</option>" +
        "<option value='grid9'>Game 9</option>" +
        "<option value='grid10'>DEBUG</option>" +
        "</select></form></center>";
    }
}

//deletes user cookie
function logout(){
    document.cookie = '3550timestamp=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//gets selected item and loads corresponding game
function getSelectedItem(sel) {
    var value = sel[sel.selectedIndex].value;
    displayGrid(strToArray(value));
}

//constructs grid with given numbers
function generateGrid(Array){ 
    var html = "<table id='sudokuTable'>\n";
    for(var i = 0; i < 9; i++){
        html += "<tr>";
        for(var j = 0; j < 9; j++){
            html += "<td";
            if(Array[i][j] !== " "){ 
                html += " class='givenNums'>" + Array[i][j];
            }
            else{
                html += "><form action='javascript:void(0)'>" +
                "<input type='text' name='input' class='gridInput' maxlength='1'" +
                "size='1' onkeypress='return noLetters(event, this.form, "  + j + ", " + i + ")'/>" +
                "</form>";
            }
            html += "</td>";
        }
        html += "</tr>"
    }
    html += "</table>"
    return html;
}

//displays generated grid and adds td onclick handlers
function displayGrid(Array){
    //triggers logo animation
    startMove();
    
    //displays grid on left
    var gridDiv = document.getElementById("grid");
    gridDiv.innerHTML = generateGrid(Array);
    gridDiv.style.cssFloat = 'left';
    
    //displays navbar on right
    var navbarDiv = document.getElementById("navbar");
    navbarDiv.style.visibility = 'visible';
    navbarDiv.innerHTML = "<center>" +
    "<b>Difficulty level: " + difficulty(Array) + "</b><br/>" +
    "<b>Game number: <span id='gameNum'>" + gameNumber(Array) + "</span></b>" + 
    "<br/><br/>" +
    "<b style='color:#465e80;'>Do not refresh the page or your game will be lost!</b>" + 
    "<br/><br/>" +
    "<input type='button' value='Instructions' class='button' onclick='instructions()'/><br/><br/>" + 
    "<input type='button' value='Check My Answers' class='button' onclick='checkAnswers(" + gameNumber(Array) + ")'/>" +
    "<br/><br/>" + 
    "<div id='timer'></div>" +
    "<br/>" +
    "<div id='highscores'></div>" +
    "<div id='playerlist'></div>" +
    "<br/></center>" +
    "<a href=''>&laquo; Choose another puzzle</a>" +
    "<br/>" +
    "<a href='' onclick=window.close()>Close this window</a><br/>" +
    "<a href='' onclick='logout()'>Logout</a><br/>";
    getXMLPlayerList();//loads hard coded player list from xml doc
    getHighScores();//loads high scores from html5 storage
    
    //creates interactivity of grid
    var cells = document.getElementsByTagName("td");
    var row, col;
    for(var x = 0; x < cells.length; x++){
        cells[x].onclick = function(){
            col = this.cellIndex;
            row = this.parentNode.rowIndex;
            
            var cell = document.getElementById("sudokuTable").rows[row].cells[col];
                      
            if(cell.className != 'givenNums' && cell.innerHTML.indexOf("form") == -1){   
                $(cell).trigger('stopRumble');
                var number = cell.innerHTML;
                cell.innerHTML = "<form action='javascript:void(0)'>" +
                "<input type='text' name='input' class='gridInput' maxlength='1'" +
                "size='1' value='" + number + "'" +
                "onkeypress='return noLetters(event, this.form, " + col + ", " + row + ")'/>" +
                "</form>";
            }
        }
    }
    timerFunction('start', 1); //start timer
}

//creates instructions popup and pauses timer
function instructions(){
    var popupdiv = document.createElement("div");
    popupdiv.innerHTML = "<div id='cover' onclick='closepopup(this)'></div>" +
    "<div id='instructions'>" +
    "<div id='close' style='margin-right:-5px; margin-top:-5px;' \n\
onclick='closepopup(this)'>" +
    "<img src='images/close.png' onmouseover=\"this.src='images/close-hover.png'\" onmouseout=\"this.src='images/close.png'\" border='0'/></div>" +
    "<center><h2 style='margin-top:-2px;'>Instructions</h2></center>" + 
    "Enter a number into an empty square and press the enter button to submit the value. " +
    "To edit a value, double click on the number. " +
    "Press the Check My Answers button at any time to turn wrong numbers red. " +
    "This button will only work on the values that were submitted using the enter key. " +
    "When the game is finished and all the values are correct the timer will stop and your score will be saved based on the amount of time elapsed. " +
    "<b>Do not refresh the page or your game will be lost!</b>" +
    "</div>";
    document.body.appendChild(popupdiv);
    timerFunction('stop', 0);
}

//closes instructions popup and starts timer again
function closepopup(obj){
    if(obj.parentNode.parentNode.innerHTML.indexOf("head") == -1){ //if clicking the x to close
        obj.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode);
    }
    else{
        obj.parentNode.parentNode.removeChild(obj.parentNode);
    }
    timerFunction('start', getTime(document.getElementById("timer").innerHTML));
}

//parses time string and returns number of seconds gone by
function getTime(time){
    var arr = time.split(" ");
    var minstring = arr[0];
    var minIndex = minstring.indexOf("m");
    var mins, once = false;
    for(var i = 0; i < minIndex; i++){
        if(once){
            mins += minstring.charAt(i);
        }
        else{
            mins = minstring.charAt(i);
            once = true
        }
    }
    var minsecs = Number(mins)*60;
    
    var secstring = arr[1];
    var secs;
    if(secstring.indexOf("s") == 1){
        secs = secstring.charAt(0);
    }
    else{
        secs = secstring.charAt(0);
        secs += secstring.charAt(1);
    }
    return minsecs + Number(secs);
}

//gets high scores from html5 storage
function getHighScores() {
    if(typeof(Storage)!=="undefined")
    {
        //localStorage.clear(); //for debugging purposes
        var display = false;
        if(localStorage.length != 0){
            for(var i=0; i < localStorage.length; i++) { 
                if(localStorage[localStorage.key(i)] == document.getElementById("gameNum").innerHTML + "g"){
                    display = true;
                }
            }
            if(display){
                var scoresArr = new Array(localStorage.length);
                var highscoresDiv = document.getElementById("highscores");
        
                for(var j=0; j < localStorage.length; j++) { //inserting scores into scores array to sort
                    if(localStorage[localStorage.key(j)] == document.getElementById("gameNum").innerHTML + "g"){
                        var timeUser = localStorage.key(j);
                        var timeuser = timeUser.split(' ');
                        var time = timeuser[0] + " " + timeuser[1];
                        var secs = getTime(time);
                        scoresArr[j] = secs;
                    }
                }
                
                scoresArr.sort(function(a,b){ //sorts times from quickest to slowest
                    return a - b
                });
                
                for(var k=0; k < scoresArr.length; k++){ //converts scoresArr values to strings
                    scoresArr[k] = secsToString(scoresArr[k]);
                }
                
                var html = "";
                html = "<b>High Scores</b><br/>" +
                "<table id='highScores'>";
                var count = 0;
                for(var m = 0; m < 5; m++){ //only compares with 5 top scores
                    for(var n = 0; n < localStorage.length; n++){
                        if(localStorage.key(n).indexOf(scoresArr[m]) != -1){
                            if(count < 5){ //only displays 5 top scores
                                var arr = localStorage.key(n).split(' ');
                                html += "<td>" + arr[2] + "</td><td> : " + arr[0] + " " + arr[1] + "</td></tr>";
                                count++;
                            }
                        }
                    }
                }
                html += "</table>";
                
                highscoresDiv.innerHTML += html;
            }
        }
    }
    else
    {
        alert("Sorry, your browser does not support web storage...");
    }
}

//gets hard coded player list from xml doc
function getXMLPlayerList() {
    var request = new XMLHttpRequest();
    request.open("GET", "xml/players.xml", false);
    request.send(null);
    //    if (request.status != 200) {
    //        alert("Request failed " + request.status + ": " + request.statusText);
    //        return;
    //    }
    var highscoresDiv = document.getElementById("highscores");
    var html = "";
    var xmldoc = request.responseXML;
    var xmlrows = xmldoc.getElementsByTagName("player");
    html = "<b>Player List</b><br/>";
    for (var r = 0; r < xmlrows.length; r++) {
        var xmlrow = xmlrows[r];
        if(r == xmlrows.length-1){
            html+= xmlrow.getAttribute("name");
        }
        else{
            html += xmlrow.getAttribute("name") + ", ";
        }
    }
    highscoresDiv.innerHTML += html + "<br/><br/>";
}

//prevents user from entering in any letters or the number 0 into inputs
function noLetters(evt, frm, colnum, rownum) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
        ((evt.which) ? evt.which : 0));
    if(charCode == 13){
        enterValue(frm, colnum, rownum);
    }
    if (charCode > 31 && (charCode <= 48 || charCode > 57)) {
        return false;
    }
    return true;
}

//puts user input into td and checks if game is over
function enterValue(frm, colnum, rownum){
    var grid = document.getElementById("sudokuTable");
    var cell = grid.rows[rownum].cells[colnum];
    cell.innerHTML = frm.input.value;
    cell.style.color = 'black';
        
    //check if whole board is filled in and correct
    var done = true;
    var gameNum = Number(document.getElementById("gameNum").innerHTML);
    var ansGrid = getAnswersArray(gridNum(gameNum));
    for(var i = 0; i < grid.rows.length; i++){
        for(var j = 0; j < grid.rows.length; j++){
            if(!(grid.rows[i].cells[j].innerHTML == ansGrid[i][j])){
                done = false;
            }
        }
    }
    if(done){
        timerFunction('stop', 0); //stops timer
        document.body.innerHTML += 
        "<div id='congrats'>" + 
        "<div id='close' style='margin-top: 10px'>" +
        "<a href=''><img src='images/close.png' onmouseover=\"this.src='images/close-hover.png'\" onmouseout=\"this.src='images/close.png'\" border='0'/></a>" + 
        "</div>" +
        "<center><h2>Congratulations, " + getName() + "!</h2>" +
        "Total time: " + document.getElementById("timer").innerHTML +
        "<br/><br/><a href=''>&laquo; Back to game page</a>" + 
        "</div>"; 
        
        var timeUser = document.getElementById("timer").innerHTML + " " + getName();
        var gamenum = document.getElementById("gameNum").innerHTML + "g";
        
        window.localStorage.setItem(timeUser, gamenum); 
        
        var canvasdiv = document.createElement("div");
        canvasdiv.innerHTML = "<canvas id='fireworks' onclick='drawl(event,this);'>You don't have canvas</canvas>";
        document.body.appendChild(canvasdiv);
    }
}

//sets up for header image animation
var botImg, msPerFrame, frameCount, moveDist, botDivWidth;
var botLeft;
var margin = 10;
var maxwidth = 20000;

//sets up the movement
function startMove() {
    var grid = document.getElementById("grid");
    grid.style.marginTop = "0px";
    var header = document.getElementById("headerDiv");
    header.style.visibility = "visible";
    
    botImg = document.getElementById("headerImg");    
    msPerFrame = 10;

    moveDist = 2;

    var botDiv = document.getElementById("headerDiv");
    botDivWidth = botDiv.offsetWidth;

    botLeft = 0;
    setTimeout(moveBot, msPerFrame);
}

//moves the header image
function moveBot() {
    botLeft += moveDist;
    botImg.style.left = botLeft + "px";

    if (botLeft < botDivWidth - botImg.width - margin + 167) {
        setTimeout(moveBot, msPerFrame);
    }
}

//keeps track of time gone by
var newCount;
var timer;
function timerFunction(position, count)
{
    if(position == 'start'){
        document.getElementById("timer").innerHTML = secsToString(count);
        newCount = count + 1;
        timer = setTimeout("timerFunction('go', newCount)", 1000);
    }
    if(position == 'go'){
        document.getElementById("timer").innerHTML = secsToString(count);
        newCount++;
        timer = setTimeout("timerFunction('go', newCount)", 1000);
    }
    if(position == 'stop'){
        clearTimeout(timer);
    }
}

//converts number of seconds to min/sec string
function secsToString(count){
    return Math.floor(count/60) + "m " + count%60 + "s";
}

//checks user's answers by comparing to answer grid; turns wrong numbers red and shakes them
function checkAnswers(gameNum){
    var grid = document.getElementById("sudokuTable");
    var ansGrid = getAnswersArray(gridNum(gameNum));
    var ok = true;
    for(var i = 0; i < grid.rows.length; i++){
        for(var j = 0; j < grid.rows.length; j++){
            if(grid.rows[i].cells[j].innerHTML.indexOf("form") == -1 && !(grid.rows[i].cells[j].innerHTML == ansGrid[i][j])){
                grid.rows[i].cells[j].style.color = 'red';
                //shakes wrong numbers
                $(grid.rows[i].cells[j]).jrumble({
                    speed: 70,
                    rotation:5
                });
                var demoStart = function(){
                    $(grid.rows[i].cells[j]).trigger('startRumble');
                    setTimeout(demoStop, 300);
                };
                var demoStop = function(){
                    $(grid.rows[i].cells[j]).trigger('stopRumble');
                };
                demoStart();
                ok = false;
            }
        }
    }
    if(ok){
        alert("Everything looks good!");
    }
}

//returns the difficulty of the game
function difficulty(Array){
    var difficulty = "";
    switch(Array){
        case grid1:
            difficulty = "Easy";
            break;
        case grid2:
            difficulty = "Easy";
            break;
        case grid3:
            difficulty = "Easy";
            break;
        case grid4:
            difficulty = "Medium";
            break;
        case grid5:
            difficulty = "Medium";
            break;
        case grid6:
            difficulty = "Medium";
            break;
        case grid7:
            difficulty = "Hard";
            break;
        case grid8:
            difficulty = "Hard";
            break;
        case grid9:
            difficulty = "Hard";
            break;
        case grid10:
            difficulty = "DEBUG";
            break
        default:
            difficulty = "n/a";
    }
    return difficulty;
}

//returns the game number
function gameNumber(Array){
    var level = 0;
    switch(Array){
        case grid1:
            level = 1;
            break;
        case grid2:
            level = 2;
            break;
        case grid3:
            level = 3;
            break;
        case grid4:
            level = 4;
            break;
        case grid5:
            level = 5;
            break;
        case grid6:
            level = 6;
            break;
        case grid7:
            level = 7;
            break;
        case grid8:
            level = 8;
            break;
        case grid9:
            level = 9;
            break;
        case grid10:
            level = 10;
            break;
    }
    return level;
}

//gets array corresponding to the game num
function gridNum(num){
    switch(num){
        case 1:
            return grid1;
            break;
        case 2:
            return grid2;
            break;
        case 3:
            return grid3;
            break;
        case 4:
            return grid4;
            break;
        case 5:
            return grid5;
            break;
        case 6:
            return grid6;
            break;
        case 7:
            return grid7;
            break;
        case 8:
            return grid8;
            break;
        case 9:
            return grid9;
            break;
        case 10:
            return grid10;
            break;
    }
}

//returns the corresponding array of string array name
function strToArray(str){
    switch(str){
        case "grid1":
            return grid1;
            break;
        case "grid2":
            return grid2;
            break;
        case "grid3":
            return grid3;
            break;
        case "grid4":
            return grid4;
            break;
        case "grid5":
            return grid5;
            break;
        case "grid6":
            return grid6;
            break;
        case "grid7":
            return grid7;
            break;
        case "grid8":
            return grid8;
            break;
        case "grid9":
            return grid9;
            break;
        case "grid10":
            return grid10;
            break;
    }
}

//given a grid array, returns its corresponding answer array
function getAnswersArray(Array){
    switch(Array){
        case grid1:
            return grid1ans;
            break;
        case grid2:
            return grid2ans;
            break;
        case grid3:
            return grid3ans;
            break;
        case grid4:
            return grid4ans;
            break;
        case grid5:
            return grid5ans;
            break;
        case grid6:
            return grid6ans;
            break;
        case grid7:
            return grid7ans;
            break;
        case grid8:
            return grid8ans;
            break;
        case grid9:
            return grid9ans;
            break;
        case grid10:
            return grid10ans;
            break;
        default:
            return 0;
    }
}