
window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
  form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var errormsg = document.getElementById("errormsg");
    var x = document.forms["myForm"]["password"].value;
    var y = document.forms["myForm"]["retrypassword"].value;
    if(x ==y){
      alert("true");
      return true;
    }
    else{
     errormsg.innerHTML = "error";
    }
    return false;
  
    
}