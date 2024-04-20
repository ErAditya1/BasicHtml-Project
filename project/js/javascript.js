let loader = document.getElementById("preloader");
loader.style.display = "none";
window.addEventListener("load", function () {
  loader.style.display = "none";
  console.log("Dom content loaded loaded");
});


// DOMContentLoaded
  
  document.getElementById("footer_file").innerHTML = `
  <section class="contentArea" style="background-color: #fff; color: black;">
        <div class="heading">
          <h2 align="center" style="font-size: 3rem; color: rgb(181, 8, 8);">READY FOR WHAT'S NEXT</h2>
        </div>
        <div class="spacer"></div>
        <div class="contentAreaWrap">
          <div style="display: flex; align-items: center; justify-content: center; flex-direction: row; flex-wrap: wrap;">
            <div class="button">
              <button type="button" class="btn"> <a href="/"> REQUEST MORE INFO</a> </button>
            </div>

            <div class="button">
              <button type="button" class="btn" style="background: rgb(245, 231, 32);"> <a href="/home/apply.html"> APPLY NOW</a>
              </button>
            </div>
            
            <div class="button">
              <button type="button" class="btn"> <a href="/"> EXPLORE PROGRAMS</a> </button>
            </div>
          </div>
          <img src="/image/subfooterimg.jpg" alt="" style="width: 100%; height: auto;">
        </div>
        </div>
      </section>
    
      <section class="contentArea">
        <div class="contentAreaWrap"
          style="display: flex; flex-direction: row; flex-wrap: wrap;justify-content: center; background: rgb(181, 8, 8);">
    
          <div class="col" >
            <img src="/image/Aditya_logo1.png" alt="" style="height: 15rem;">
            <div class="s-icon" style="display: flex;flex-direction: row;">
              <a href="/"><i class='bx bxl-facebook-circle'></i></a>
              <a href="/"><i class='bx bxl-instagram-alt'></i></a>
              <a href="/"><i class='bx bxl-twitter'></i></a>
              <a href="/"><i class='bx bxl-youtube'></i></a>
              <a href="/"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>
          <div class="col">
            <p>3400 S. 43rd St.
              <br>
              Barabanki, Utterpradesh
              <br>
              <a href="tel:0000000000">000-000-0000</a>
              <br>
              <a href="mailto:adityabusn@gmail.com">adityabusn@gmail.com</a>
              <br>
              <a href="/home/map.html">Campus Map</a>
              <br>
              <a href="/Contact">Contact Us</a>
            </p>
    
          </div>
          <div class="col">
            <ul>
              <li>
                <a href="#">Employment at SSIC</a>
              </li>
              <li>
                <a href="#">Event Spaces</a>
              </li>
              <li>
                <a href="#">Trustees</a>
              </li>
              <li>
                <a href="#">Early Learning Center</a>
              </li>
              <li>
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <ul>
              <li>
                <a href="#">Faculty & Staff</a>
              </li>
              <li>
                <a href="#">Accreditation</a>
              </li>
              <li>
                <a href="#">Learning Outcomes</a>
              </li>
              <li>
                <a href="#">Harassment/Discrimination Policy</a>
              </li>
              <li>
                <a href="#">Web Accessibility Statement</a>
              </li>
              <li>
                <a href="#">Institutional Review Board</a>
              </li>
            </ul>
          </div>
    
    
        </div>
        </div>
      </section>
      <div style="background: #740426; width: 100%; padding: 10px 0;">
        <p align = "center" style="color: #fff; font-size: 20px;">&copy 2023 Aditya Kumar</p>
      </div>
  `


  const div = document.createElement('div');

  div.innerHTML = `
  <div onload = "buttonChecker()"class="logo" title="Sri Sai Inter College">
  <a href="#">
    <img src="/image/ssic_logo.jpeg" alt="SSIC"  class="img-responsive">
  </a>
  <div class="clgName">
    <h2 align = "center">S.S.I.C.
      <br>
      Barabanki
    </h2>
  </div>
</div>





<div id="nav-icon3" onclick="navBar()">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>


<div class="primarymenu" id="activ">

  <nav class="navbar-inverse">


    <div class="headerRightTop">
      <nav class="utilityMenu Menu " aria-label="Utility Menu">
        <ul class="nav navbar-nav top-nav">
         
          <li class="bold has-children"  style="
          border-bottom-left-radius: 15px; "><a href="/home/news.html" > News <i class='bx bxs-chevron-down'></i></a></li>
          <li><a href="/home/atheletics.html">Athletics</a></li>
          <li><a href="/home/visit.html">Visit</a></li>
          <li><a href="/home/events.html">Events</a></li>
          <li><a href="/home/give.html">Give</a></li>



          <div class="searchWrap" style="float: right;">

            <form action="/Search" method="GET" class="showit" onsubmit="return false;"
              aria-label="Search by Keywords (Desktop)">

              <input id="templates-5I4BWB91-searchwrap-text" type="search" class="bold search" name="q" value=""
                placeholder="Search by keywords">
              <button type="submit" class="searchIconA"><i class='bx bx-search'></i></button>
            </form>


          </div>
          <div class="button" >
            <button type="button" class="btn btnRounded btnPrimary" > <a href="/home/apply.html" class="medium"><span class="btnWrap">Login / Register</span></a>
            </button>
          </div>

        </ul>
      </nav>
    </div>

    <div class="navbar-collapse js-navbar-collapse ">

      <div class="s-menubar" style="display: flex; justify-content: end; flex-direction: row;">

        <ul id="nav" class="nav navbar-nav navtext" data-smartmenus-id="16958006529779924">
          <li>
            <a href="/index.html">Home</a>
          </li>

          <li class="dropdown">
            <a class="dropdown-toggle has-submenu" href="/home/admission.html">Admissions</a>


          </li>




          <!--<li class="">
          <a class="" href="Home/Recruitment.html">Recruitment</a>
          </li>-->
          <li class=""><a class="" href="/home/campus.html">Campous Life</a></li>

          <li class="dropdown">
            <a class="dropdown-toggle has-submenu" href="/home/resources.html" >Student Resources </a>

          </li>

          <li class="dropdown">
            <a class="dropdown-toggle has-submenu" href="/home/abilities.html">Abilities </a>

          </li>

          <li class=""><a class="" href="/home/contact.html">Contact Us</a> </li>
        </ul>

      </div>
    </div>
  </nav>

 </div>
`

  document.getElementById('header_file').appendChild(div);


// Active menu
function navBar() {

	let element = document.getElementById("activ");
	element.classList.toggle("active-menu");
	let elemen = document.getElementById("nav-icon3");
	elemen.classList.toggle("open");
	// alert("hello")
  }

  const rank1  = document.getElementById('rank1');
  const rank2  = document.getElementById('rank2');
  const rank3  = document.getElementById('rank3');
  const rank4  = document.getElementById('rank4');
  // rank1.innerHTML = '0%';

    
function increaseRank(){
  let increament = 0;
  let interval = setInterval(() => {
    rank1.innerHTML = `${increament}%`;

    increament ++ ;
    if(increament > 95){
      stopInterval1(interval);
    }
    
  }, 50);
  let increament2 = 0;
  let interval2 = setInterval(() => {
    rank2.innerHTML = `${increament2}%`;

    increament2 ++ ;
    if(increament2 > 98){
      stopInterval1(interval2);
    }
    
  }, 50);

  let increament3 = 0;
  let interval3 = setInterval(() => {
    rank3.innerHTML = `${increament3}%`;

    increament3 ++ ;
    if(increament3 > 99){
      stopInterval1(interval3);
    }
    
  }, 50);
  let increament4 = 0;
  let interval4 = setInterval(() => {
    rank4.innerHTML = `${increament4}%`;

    increament4 ++ ;
    if(increament4 > 98){
      stopInterval1(interval4);
    }
    
  }, 50);
  
}
function stopInterval1(interval){
  clearInterval(interval);
}



const observer = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
      
      if(entry.isIntersecting){
        increaseRank();
        entry.target.classList.add('show-item');
        
      } 
      else{
        // stopInterval1();
        entry.target.classList.remove('show-item');

      }
    });
});

const insert_rank = document.querySelectorAll(".rank");
insert_rank.forEach((el) => observer.observe(el));



  function loginForm() {
	document.getElementById("login").style.display = "block";
	document.getElementById("registration").style.display = "none";
  }
  function registrationForm() {
	document.getElementById("login").style.display = "none";
	document.getElementById("registration").style.display = "block";
  }



  function showError(errorElement, errorMessage){
    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errorMessage;
  }

  function clearError(){
    let errors = document.querySelectorAll(".error");
    for(let error of errors){
      error.classList.remove("display-error");
    }
  }

  let form = document.forms["sign-in-form"];

  form.onsubmit = function(event){
    
    clearError(); 

    

    if(form.email.value === ""){
      showError("email-error","You have to enter your email");
      return false;
    }
    // if(form.srNo.value === ""){
    //   showError("srNo-error","Enter your valid Serial No.");
    //   return false;
    // }
    
    if(form.password.value === ""){
      showError("paserr","You have to enter your passwerd");
      return false;
    }
    


    event.preventDefault();
  }
  

 let forms = document.forms["sign-up-form"];

  forms.onsubmit = (event) => {
    
    clearError(); 

    if(forms.name1.value === ""){
      showError("name1-error","Please enter your First Name");
      return false;
    }
    // if(forms.name2.value === ""){
    //   showError("name2-error","Please enter your Last Name");
    //   return false;
    // }
    if(forms.email1.value === ""){
      showError("email1-error","You have to enter your email");
      return false;
    }

    if(forms.email2.value !== forms.email1.value){
      showError("email2-error","The enter same as first email");
      return false;
    }
    if(forms.sr.value === ""){
      showError("sr-error","You have to enter your email");
      return false;
    }
    if(forms.dob.value === ""){
      showError("dob-error","You have to enter your Date of birth");
      return false;
    }
    if(forms.mobile1.value === ""){
      showError("mobile1-error","You have to enter your mobile No.");
      return false;
    }
    if(forms.image.value == ""){
      showError("image-error","You have to upload your profile image.");
      return false;
    }
    if(forms.city.value === ""){
      showError("city-error","You have to enter your city");
      return false;
    }
    if(forms.state.value === ""){
      showError("state-error","Please enter your state");
      return false;
    }


    if(forms.psd.value === ""){
      showError("psd-error","You have to enter your strong passwerd");
      return false;
    }
    if(forms.psd.value !== forms.confirm.value){
      showError("confirm","Please enter same as password ");
      return false;
    }
    document.getElementsByClassName("error").style.display = "block"

    document.getElementsByClassName("register-error").innerHTML = "Hello"
    event.preventDefault();
  }
  







 
