







function readformData(){
    formData = {};
    formData['Productname'] = document.getElementById('productName').value
    formData['ProductPrice'] = document.getElementById('productprice').value
    formData['Image'] = document.getElementById('Image').value
    formData['description'] = document.getElementById('description').value

    return formData;
}