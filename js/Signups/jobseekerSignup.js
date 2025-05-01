const distCodes = {
    "Uttar Pradesh" : {
        "Prayagraj" : "101"
    }
}

const cityCodes = {
    "101" : {
        "Prayagraj" : {
            "Prayagraj" : "1010",
            "Sadar" : "1011",
            "Koraon" : "1012",
            "Phulpur" : "1013",
            "Meja" : "1014",
            "Handia" : "1015",
            "MauAima" : "1016",
            "Bara" : "1017",
            "Dhoomanganj" : "1018",
            "Naini" : "1019"
        }
    }
}


document.getElementById('f4').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('username4').value;
    const contact = document.getElementById('usercontact4').value;
    const email = document.getElementById('useremail4').value;
    const password = document.getElementById('userpassc4').value;
    const state = document.getElementById('userstate4').value;
    const districtVal = document.getElementById('userdist4').value;
    const cityVal = document.getElementById('userct4').value;
    const addressLine = document.getElementById('useraddress4').value;
    const pincode = document.getElementById('userpn4').value;
    const councellor = document.getElementById('usercncl4').value;

    const district = distCodes[state][districtVal];
    const city = cityCodes[district][districtVal][cityVal];

    try{

        const response = await axios.post('http://localhost:5000/jobseekers/addjobseeker', {
            name : name,
            password : password,
            contact : contact,
            email : email,
            state : state,
            district : district,
            city : city,
            addressLine : addressLine,
            pincode : pincode,
            councellor : councellor
        });

        console.log(response.data);
        const responseJson = JSON.stringify(response.data, null, 2);
        sessionStorage.setItem('responseData', responseJson);
        window.location.href = 'userPage.html';

    } catch (err) {
        console.error(error.response?.data || error.message); 
        alert(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }
});