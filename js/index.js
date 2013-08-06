/*
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2013. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

/*function wlCommonInit(){

	loaddashbilhetes();
}



function loaddashbilhetes(){
	/*Função que vai injetar o dashbilhetes.html
	 * 
	 */

//	$("#dashBilhetes").load("pages/dashbilhetes.html", function(){
//	});
//}


//Função que valida o login
//

var t;
var nome;
var key;

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();

m=checkTime(m);
s=checkTime(s);

document.getElementById('lblTime').innerHTML=h+":"+m+":"+s;

t=setTimeout(function(){startTime();},500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

function startDate() {
  var data=new Date();
  var day = data.getDate();
  var month = data.getMonth();
  var year = data.getFullYear();

  day=checkDate(day);
  month=checkDate(month);
  
  document.getElementById('lblDate').innerHTML=day+"/"+month+"/"+year;
  
  t=setTimeout(function(){startDate();},500);
}
function checkDate(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

function increaseNr() {
   var i = nrTickets.value;
   document.getElementById('nrTickets').value = ++i;
   Total();
    }

function decreaseNr() {
   
   var s = document.getElementById('nrTickets').value;
   if(s>1){
     document.getElementById('nrTickets').value = --s ;
        }
        Total();
       }

 function Total() {
    var x = nrTickets.value;
    var y = lblPreco.value;
    t = x*y;
    document.getElementById("valorTot").innerText="Total:" + t + "€";
}

function valorTotal(){
  console.log("valor de t="+t);
  $('#valorPagar').html("<h5>Valor: "+t+" €</h5>");
}


//Função navegar para trás das paginas
function goback (){
  window.history.go(-2);
}

