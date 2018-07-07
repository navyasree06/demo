function getfile(file,callback) {
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("get",file,true);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status =="200") {
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
getfile("data.json",function(text){
	var data = JSON.parse(text);
	console.log(data);
	career(data.career);
	education(data.education);
	skills(data.skills);
	})

var child2=document.querySelector(".childtwo");


function career(careerInfo){
	//console.log(careerInfo);
	var careerHeading=document.createElement("h1");
	child2.appendChild(careerHeading);
	careerHeading.textContent="CAREER OBJECTIVE";

	var careerHr=document.createElement("hr");
	child2.appendChild(careerHr);

	var ch=document.createElement("p");
	ch.textContent=careerInfo.info;
	child2.appendChild(ch);
	var x=document.createElement("o");
	x.textContent=careerInfo.option;
	child2.appendChild(x);
}
function education(edu){
	var eduHeading=document.createElement("h1");
	eduHeading.textContent="EDUCATION QUALIFICATION";
	child2.appendChild(eduHeading);

	var careerHr=document.createElement("hr");
	child2.appendChild(careerHr);
	
	var eduTable=document.createElement("table");
	eduTable.border="1";
	var tr1="<tr><td>DEGREE</td><td>INSTITUTE</td><td>DURATION</td></tr>";
	//tr1.style.color="red";
	//eduTable.innerHTML=tr1;
	var tr2="";
	for(var i=0;i<edu.length;i++){
		tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].duration+"</td></tr>";
	}
	eduTable.innerHTML=tr1+tr2;
	child2.appendChild(eduTable);
} 
function skills(skil) {
     	var ul = document.createElement("ul");
     	child2.appendChild(ul);
     	for (var i = 0;i<skil.length;i++) {
               var li = document.createElement("li");
               li.textContent=skil[i].title+":"+skil[i].content;
               ul.appendChild(li);
           }
}
