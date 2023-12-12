document.addEventListener("DOMContentLoaded", function () {
    var skillsData = [
        { category: "Professional Skills", skills: ["JavaScript", "HTML", "CSS", "Photoshop", "Microsoft Office", "SMM skills", "Cyber Security"] },
        { category: "Personal Skills", skills: ["English: intermediate", "Communication", "Punctual", "Leadership", "Analytical Skill", "Creative"] },
        
    ];

    var professionalSkillsList = document.getElementById("professional-skills-list");
    var personalSkillsList = document.getElementById("personal-skills-list");

   
    skillsData.forEach(function (category) {
        var targetList;
        if (category.category === "Professional Skills") {
            targetList = professionalSkillsList;
        } else if (category.category === "Personal Skills") {
            targetList = personalSkillsList;
        }

        if (targetList) {
            category.skills.forEach(function (skill) {
                var li = document.createElement("li");
                li.textContent = skill;
                targetList.appendChild(li);
            });
        }
    });
});

function submitForm() {
        // Get input values
        var name = document.getElementById('nameInput').value;
        var feedback = document.getElementById('feedbackInput').value;

        // Display confirmation message
        var confirmationMessage = 'Thank you, ' + name + '! Your feedback has been submitted.';

        // Show alert
        alert(confirmationMessage);
		document.getElementById('feedbackForm').reset();
    }
	
document.addEventListener("DOMContentLoaded", function () {
    // Simulate content loading delay (remove this in a real scenario)
    setTimeout(function () {
        document.querySelector(".preloader-outer").classList.add("preloader-hidden");
        setTimeout(function () {
            document.querySelector(".preloader-outer").style.display = "none";
        }, 500);
    }, 2000);
});


