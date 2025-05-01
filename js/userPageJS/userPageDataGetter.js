const responseData = sessionStorage.getItem('responseData');
console.log(responseData);
if (responseData) {
    const responseObject = JSON.parse(responseData);
    const name = responseObject.finduser.name || 'Key not found'; 
    const contact = responseObject.finduser.contact || 'Key not found'; 
    const state = responseObject.finduser.state || 'Key not found'; 
    const district = responseObject.finduser.district || 'Key not found'; 
    const city = responseObject.finduser.cityname || 'Key not found'; 
    const pincode = responseObject.finduser.pincode || 'Key not found'; 
    document.getElementById('rg1').textContent = name;
    document.getElementById('rg2').textContent = name;
    document.getElementById('rg3').textContent = contact;
    document.getElementById('rg4').textContent = state;
    document.getElementById('rg5').textContent = district;
    document.getElementById('rg6').textContent = city;
    document.getElementById('rg7').textContent = pincode;
} else {
    document.getElementById('response').textContent = 'No response data found.';
}