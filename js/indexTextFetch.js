fetch("../texts/buttons.json")
  .then((response) => response.json())
  .then((data) => {
    const b1 = data.b1;
    const b2 = data.b2;
    const b3 = data.b3;
    const b4 = data.b4;
    const b5 = data.b5; 
    const b6 = data.b6;
    const b7 = data.b7;

    const b1t = document.getElementById("lub");
    const b2t = document.getElementById("sub");
    const b3t = document.getElementById("luj");
    const b4t = document.getElementById("suj");
    const b5t = document.getElementById("lueb");
    const b6t = document.getElementById("lucb");

    b1t.innerText = b1;
    b2t.innerText = b2;
    b3t.innerText = b3;
    b4t.innerText = b4;
    b5t.innerText = b5;
    b6t.innerText = b6;

    const bst = [
      document.getElementById("f2s"), 
      document.getElementById("f3s"),
      document.getElementById("f4s"),   
      document.getElementById("f5s"),
      document.getElementById("f6s")
    ];

    bst.forEach((button, index) => {
      button.innerText = b7;
    });

  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

  fetch("../texts/commonTexts.json")
  .then((response) => response.json())
  .then((data) => {
    
    const d1 = data.aboutus;
    const d2 = data.welcomequote1;
    const d3 = data.welcomequote2;
    const d4 = data.welcomequote3;
    const d5 = data.welcomequote4;
    const d6 = data.mission1;
    const d7 = data.mission2;
    const d8 = data.mission3;
    const d9 = data.mission4;
    const d10 = data.ourmission;

    const wt1 = document.getElementById("welcome1");
    const wt2 = document.getElementById("welcome2");
    const wt3 = document.getElementById("welcome3");
    const wt4 = document.getElementById("welcome4");

    wt1.innerText = d2;
    wt2.innerText = d3;
    wt3.innerText = d4;
    wt4.innerText = d5;

    document.getElementById("a-u-h").innerText = d1;
    document.getElementById("a-m-h").innerText = d10;

    const mt1 = document.getElementById("mission1");
    const mt2 = document.getElementById("mission2");
    const mt3 = document.getElementById("mission3");
    const mt4 = document.getElementById("mission4");

    mt1.innerText = d6;
    mt2.innerText = d7;
    mt3.innerText = d8;
    mt4.innerText = d9;
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

  fetch("../texts/jobTitles.json")
  .then((response) => response.json())
  .then((data) => {
    const jobs = [data.job1, data.job2, data.job3, data.job4, data.job5, data.job6, data.job7, data.job8, data.job9];

    const job = document.getElementById("job");
    job.innerText = data.job;

    const jobElements = [
      document.getElementById("job1"),
      document.getElementById("job2"),
      document.getElementById("job3"),
      document.getElementById("job4"),
      document.getElementById("job5"),
      document.getElementById("job6"),
      document.getElementById("job7"),
      document.getElementById("job8"),
      document.getElementById("job9")
    ];

    jobElements.forEach((jobElement, index) => {
      if (index < jobs.length) {
        jobElement.innerText = jobs[index].title;
      }
    });

    const jobDescriptions = [
      document.getElementById("job1d1"),
      document.getElementById("job2d1"),
      document.getElementById("job3d1"),
      document.getElementById("job4d1"),
      document.getElementById("job5d1"),
      document.getElementById("job6d1"),
      document.getElementById("job7d1"),
      document.getElementById("job8d1"),
      document.getElementById("job9d1")
    ];

    jobDescriptions.forEach((jobDescription, index) => {
      if (index < jobs.length) {
        jobDescription.innerText = jobs[index].description1;
      }
    });

    const jobDescriptions2 = [
      document.getElementById("job1d2"),
      document.getElementById("job2d2"),
      document.getElementById("job3d2"),
      document.getElementById("job4d2"),
      document.getElementById("job5d2"),
      document.getElementById("job6d2"),
      document.getElementById("job7d2"),
      document.getElementById("job8d2"),
      document.getElementById("job9d2")
    ];

    jobDescriptions2.forEach((jobDescription, index) => {
      if (index < jobs.length) {
        jobDescription.innerText = jobs[index].description2;
      }
    });

  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });