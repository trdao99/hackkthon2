const form = document.getElementById("input-form");
const addButton = document.getElementById("add-button");
const tableBody = document.getElementById("table-body");

let editIndex = -1;
let editExisting = false;

function renderProduct() {
  const listProduct = JSON.parse(localStorage.getItem("list-product"));
  tableBody.innerHTML = "";

  if (listProduct) {
    for (let i = 0; i < listProduct.length; i++) {
      const tr = document.createElement("tr");
      const product = listProduct[i];
      const imgElement = document.createElement("img");
      const projectTags = Array.isArray(product.projectTags)
        ? product.projectTags.join(", ")
        : product.projectTags;
      imgElement.src = product.imgSrc;
      imgElement.width = 100;
      imgElement.height = 100;
      tr.innerHTML += `
        <td>${i + 1}</td>
        <td>${product.projectName}</td>
        <td>${product.imgSrc}</td>
        <td>${product.projectLink}</td>
        <td>${projectTags}</td>
        <td>
          <button onclick="editProduct(${i})">Edit</button>
          <button onclick="deleteProduct(${i})">Delete</button>
        </td>
      `;
      tr.cells[2].appendChild(imgElement);
      tableBody.appendChild(tr);
    }
  }
}

renderProduct();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const projectName = document.getElementById("project_name").value;
  const imageUrl = document.getElementById("image_url").value;
  const projectLink = document.getElementById("project_link").value;
  const projectTags = document.getElementById("project_tag").value.split(",");

  const prjDataItem = {
    projectName: projectName,
    imgSrc: imageUrl,
    projectLink: projectLink,
    projectTags: projectTags,
  };

  let productList = JSON.parse(localStorage.getItem("list-product")) || [];

  if (editExisting) {
    productList[editIndex] = prjDataItem;
    editIndex = -1;
    editExisting = false;
    addButton.textContent = "+ New Project";
  } else {
    productList.push(prjDataItem);
  }

  document.getElementById("project_name").value = "";
  document.getElementById("image_url").value = "";
  document.getElementById("project_link").value = "";
  document.getElementById("project_tag").value = "";

  localStorage.setItem("list-product", JSON.stringify(productList));
  renderProduct();
});

function deleteProduct(index) {
  let productList = JSON.parse(localStorage.getItem("list-product"));

  productList.splice(index, 1);

  localStorage.setItem("list-product", JSON.stringify(productList));
  renderProduct();
}

function editProduct(index) {
  let productList = JSON.parse(localStorage.getItem("list-product"));

  document.getElementById("project_name").value = productList[index].projectName;
  document.getElementById("image_url").value = productList[index].imgSrc;
  document.getElementById("project_link").value = productList[index].projectLink;
  document.getElementById("project_tag").value = productList[index].projectTags.join(", ");

  editIndex = index;
  editExisting = true;

  addButton.textContent = "Update";
}