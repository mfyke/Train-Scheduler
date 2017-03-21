var config = {
    apiKey: "AIzaSyCAyQPd3m8n6nI5PhRd93r8W6cciXmIcX8",
    authDomain: "employee-tracker-62487.firebaseapp.com",
    databaseURL: "https://employee-tracker-62487.firebaseio.com",
    storageBucket: "employee-tracker-62487.appspot.com",
    messagingSenderId: "596899027099"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var employeeName = "";
var role = "";
var startDate = "";
var monthsWorked = 0;
var monthlyRate = 0;
var totalBilled= 0;

$("#bonerFucker").on("click", function(event){
	event.preventDefault();
	name=$("#name-input").val().trim();
	role=$("#role-input").val().trim();
	startDate=$("#start-input").val().trim();
	monthlyRate=$("#rate-input").val().trim();

	database.ref().push({
		name: name,
		role: role,
		start: startDate,
		rate: monthlyRate
	});

	$("#name-input").val("");
	$("#role-input").val("");
	$("#start-input").val("");
	$("#rate-input").val("");
});
database.ref().on("child_added", function(snapshot){
	var row = $("<tr>");
	var col1= $("<td>" + snapshot.val().name + "</td>");
	var col2= $("<td>" + snapshot.val().role + "</td>");
	var col3= $("<td>" + snapshot.val().start + "</td>");
	var col4= $("<td>");
	var col5= $("<td>" + snapshot.val().rate + "</td>");
	var col6= $("<td>");
	$(col1).appendTo(row);
	$(col2).appendTo(row);
	$(col3).appendTo(row);
	$(col4).appendTo(row);
	$(col5).appendTo(row);
	$(col6).appendTo(row);
	$("#employeeArea").append(row);
});