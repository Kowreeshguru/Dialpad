var phoneScreen = $("input#output"); var phoneNumber = phoneScreen.val(); 
var delBtn = $(".col-sm-4#btn3");
var numBtn = $(".col-sm-4#btn"); var dialBtn = $(".col-sm-4#btn2");
var count=0;

numBtn.click(function() {
	if(count < 10){
		var number = $(this).attr('value');
		if(count == 4 || count == 7){
			updatePhoneNumber("-");
			printPhoneNumber();
		}
		updatePhoneNumber(number);
		printPhoneNumber();
		count++;
	}
	else{
		alert("Number does not exceed or below 10 digits");
	}
});
delBtn.click(function() {
	if(count >=1){
	deleteNumber();
	printPhoneNumber();
	count--;
	if(count == 7 || count == 4){
		deleteNumber();
		printPhoneNumber();
	}}
});
dialBtn.click(function() {
  dialNumber();

});

function updatePhoneNumber(newNumber) {
	phoneNumber = phoneNumber + newNumber;
}
function deleteNumber() {
	phoneNumber = phoneNumber.slice(0,-1);
}
function printPhoneNumber() {
	phoneScreen.val(phoneNumber);
}
function clearNumber() {
	phoneNumber = "+91 ";
	count=0;
}
function dialNumber() {
	if(count != 10){
	alert("You number is wrong...It should equal to ten digits")}else{
	if(dialBtn.attr('value') == "attend"){
		dialBtn.attr('value','decline');
		alert("You calling to "+phoneNumber+" Press red button to disconnect the call");
		dialBtn.toggle(dialBtn.css("background-color", "red"));
		dialBtn.attr('value','decline');
	}else if(dialBtn.attr('value') == "decline"){
		alert("Your call is disconnected");
		dialBtn.toggle(dialBtn.css("background-color", "#00e600"));
		dialBtn.attr('value','attend');
		  clearNumber();
  printPhoneNumber();
	}	}
}