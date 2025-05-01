async function addSelectedSkills() {
    const checkboxes = document.querySelectorAll('#skillsForm input[type="checkbox"]:checked');
    const selectedSkills = Array.from(checkboxes).map(cb => cb.value);

    if (selectedSkills.length === 0) {
        alert('Please select at least one skill.');
        return;
    }

    // Optional: Update skills visually
    const skillsSpan = document.getElementById('s-rg-1');
    const existingSkills = skillsSpan.textContent.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
    const updatedSkillsSet = new Set([...existingSkills, ...selectedSkills]);
    const finalSkillsArray = Array.from(updatedSkillsSet);
    skillsSpan.textContent = finalSkillsArray.join(', ');

    // Get jobseeker ID (from sessionStorage or a hidden input)
    const jobSeekerId = sessionStorage.getItem('jobseekerid'); // adjust if stored differently
    console.log('Jobseeker ID:', jobSeekerId); // Debugging line

    if (!jobSeekerId) {
        alert('Jobseeker ID not found.');
        return;
    }

    try {
        const response = await axios.post('http://localhost:5000/admin/addjobseeker/addskills', {
            jobseekerid: jobSeekerId,
            skillset: finalSkillsArray.join(',')
        });

        alert(response.data.message || 'Skills added successfully!');
    } catch (error) {
        console.error('Error adding skills:', error);
        alert(error.response?.data?.message || 'An error occurred while adding skills.');
    }

    // Hide the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addSkillsModal'));
    modal.hide();

    // Uncheck all checkboxes
    document.querySelectorAll('#skillsForm input[type="checkbox"]').forEach(cb => cb.checked = false);
}
