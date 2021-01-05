function report_to_lidang(matrix)
{
  /* When a volunteer finds a valid 43-node graph with clique < 5 and independent set < 5
     the whole graph (in matrix format) will be sent to a google function
     at google cloud in this format:
     {
        "matrix":[[1,1,...]  , .....]
     }
     
  */
  
  // the cors proxy
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  
  // the trigger of google cloud function
  const url = "https://us-central1-ramsey-43-volunteer-server.cloudfunctions.net/ramseyTrigger"; 

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
  xmlhttp.open("POST", proxyurl + url);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.onload  = function() {
     var jsonResponse = xmlhttp.response;
     console.log(jsonResponse)
  };
  xmlhttp.send(JSON.stringify({ "matrix": matrix}));
}
