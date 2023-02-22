const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
async function readformData(){
    let array = JSON.parse(localStorage.getItem("data")) ?? [];
    formData = {};
    formData['ProductName'] = document.getElementById('productName').value
    formData['ProductPrice'] = document.getElementById('productPrice').value
    formData['Image'] = await convertBase64(document.getElementById('Image').files[0]);
    formData['description'] = document.getElementById('description').value
    console.log(formData)
    array.push(formData)
    localStorage.setItem("data", JSON.stringify(array));
    displayData();
}
window.onload = displayData();
function displayData(){
    let obj = JSON.parse(localStorage.getItem("data"));
    let data = '';
    obj.forEach(product =>{
        data += ` <div class="card m-2" style="width: 18rem;">
        <img class="card-img-top" style="width:10rem; height:10rem; margin:auto;" src="${product.Image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title Card-text">${product.ProductName}</h5>
          <p class="card-text Card-text">${product.ProductPrice}</p>
          <p class="card-text Card-text">${product.description}</p>
          <button class="btn-success btn ">Delete</button>
          <button class="btn-danger btn">Update</button>
        </div>
      </div>`
    })
    document.getElementById('products-row').innerHTML = data;
}