var studentArray=[];

function submit(){
    var display_student=[];
    for(var j=1; j <= 4; j++){
        var nameofstudent=document.getElementById("name_of_the_student_"+j).value;
        console.log(nameofstudent);
        studentArray.push(nameofstudent);
    }
    console.log(studentArray);
    var length=studentArray.length;
    console.log(length);
    for(var k=0;k<length; k++){
        display_student.push("<h4>name-"+ studentArray[k]+"</h4>");
        console.log(display_student);
    }
    console.log(display_student);
    document.getElementById("display_name_with_commas").innerHTML=display_student;
    var remove_commas=display_student.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    studentArray.sort();
    console.log(studentArray);
var displaysorting=[];
var length1=studentArray.length;
console.log(length1);
for(var k=0;k<length1;k++){
    displaysorting.push("<h4>name-"+studentArray[k]+"</h4>");
    console.log(displaysorting);
}
var removecommas1=displaysorting.join(" ");
console.log(removecommas1);
document.getElementById("display_name_without_commas").innerHTML=removecommas1;
}