function indexPage() {
  let exploreContent = [
    {
      imgSrc: "edu1.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art, ",
    },
    {
      imgSrc: "edu1.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art, ",
    },
    {
      imgSrc: "edu1.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art, ",
    },
    {
      imgSrc: "edu1.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art, ",
    },
    {
      imgSrc: "edu1.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art, ",
    },
    {
      imgSrc: "edu1.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art,jghfjgfkhb jnj jniuj hotspot for art,jghfjgfkhb jnj jniuj",
    },
  ];

  let Explore_index = 2;
  Explore_index = document.getElementById("Explore_index");

  exploreContent.map(Explore_ind);

  function Explore_ind(item) {
    // console.log(item.imgTextH);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.classList.add("col-sm-6");
    div.classList.add("content");
    div.innerHTML = `
            <div class="image"> 
                <img src="/image/${item.imgSrc}">
            </div>
            <div class="img-text ">
                <h3>${item.imgTextH}</h3>
                <p class="description">${item.imgTextP}</p>

                <div class = "button " onclick ="readMore(this);return(false);">
                <button type="button " class="btn"> <a href="/">Read More</a> </button>
                </div>
            </div>
            `;

    Explore_index.prepend(div);
  }

  let eventContent = [
    {
      imgSrc: "edu1.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art, ",
    },
    {
      imgSrc: "edu3.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art, ",
    },
    {
      imgSrc: "edu1.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art, ",
    },
    {
      imgSrc: "edu4.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art, ",
    },
    {
      imgSrc: "edu2.webp",
      imgTextH: "This Is image content",
      imgTextP:
        "Washington is the epicenter of global politics. It’s also your hotspot for art, ",
    },
  ];

  let upcomingEvents = document.getElementById("upcomingEvents");

  eventContent.map(upcomingEvent);

  function upcomingEvent(item, index) {
    // console.log(index);
    // console.log(item.imgTextH);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.classList.add("col-sm-6");
    div.classList.add("content");
    div.innerHTML = `
            <div class="image"> 
                <img src="/image/${item.imgSrc}">
            </div>
            <div class="img-text">
                <h3>${item.imgTextH}</h3>
                <p class="description">${item.imgTextP}</p>
                <div class = "button " onclick ="readMore(this);return(false);">
                <button type="button " class="btn"> <a href="/">Read More</a> </button>
                </div>
            </div>
            `;
    upcomingEvents.prepend(div);
    if (index == 2) {
      // alert("k");
      return;
    }
  }

  buttonChecker();
}

function newsPage() {
  let newsContent = [
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
  ];

  let newsItem = document.getElementById("newsItem");

  newsContent.map(news);

  function news(item) {
    // console.log(item.imgTextH);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.classList.add("col-sm-6");
    div.classList.add("content");
    div.innerHTML = `
            <div class="image">
                <div class="date">
                    <h3>${item.day}</h3>
                    <p>${item.month}</p>
                </div> 
                <img src="/image/${item.imgSrc}">
            </div>
          <div class="img-text">
            <h3>${item.imgTextH}</h3>
            <p class="description">${item.imgTextP}</p>
            <div class = "button " onclick ="readMore(this);return(false);">
                <button type="button " class="btn"> <a href="/">Read More</a> </button>
                </div>
          </div>
          `;
    newsItem.prepend(div);
  }

  let ImpDate = [
    {
      imgSrc: "ath1.jpg",
      day: "12",
      month: "NOV 2023",
    },
    {
      imgSrc: "ath2.jpg",
      day: "12",
      month: "NOV 2023",
    },
    {
      imgSrc: "ath3.jpeg",
      day: "12",
      month: "NOV 2023",
    },
    {
      imgSrc: "ath4.jpeg",
      day: "12",
      month: "NOV 2023",
    },
    {
      imgSrc: "ath5.jpeg",
      day: "12",
      month: "NOV 2023",
    },
    {
      imgSrc: "ath6.jpeg",
      day: "12",
      month: "NOV 2023",
    },
  ];

  let ImpDates = document.getElementById("impDate");

  ImpDate.map(dates);

  function dates(item) {
    // console.log(item.imgTextH);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.classList.add("col-sm-6");
    div.classList.add("content");
    div.classList.add("image");
    div.innerHTML = `
            <div class="image">
            <div class="date">
                <h3>${item.day}</h3>
                <p>${item.month}</p>
            </div> 
            <img src="/image/sports/${item.imgSrc}">
            </div>`;
    ImpDates.prepend(div);
  }

  buttonChecker();
}

function athletPage() {
  let athletContent = [
    {
      imgSrc: "ath1.jpg",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "ath2.jpg",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "ath3.jpeg",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "ath4.jpeg",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "ath5.jpeg",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "ath6.jpeg",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
  ];

  let athlet1 = document.getElementById("athlet1");

  athletContent.map(athlet);

  function athlet(item) {
    // console.log(item.imgTextH);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.classList.add("col-sm-6");
    div.classList.add("content");
    div.innerHTML = `
                
                <div class="image">
                    <img src="/image/sports/${item.imgSrc}" alt="">
                </div>
              <div class="img-text">
                <h3>${item.imgTextH}</h3>
                <p class="description">${item.imgTextP}</p>
                <div class = "button " onclick ="readMore(this);return(false);">
                <button type="button " class="btn"> <a href="/">Read More</a> </button>
                </div>
              </div>
              `;
    athlet1.prepend(div);
  }

  let ImpDate = [
    {
      imgSrc: "ath1.jpg",
      day: "12",
      month: "NOV 2023",
    },
    {
      imgSrc: "ath2.jpg",
      day: "12",
      month: "NOV 2023",
    },
    {
      imgSrc: "ath3.jpeg",
      day: "12",
      month: "NOV 2023",
    },
    {
      imgSrc: "ath4.jpeg",
      day: "12",
      month: "NOV 2023",
    },
    {
      imgSrc: "ath5.jpeg",
      day: "12",
      month: "NOV 2023",
    },
    {
      imgSrc: "ath6.jpeg",
      day: "12",
      month: "NOV 2023",
    },
  ];

  let ImpDates = document.getElementById("impDate");

  ImpDate.map(dates);

  function dates(item) {
    // console.log(item.imgTextH);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.classList.add("col-sm-6");
    div.classList.add("content");
    div.classList.add("image");
    div.innerHTML = `
                <div class="image">
                <div class="date">
                    <h3>${item.day}</h3>
                    <p>${item.month}</p>
                </div> 
                <img src="/image/sports/${item.imgSrc}">
                </div>`;
    ImpDates.prepend(div);
  }

  buttonChecker();
}
function givePage() {
  let givContent = [
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "I am Aditya Kumar",
      imgTextP: "Explore our undergraduate programs for women.",
    },
  ];

  let newsItem = document.getElementById("newsItem");

  newsContent.map(news);

  function news(item) {
    // console.log(item.imgTextH);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.classList.add("col-sm-6");
    div.classList.add("content");
    div.innerHTML = `
    <div class="image">
    <div class="date">
        <h3>${item.day}</h3>
        <p>${item.month}</p>
    </div> 
    <img src="/image/${item.imgSrc}">
</div>
<div class="img-text">
<h3>${item.imgTextH}</h3>
<p class="description">${item.imgTextP}</p>
<div class = "button " onclick ="readMore(this);return(false);">
  <button type="button " class="btn"> <a href="/">Read More</a> </button>
</div>
</div>
                  `;
    newsItem.prepend(div);
  }
  buttonChecker();
}

function eventPage() {
  let eventContent = [
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
    {
      imgSrc: "edu1.webp",
      day: "12",
      month: "NOV 2023",
      imgTextH: "Diwali Holiday",
      imgTextP: "Explore our undergraduate programs for women.",
    },
  ];

  let newsItem = document.getElementById("newsItem");

  newsContent.map((item) => {
    // console.log(item.imgTextH);
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    div.classList.add("col-sm-6");
    div.classList.add("content");
    div.innerHTML = `
                        <div class="image">
                            <div class="date">
                                <h3>${item.day}</h3>
                                <p>${item.month}</p>
                            </div> 
                            <img src="/image/${item.imgSrc}">
                        </div>
                      <div class="img-text">
                        <h3>${item.imgTextH}</h3>
                        <p class="description">${item.imgTextP}</p>
                        <div class = "button " onclick ="readMore(this);return(false);">
                          <button type="button " class="btn"> <a href="/">Read More</a> </button>
                </div>
                      </div>
                      `;
    newsItem.prepend(div);
  });
  buttonChecker();
}

let noOfChar = 200;
let imgContent = document.querySelectorAll(".discription p ");

imgContent.forEach((content) => {
  //   console.log(content);
  //   console.log(content.textContent.length);
  if (content.textContent.length < noOfChar) {
    content.nextElementSibling.style.display = "none";
  } else {
    let displayText = content.textContent.slice(0, noOfChar);
    let moreText = content.textContent.slice(noOfChar);
    content.innerHTML = `${displayText}<span class = "dots">...</span><span class= "hide more">${moreText}</span>`;
  }
});
function buttonChecker() {
  let noOfChar = 20;
  let imgContent = document.querySelectorAll(".description");
  console.log(imgContent);

  imgContent.forEach((content) => {
    // console.log(content);
    // console.log(content.textContent.length);
    if (content.textContent.length < noOfChar) {
      content.nextElementSibling.style.display = "none";
    } else {
      let displayText = content.textContent.slice(0, noOfChar);
      let moreText = content.textContent.slice(noOfChar);
      content.innerHTML = `${displayText}<span class = "dots">...</span><span class= "hide more">${moreText}</span>`;
    }
  });
}
let src;
let tittle;
let description;

//
function readMore(btn) {
  
  window.location.href = "http://127.0.0.1:5500/home/popUp.html";
  let post = btn.parentElement;
  // console.log(post);
  src = post.previousElementSibling.querySelector('img').src;
  

  tittle = post.querySelector("h3").textContent;
  description = post.querySelector("p").innerHTML;
  console.log(description)
  let arr = [src,tittle, description];
  sessionStorage.setItem("array", JSON.stringify(arr));
}

function popUpPage() {
  jsarray = JSON.parse(sessionStorage.getItem("array"));
  document.getElementById("popup").innerHTML = `<div class="popupCont">
      
<img src="${jsarray[0]}" alt="">

<div class="img-text">
<h3>${jsarray[1]}</h1>
  <p>${jsarray[2]}</p>
    <div class = "button " onclick ="goBack(); return(false);">
      <button type="button " class="btn"> <a href="/">Close</a> </button>
    </div>
</div>

</div> `;
document.querySelector(".dots").classList.toggle("hide");
  document.querySelector(".more").classList.toggle("hide");
}

function goBack() {
  window.history.back();
}















