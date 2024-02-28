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
