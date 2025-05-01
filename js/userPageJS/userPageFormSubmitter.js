document.getElementById('uf-1').addEventListener('submit', async (e) => {
    e.preventDefault();

    const selectedSkill = document.querySelector('input[name="skill"]:checked');
    if (!selectedSkill) {
        alert("Please select a skill.");
        return;
    }

    try {
        const responseData = sessionStorage.getItem('responseData');
        const responseObject = JSON.parse(responseData);
        const email = responseObject.finduser.email || 'Key not found'; 
        const response = await axios.post('http://localhost:5000/users/findjobseekers', {
            skill : selectedSkill.value,
            user : email
        });

        console.log(response.data);

        const responseJson = JSON.stringify(response.data, null, 2) || { "nothing" : "nothing" };
        console.log(responseJson);
        sessionStorage.setItem('responseJobSeekerData', responseJson);
        window.location.href = 'searchPage.html';
    } catch (error) {
        console.error(error.response?.data || error.message); 
        alert(`Error: ${error.response?.data?.message || 'An error occurred'}`);
    }

});