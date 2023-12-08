function show() {
    if(studentName.value == "" || studentID.value == "" || mth.value == "" || stt.value == "" || cse151.value  == "" || cse141.value == "" || wfe.value == "" || gns.value == "") {
        empty.style.display = "block"
    } else {
        var confirmation = confirm('Are you sure you want to proceed?')
        if(confirmation == true) {
            var sum = Number(mth.value) + Number(stt.value) + Number(cse151.value) + Number(cse141.value) + Number(wfe.value) + Number(gns.value)
            var Grade = ((sum / 600) * 100).toFixed(2)
            if (mth.value > 100 || stt.value > 100 || cse151.value > 100 || cse141.value > 100 || wfe.value > 100 || gns.value > 100){
                alert("Score can't be more than 100")
            }else {
                if(Grade >= 0 && Grade < 40){
                    welcome.innerHTML = "Welcome " + document.getElementById('studentName').value + ","
                    remark.innerHTML ="It is my utmost pleasure to sincerely appreciate your efforts for this semester. please, find below how you have perform. Best regards."
                    score.innerHTML = "Your Score is "+ Grade +"%. Unfortunately, you will  not be progressing to the next level. I will suggest you reconsider your intent to study in our noble institution. Thank you best wishes."
                    score.style.color="red";
                }else if (Grade >= 40 && Grade < 50 ){
                    welcome.innerHTML = "Welcome " + document.getElementById('studentName').value + ","
                    remark.innerHTML ="It is my utmost pleasure to sincerely appreciate your efforts for this semester. please, find below how you have perform. Best regards."
                    score.innerHTML = "Your Score is "+ Grade +"%. You will be promoted on trial. Thank You and Best wishes."
                    score.style.color="red";
                }else if (Grade >= 50 && Grade <= 100) {
                    welcome.innerHTML = "Welcome " + document.getElementById('studentName').value + ","
                    remark.innerHTML ="It is my utmost pleasure to sincerely appreciate your efforts for this semester. please, find below how you have perform. Best regards."
                    score.innerHTML = "Your Score is "+ Grade +"%. Congratulations, you are promoted to the next level."
                    score.style.color="green";
                }
            }
            empty.style.display="none";
        document.getElementById('studentName').value = ""
        document.getElementById('studentID').value = ""
        document.getElementById('math').value = ""
        document.getElementById('eng').value = ""
        document.getElementById('biology').value = ""
        document.getElementById('geography').value = ""
        document.getElementById('economics').value = ""
        document.getElementById('account').value = ""
    } else{
        alert("Check Again")
    }
    }
   
}