$(document).ready(function(){
  var users = ["comster404", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin"];
  for(i=0;i<users.length;i++){
    var getUsers = "https://api.twitch.tv/kraken/streams/" + users[i] + "?callback=";
    
$.getJSON(getUsers, function(data) {
  
if (data.stream===null){
  $.getJSON(data._links.channel, function(data2){
  $("#offline").append("<h3><a href = https://www.twitch.tv/" + data2.name + " target=_blank>" + data2.display_name + "</a> Offline</h3>");
$("#offline").css("color","grey");
            });
  }
  
  else if (data.stream.game){
    $("#online").prepend("<h3><a href = https://www.twitch.tv/" + data.stream.channel.name + " target=_blank>" + data.stream.channel.display_name + "</a>" + " " + data.stream.channel.status + "</h3>");
    $("#online").css("color","white");
  }

   
}).fail(function(jqXHR) {
  var tmp = jqXHR.responseJSON.message;
  var tmparr = tmp.split(" ");
 var nonuser = tmparr[1].replace(/['"]+/g, '');
  console.log(nonuser);
    $("#closed").append("<h3><a href = https://www.twitch.tv/ target=_blank>" + nonuser + "</a> Account closed </h3>");
  $("#closed").css("color","grey");
  $("#closed").css("color","grey");
  });             
 
   
 }
  
});