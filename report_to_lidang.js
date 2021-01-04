function report_to_lidang(edgeSet)
{
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://us-central1-ramsey-43-volunteer-server.cloudfunctions.net/ramseyTrigger"; 

var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
xmlhttp.open("POST", proxyurl + url);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.onload  = function() {
   var jsonResponse = xmlhttp.response;
   console.log(jsonResponse)
};
xmlhttp.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));
}
