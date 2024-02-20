

function renderMyPortfolio() {
  
  let section2Element = document.querySelector(".section2");
  let arrMyPortfolio = JSON.parse(localStorage.getItem("list-product")); 
 
  for (let i = 0; i < arrMyPortfolio.length; i++) {
    section2Element.innerHTML += `
      <div class="Prj">
        <div class="pj">
          <img id="imgID"
            src="./${arrMyPortfolio[i].imgSrc}"
          />

          <div style="width: 150px">
            <font> ${arrMyPortfolio[i].projectName} </font>
            <p>
              <a href="#">${arrMyPortfolio[i].projectLink}
                <i class="fa-solid fa-arrow-up-right-from-square" style="color: #00bad2"></i>
              </a>
            </p>
          </div>
        </div>
        <div id="tag">
        ${Array.isArray(arrMyPortfolio[i].projectTags) ? arrMyPortfolio[i].projectTags.map(tag => `<span>${tag}</span>`).join('') : ''}
        </div>
      </div>
    `;
  }localStorage.setItem("list-product", JSON.stringify(arrMyPortfolio));
}
let arrMyPortfolio = [
  {
    imgSrc: "mongodb.svg",
    projectName: "Auto Drive Project",
    projectLink: "http://asdsda.com",
    projectTags: ["MONGODB", "REACT", "JQUERY"]
  },
  {
    imgSrc: "react.svg",
    projectName: "Auto Drive Project",
    projectLink: "http://asdsda.com",
    projectTags: ["REACT", "JAVASCRIPT"]
  },
  {
    imgSrc: "bootstrap.svg",
    projectName: "Auto Drive Project",
    projectLink: "http://asdsda.com",
    projectTags: ["BOOTSTRAP", "CSS", "JQUERY"]
  },
  {
    imgSrc: "Angular.svg",
    projectName: "Auto Drive Project",
    projectLink: "http://asdsda.com",
    projectTags: ["MONGODB", "REACT", "JAVASCRIPT"]
  },
  {
    imgSrc: "vue.svg",
    projectName: "Auto Drive Project",
    projectLink: "http://asdsda.com",
    projectTags: ["VUE", "JAVASCRIPT"]
  }
]; 

renderMyPortfolio();

  // let prjElements = document.getElementsByClassName("Prj");
  // let prjData = [];
  
  // for (let i = 0; i < prjElements.length; i++) {
  //   let prjElement = prjElements[i];
  
  //   const imgSrc = prjElement.querySelector(".pj img").getAttribute("src");
  //   const projectName = prjElement.querySelector(".pj font").textContent;
  //   const projectLink = prjElement.querySelector(".pj a").textContent;
  //   const tagElements = prjElement.querySelectorAll("#tag span");
  //   let projectTags = [];
  
  //   tagElements.forEach(function(tagElement) {
  //     projectTags.push(tagElement.textContent);
  //   });
  
  //   const prjDataItem = {
  //     imgSrc: imgSrc,
  //     projectName: projectName,
  //     projectLink: projectLink,
  //     projectTags: projectTags,
  //   };
  
  //   prjData.push(prjDataItem);
  // }
  

  
  // let prjData = JSON.parse(localStorage.getItem("list-product"));
  
  // for (let i = 0; i < prjData.length; i++) {
  //   let prjElement = prjElement[i];
  //   let imgSrc = prjData[i].imgSrc;
  //   let projectName = prjData[i].projectName;
  //   let projectLink = prjData[i].projectLink;
  //   let projectTags = prjData[i].projectTags;
  
  //   prjElement.querySelector(".pj img").setAttribute("src", imgSrc);
  //   prjElement.querySelector(".pj font").textContent = projectName;
  //   prjElement.querySelector(".pj a").textContent = projectLink;
  
  //   let tagElements = prjElement.querySelectorAll("#tag span");
  //   tagElements.forEach(function(tagElement) {
  //     tagElement.remove();
  //   });
  
  //   let tagContainer = prjElement.querySelector("#tag");
  //   projectTags.forEach(function(tag) {
  //     let spanElement = document.createElement("span");
  //     spanElement.textContent = tag;
  //     tagContainer.appendChild(spanElement);
  //   });
  // }
  
  // localStorage.setItem("list-product", JSON.stringify(prjData));