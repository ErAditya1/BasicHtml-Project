

function sendInformation() {
    
   const tr= confirm("Do you want to final submit.")
   

    const Enroll = document.getElementById("input_1").value;
    const studentName = document.getElementById("input_2").value;
    const DOB = document.getElementById("input_3").value;
    const Mob = document.getElementById("input_4").value;
    const Session = document.getElementById("input_5").value;
    const fatherName = document.getElementById("input_6").value;
    const Address = document.getElementById("input_7").value;
    const check1 = document.getElementById("input_radio_1").checked;
    const check2 = document.getElementById("input_radio_2").checked;
    const check3 = document.getElementById("input_radio_3").checked;
    let Branch;
    if(check1==true){
        Branch = "Computer Science & Engineering";
    }
    else if(check2==true){
        Branch = "Mechanical Engineering (Automobile)";
    }
    else if(check3 == true){
         Branch = "Mechanical Engineering (Production)";
    }
    else{
        alert("Please select any Baranch");
    }

    const Img = document.getElementById("input_8");
    const C_Img = document.getElementById("image");

    C_Img.src = URL.createObjectURL(Img.files[0]);

    document.getElementById("enroll").innerHTML = Enroll;
    document.getElementById("dob").innerHTML = DOB;
    document.getElementById("name").innerHTML = studentName;
    document.getElementById("mob").innerHTML = Mob;
    document.getElementById("session").innerHTML = Session;
    document.getElementById("fName").innerHTML = fatherName;
    document.getElementById("addrs").innerHTML = Address;
    
    document.getElementById("branch").innerHTML = Branch;

    document.getElementById('form_outer').style.display = "none";
    document.getElementById('id_main').style.display="block";
    document.getElementById('header').style.display="none";
   
   
}

function printID(){
    document.getElementById("print").style.display = "none";
    confirm("Do you want to final submit and print");
    /*var container = document.getElementById("image-wrap");*/ /*specific element on page*/
    var container = document.getElementById("id_main").innerHTML; /* full page */
    window.print('container');
    // html2canvas(container, { allowTaint: true }).then(function (canvas) {
        
    //     var link = document.createElement("a");
    //     document.body.appendChild(link);
    //     link.download = "html_image.jpg";
    //     link.href = canvas.toDataURL();
    //     link.target = '_blank';
    //     link.click();
    // });
}



