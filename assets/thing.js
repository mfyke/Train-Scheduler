var config = {
    apiKey: "AIzaSyCAyQPd3m8n6nI5PhRd93r8W6cciXmIcX8",
    authDomain: "employee-tracker-62487.firebaseapp.com",
    databaseURL: "https://employee-tracker-62487.firebaseio.com",
    storageBucket: "employee-tracker-62487.appspot.com",
    messagingSenderId: "596899027099"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var startTime;
var currentTime;
var frequency;


$("#bonerFucker").on("click", function(event){
	event.preventDefault();
	name=$("#name-input").val().trim();
	destination=$("#destination-input").val().trim();
	firstTrainTime=$("#start-input").val().trim();
	frequency=$("#frequency-input").val().trim();

	database.ref().push({
		trainName: name,
		destination: destination,
		firstTrainTime: firstTrainTime,
		frequency: frequency
	});

	$("#name-input").val("");
	$("#role-input").val("");
	$("#start-input").val("");
	$("#rate-input").val("");
});
database.ref().on("child_added", function(snapshot){
	var tFrequency = snapshot.val().frequency;

    var firstTime = snapshot.val().firstTrainTime;

    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

	var row = $("<tr>");
	var col1= $("<td>" + snapshot.val().trainName + "</td>");
	var col2= $("<td>" + snapshot.val().destination + "</td>");
	var col3= $("<td>" + snapshot.val().frequency + "</td>");
	var col4= $("<td>" + moment(nextTrain).format("hh:mm") + "</td>");
	var col5= $("<td>" +  tMinutesTillTrain + "</td>");
	$(col1).appendTo(row);
	$(col2).appendTo(row);
	$(col3).appendTo(row);
	$(col4).appendTo(row);
	$(col5).appendTo(row);
	$("#employeeArea").append(row);
});