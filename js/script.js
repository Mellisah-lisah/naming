   var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   var femaleNames = ["Akosua"," Adwoa","Abena","Akua","Yaa","Afua","Ama"];

function myFunction(){
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var day = parseInt(document.getElementById("day").value);
 var male = document.getElementById("male");
 var female = document.getElementById("female");

  if(day<=0||day>31){
  alert("invalid");
  }

  else if(month<0||month>12 ||month==2 && day>29){
  alert("invalid")
}
  else if(year<0||year>2020){
  alert("invalid")
}

  var day = new Date(year + "/" + month + "/" + day);
  var birthDay =day.getDay();
  if(male.checked==true){
    alert("You were born on" + daysOfWeek[birthDay] + "and your akan name is" + maleNames[birthDay])
  }else if(female.checked==true){
    alert("You were born on" + daysOfWeek[birthDay] + "and your akan name is" + femaleNames[birthDay])
  }
  }

 
