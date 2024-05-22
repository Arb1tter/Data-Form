const submitFormButton = document.getElementById("submitForm");
submitFormButton.addEventListener("click", () => {
    let firstNameValue = document.getElementById("firstNameInput");
    let surnameValue = document.getElementById("surnameInput");
    let genderValue = document.querySelector('input[name="gender"]:checked');
    let birthdayValue = document.getElementById("birthday");
    let faveTeamValue = document.getElementById("faveTeam");
    let output = document.getElementById("output");
    const teamLogos = [
        {
            "name": "Arsenal",
            "src": "Team Photos/Arsenal.png",
            "alt": "Arsenal Logo"
        },
        {
            "name": "Barcelona",
            "src": "Team Photos/Barcelona.jpg",
            "alt": "Barcelona Logo"
        },
        {
            "name": "Bayern Munich",
            "src": "Team Photos/Bayern.png",
            "alt": "Bayern Logo"
        },
        {
            "name": "Borussia Dortmund",
            "src": "Team Photos/Borussia_Dortmunt.png",
            "alt": "Borussia Dortmund Logo"
        },
        {
            "name": "Chelsea",
            "src": "Team Photos/Chelsea.png",
            "alt": "Chelsea Logo"
        },
        {
            "name": "Liverpool",
            "src": "Team Photos/Liverpool.png",
            "alt": "Liverpool Logo"
        },
        {
            "name": "Manchester City",
            "src": "Team Photos/ManCity.png",
            "alt": "Manchester City Logo"
        },
        {
            "name": "Manchester United",
            "src": "Team Photos/ManUnited.png",
            "alt": "Manchester United Logo"
        },
        {
            "name": "PSG",
            "src": "Team Photos/PSG.png",
            "alt": "PSG Logo"
        },
        {
            "name": "Real Madrid",
            "src": "Team Photos/RealMadrid.png",
            "alt": "Real Madrid Logo"
        },
        {
            "name": "Resovia Rzeszow",
            "src": "Team Photos/Resovia.png",
            "alt": "Resovia Logo"
        },
        {
            "name": "Tottenham Hotspur",
            "src": "Team Photos/Spurs.png",
            "alt": "Spurs Logo"
        },
        {
            "name": "Stal Rzeszow",
            "src": "Team Photos/Stal.png",
            "alt": "Stal Logo"
        },
    ];

    if (!firstNameValue.value) {
        output.innerHTML = "No first name input!";
        return;
    }
    if (!surnameValue.value) {
        output.innerHTML = "No second name input!";
        return;
    }
    if (!genderValue) {
        output.innerHTML = "No gender input!";
        return;
    }
    if (!birthdayValue.value) {
        output.innerHTML = "No birthday input!";
        return;
    }
    if (!faveTeamValue.value) {
        output.innerHTML = "No favourite team input!";
        return;
    }

    const item = teamLogos.find((team) => team.name.toLowerCase() == faveTeamValue.value.toLowerCase());
    if (item) {
        let clubLogo = document.getElementById("clubLogo");
        let logoDiv = document.getElementById("logoDiv");
        clubLogo.src = item.src;
        clubLogo.alt = item.alt;
        logoDiv.style.display = "block";
    }
    else {
        logoDiv.style.display = "none";
    }


    const today = moment().format('YYYY-MM-DD');
    const years = moment().diff(birthdayValue.value, 'years');
    const adjustToday = birthdayValue.value.substring(5) === today.substring(5) ? 0 : 1;
    const nextBirthday = moment(birthdayValue.value).add(years + adjustToday, 'years');
    const daysUntilBirthday = nextBirthday.diff(today, 'days');
    let birthdayMessage = "";

    if (!moment().isSame(nextBirthday, "year")) {
        birthdayMessage = "Happy belated birthday!"
    }
    else {
        if (daysUntilBirthday == 0) {
            birthdayMessage = "Happy birthday!";
        }

        else {
            birthdayMessage = `Your birthday is in ${daysUntilBirthday} days`;
        }

    }

    const format1 = moment(birthdayValue.value).format('Do MMMM YYYY');

    output.innerHTML = `Hello ${firstNameValue.value} ${surnameValue.value}! You are a ${genderValue.value}. Your birthday is on ${format1}. ${birthdayMessage} Your favourite football team is ${faveTeamValue.value}. `;

});

