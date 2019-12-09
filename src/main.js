import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDocService } from './betterDoc-service.js';






$(document).ready(function(){
  $("form#doctor").submit(function(event){
    event.preventDefault();
    let betterdocservice = new BetterDocService();
    let doc = $("#inputDoctor").val();
    let test = betterdocservice.getDoc(doc);
    console.log();
  });
});

function getElements(response) {
  // console.log(blah);
  let strungResponse = "<ul>"
  $.each(response.data, function(index,result){
    strungResponse = "<li>" + result.name + "</li>"
  })
  strungResponse = strungResponse + "</ul>"
  console.log(strungResponse);
  $("#dropBox").text(strungResponse)
}
  // console.log(result);
