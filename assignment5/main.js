var count = 1;

function postFunction() { 
	var  text = document.getElementById("text1").value;
	var  post = document.getElementById("post1");
	var  reply1 = document.getElementById("reply1");
	var  reply2 = document.getElementById("reply2");

	if(count == 1){
		post.innerHTML= text;
		count++;
	}
	else if(count == 2){
		reply1.innerHTML= text;
		count++;
	}
	else if(count == 3){
		reply2.innerHTML= text;
		count++;
	}
	document.getElementById("text1").value="";
}

function clearFunction() { 

	var  post = document.getElementById("post1");
	var  reply1 = document.getElementById("reply1");
	var  reply2 = document.getElementById("reply2");

	post.innerHTML= "";
	reply1.innerHTML= "";
	reply2.innerHTML= "";

	count = 1;

}