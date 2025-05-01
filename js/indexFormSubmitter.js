document.getElementById('f2').addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    const userEmail = document.getElementById('useremail2');
    const userPassword = document.getElementById('userpass2');
    const email = userEmail.value;
    const password = userPassword.value;

    try {
        const response = await axios.post('http://localhost:5000/users/loginbyemail', {
            email : email,
            password : password
        });

        console.log(response.data);

        const token = response.data.token; // Extract JWT token
        sessionStorage.setItem('authToken', token); // Store token for future use
        const responseJson = JSON.stringify(response.data, null, 2);
        sessionStorage.setItem('responseData', responseJson);
        sessionStorage.setItem('userType', 'user'); // Store user type
        window.location.href = '../html/userPage.html';
        
    } catch (error) {
        console.error(error.response?.data || error.message); 
        alert(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }
});


document.getElementById('f3').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const userContact = document.getElementById('usercontact3');
    const userPassword = document.getElementById('userpassc3');
    const contact = userContact.value;
    const password = userPassword.value;

    try {
        const response = await axios.post('http://localhost:5000/users/loginbycontact', {
            contact : contact,
            password : password
        });

        console.log(response.data);
        const token = response.data.token; // Extract JWT token
        sessionStorage.setItem('authToken', token); // Store token for future use
        const responseJson = JSON.stringify(response.data, null, 2);
        sessionStorage.setItem('responseData', responseJson);
        sessionStorage.setItem('userType', 'user'); // Store user type
        window.location.href = '../html/userPage.html';
        
    } catch (error) {
        console.error(error.response?.data || error.message); 
        alert(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }
});

document.getElementById('f5').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const id = document.getElementById('jobseekeremail5').value;
    const password = document.getElementById('jspass5').value;

    try {
        const response = await axios.post('http://localhost:5000/jobseekers/login', {
            id : id,
            password : password
        });
        console.log(response.data);
        const token = response.data.token; // Extract JWT token
        sessionStorage.setItem('authToken', token); // Store token for future use
        const responseJson = JSON.stringify(response.data, null, 2);
        sessionStorage.setItem('responseData', responseJson);
        sessionStorage.setItem('userType', 'jobseeker'); // Store user type
        // sessionStorage.setItem('jobseekerid', responseJson.); // Store jobseeker ID
        window.location.href = '../html/jobseekerPage.html';        
    } catch (error) {
        console.error(error.response?.data || error.message); 
        alert(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }
});