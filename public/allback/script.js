
function valid(){
	var name=document.getElementById("name");
	var age=document.getElementById("age");
	var number=document.getElementById("number");
	var dob=document.getElementById("dob");
	var gmail=document.getElementById("gmail");

	if(name.value=="" || name.value==null )
	{
		alert("invalid name")
	}
	else if(name.value.length <5)
	{
		alert("Name must have minimun 5 Letters")
	}
	else if(age.value=="" || age.value==null )
	{
		alert("invalid age")
	}
	else if(dob.value=="")
	{
		alert("invalid date of birth")
	}
	else if(number.value=="" || number.value==null || number.value.length!==10)
	{
		alert("invalid 10 digit mobile number")
	}
	else if(gmail.value=="" || gmail.value==null )
	{
		alert("invalid Email ID")
	}else
	{
		alert("successfully submited")
		return filltable();
	}
	
}


	

	

	function filltable(){
		
		var namelist=name.value;
		var agelist=age.value;
		var doblist=dob.value;
		var numberlist=number.value;
		var gmaillist=gmail.value;

		console.log("Name :"+ namelist);
		console.log("Age :"+ agelist);
		console.log("Date of birth :"+ doblist);
		console.log("Number :"+ numberlist);
		console.log("Gmail ID :"+ gmaillist);

		var row=1;
		var display=document.getElementById("show");

		var newRow=display.insertRow(row);
		var cell1=newRow.insertCell(0);
		var cell2=newRow.insertCell(1);
		var cell3=newRow.insertCell(2);
		var cell4=newRow.insertCell(3);
		var cell5=newRow.insertCell(4);

		cell1.innerHTML=namelist;
		cell2.innerHTML=agelist;
		cell3.innerHTML=doblist;
		cell4.innerHTML=numberlist;
		cell5.innerHTML=gmaillist;

		row++;
	}



	
	

	// var row=1;
	// var submit=document.getElementById("submit");

	// submit.addEventListener("click",displayDetails);

	// function displayDetails(){
	// 	var display=document.getElementById("show");

	// 	var newRow=display.insertRow(row);

	// 	var cell1=newRow.insertCell(0);
	// 	var cell2=newRow.insertCell(1);
	// 	var cell3=newRow.insertCell(2);
	// 	var cell4=newRow.insertCell(3);
	// 	var cell5=newRow.insertCell(4);

	// 	cell1.innerHTML=namelist;
	// 	cell2.innerHTML=agelist;
	// 	cell3.innerHTML=doblist;
	// 	cell4.innerHTML=numberlist;
	// 	cell5.innerHTML=gmaillist;

	// 	row++;
	// }




