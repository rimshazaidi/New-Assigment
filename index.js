function FormSubmit(){
    // alert('Please Scroll Down and Confirm Your Data...')
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var email = document.getElementById('eMail').value;
    var password = document.getElementById('mypassword').value;
    var gender = document.getElementById('gender').value;
   
    var hobbies = document.getElementById('myHobbies').value;
    var number = document.getElementById('myNumber').value;
    var date = document.getElementById('submissionDate').value;
    var time = document.getElementById('submissionTime').value;

    document.getElementById('dynamicTable').innerHTML  ="<h1>Data in table</h1>"+
     "<table>"+
							"<thead>"+
								"<tr>"+
									"<th> First Name </th>"+
                                    "<th> Last Name</th>"+
                                    "<th> Email</th>"+
                                    "<th> Password</th>"+
                                    "<th> Gender</th>"+
                                    "<th> Hobbies</th>"+
                                    "<th> Number</th>"+
                                  "<th> Date</th>"+
                                    "<th> Time</th>"+
								"</tr>"+
							"</thead>"+
							"<tbody>"+
								"<tr>"+
									"<td>"+ fName +"</td>"+
                                    "<td>"+ lName +"</td>"+
                                    "<td>"+ email +"</td>"+
                                    "<td>"+ password +"</td>"+
                                    "<td>"+ gender +"</td>"+
                                    "<td>"+ hobbies +"</td>"+
                                    "<td>"+ number +"</td>"+
                                    "<td>"+ date +"</td>"+
                                    "<td>"+ time +"</td>"+
								"</tr>"+	
							"</tbody>"+
                        "</table>";
                      
                    }