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
