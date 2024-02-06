var executives = [
  {
    name: "TONY LIM",
    role: "President",
    imageURL: "/img/execs/tonyl.jpg",
  },
  {
    name: "ADWAIT MANE",
    role: "Vice President",
    imageURL: "/img/execs/adwait.jpg",
  },
  {
    name: "VARSHIL PATEL",
    role: "Treasurer",
    imageURL: "/img/execs/varshil.JPG",
  },
  {
    name: "JAMIE LEE",
    role: "Secretary",
    imageURL: "/img/execs/jamiel.jpeg",
  },
  {
    name: "ALEX LIANG",
    role: "Industry Event Lead",
    imageURL: "/img/execs/alexl.jpeg",
  },
  {
    name: "ALEX HOPE",
    role: "Social Event Lead",
    imageURL: "/img/execs/alexh.jpg",
  },
  {
    name: "VICTOR QIU",
    role: "Sponsorship Manager",
    imageURL: "/img/execs/victorq.jpg",
  },
  {
    name: "GRACE KERR",
    role: "Women's Representative",
    imageURL: "/img/execs/gracek.JPG",
  },
  {
    name: "ANDY ZHANG",
    role: "Marketing Manager",
    imageURL: "/img/execs/andyz.jpg",
  },
  {
    name: "ADITYA SOHANI",
    role: "Marketing Manager",
    imageURL: "/img/execs/aditya.jpg",
  },
  {
    name: "SUNNY SETIA",
    role: "Industry Event Co-ordinator",
    imageURL: "/img/execs/sunnys.jpeg",
  },
];

function mapExecutivesToHTML() {
  var pageContentDiv = document.querySelector(".page-content");
  pageContentDiv.className = "parent-container";

  var executivesContainer = document.createElement("div");
  executivesContainer.className = "executives-container";

  var activeInfoDiv = null;

  executives.forEach(function (executive) {
    var executiveDiv = document.createElement("div");
    executiveDiv.className = "executive";

    var img = document.createElement("img");
    img.src = executive.imageURL;

    var infoDiv = document.createElement("div");
    infoDiv.className = "info";

    var nameP = document.createElement("b");
    nameP.textContent = executive.name;
    infoDiv.appendChild(nameP);

    var roleP = document.createElement("p");
    roleP.textContent = executive.role;
    infoDiv.appendChild(roleP);

    executiveDiv.appendChild(img);
    executiveDiv.appendChild(infoDiv);

    // Add event listeners for touch devices
    executiveDiv.addEventListener("click", function () {
      toggleInfoVisibility(infoDiv);
    });

    executivesContainer.appendChild(executiveDiv);
  });

  pageContentDiv.appendChild(executivesContainer);
}

function toggleInfoVisibility(infoDiv) {
  if (activeInfoDiv) {
    activeInfoDiv.classList.remove("show-info");
  }
  infoDiv.classList.toggle("show-info");
  activeInfoDiv = infoDiv;
}

mapExecutivesToHTML();
