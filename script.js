function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
    function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }


var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Sports/NCAA%20Division%20I%20Teams.csv"
      var university = getColumn(url, 1)
      var nickname = getColumn(url, 2)
      var city = getColumn(url, 3)
      var state = getColumn(url, 4)
      var enrollment = getColumn(url, 5)
      var conference = getColumn(url, 6)

//prints teams in the same conference
function getTeamsInConference(conference){
    var matches = [];

    for (var i = 0; i < conferences.length; i++){
            if(conferences[i].toLowerCase().includes(conference.toLowerCase())){
                matches.push(universities[i]);
            }
    }
    if(matches.length > 0){
    
        return matches;
    }
    else{
        matches.push("The conference does not exist");
        return matches;
    }
    }

    // console.log(getTeamsInConference("Mountain West"))
    // console.log(getTeamsInConference("MAC"))
    // console.log(getTeamsInConference("SEC"))
    // console.log(getTeamsInConference("Sun Belt"))
    // console.log(getTeamsInConference("Pac-12"))
    // console.log(getTeamsInConference("Independent"))
    // console.log(getTeamsInConference("Big 12"))
    // console.log(getTeamsInConference("ACC"))
    // console.log(getTeamsInConference("C-USA"))
    // console.log(getTeamsInConference("American"))
    // console.log(getTeamsInConference("FBS Independent"))
    // console.log(getTeamsInConference("Big Ten"))

function getTeamsInState(conference){
    var matches = [];

    for (var i = 0; i < states.length; i++){
            if(conferences[i].toLowerCase().includes(conference.toLowerCase())){
                matches.push(states[i]);
            }
    }
    if(matches.length > 0){
    
        return matches;
    }
    else{
        matches.push("The conference does not exist");
        return matches;
    }
    }
    
    // console.log(getTeamState("Mountain West"))
    // console.log(getTeamState("MAC"))
    // console.log(getTeamState("SEC"))
    // console.log(getTeamState("Sun Belt"))
    // console.log(getTeamState("Pac-12"))
    // console.log(getTeamState("Independent"))
    // console.log(getTeamState("Big 12"))
    // console.log(getTeamState("ACC"))
    // console.log(getTeamState("C-USA"))
    // console.log(getTeamState("American"))
    // console.log(getTeamState("FBS Independent"))
    // console.log(getTeamState("Big Ten"))


function getTeamsInCtiy(conference){
    var matches = [];

    for (var i = 0; i < cities.length; i++){
            if(conferences[i].toLowerCase().includes(conference.toLowerCase())){
                matches.push(city[i]);
            }
    }
    if(matches.length > 0){
    
        return matches;
    }
    else{
        matches.push("The confernce does not exist");
        return matches;
    }
    }

    // console.log(getTeamCity("Mountain West"))
    // console.log(getTeamCity("MAC"))
    // console.log(getTeamCity("SEC"))
    // console.log(getTeamCity("Sun Belt"))
    // console.log(getTeamCity("Pac-12"))
    // console.log(getTeamCity("Independent"))
    // console.log(getTeamCity("Big 12"))
    // console.log(getTeamCity("ACC"))
    // console.log(getTeamCity("C-USA"))
    // console.log(getTeamCity("American"))
    // console.log(getTeamCity("FBS Independent"))
    // console.log(getTeamCity("Big Ten"))




function getCollegeEnrollment(conference){
    var total = 0;
    
    for (var i = 0; i < conferences.length; i++){
            if(conferences[i].toLowerCase().includes(conference.toLowerCase())){
                    total += (parseFloat(enrollments[i]));
            }
        }
        if(total == 0){
            return -1;
        }
            return total;
        }

    // console.log(getCollegeEnrollment("Mountain West"))
    // console.log(getCollegeEnrollment("MAC"))
    // console.log(getCollegeEnrollment("SEC"))
    // console.log(getCollegeEnrollment("Sun Belt"))
    // console.log(getCollegeEnrollment("Pac-12"))
    // console.log(getCollegeEnrollment("Independent"))
    // console.log(getCollegeEnrollment("Big 12"))
    // console.log(getCollegeEnrollment("ACC"))
    // console.log(getCollegeEnrollment("C-USA"))
    // console.log(getCollegeEnrollment("American"))
    // console.log(getCollegeEnrollment("FBS Independent"))
    // console.log(getCollegeEnrollment("Big Ten"))


function getTeamNickname(conference){
    var matches = [];

    for (var i = 0; i < conferences.length; i++){
            if(conferences[i].toLowerCase().includes(conference.toLowerCase())){
                matches.push(nicknames[i]);
            }
    }
    if(matches.length > 0){
    
        return matches;
    }
    else{
        matches.push("The conference does not exist");
        return matches;
    }
    }

    // console.log(getTeamNickname("Mountain West"))
    // console.log(getTeamNickname("MAC"))
    // console.log(getTeamNickname("SEC"))
    // console.log(getTeamNickname("Sun Belt"))
    // console.log(getTeamNickname("Pac-12"))
    // console.log(getTeamNickname("Independent"))
    // console.log(getTeamNickname("Big 12"))
    // console.log(getTeamNickname("ACC"))
    // console.log(getTeamNickname("C-USA"))
    // console.log(getTeamNickname("American"))
    // console.log(getTeamNickname("FBS Independent"))
    // console.log(getTeamNickname("Big Ten"))
