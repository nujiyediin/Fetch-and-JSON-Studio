window.addEventListener("load", function () {
    console.log("window loaded");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {

        response.json().then(function (json) {
            let container = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                let activeClass = '';
                if (json[i].active === true) {
                    activeClass = "active";
                }
                container.innerHTML += `
                    <div id="${json[i].id}">
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li class = "${activeClass}">Active: ${json[i].active}</li>
                                    <li>Skills: ${json[i].skills.join(", ")} </li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[i].picture}">
                        </div>
                    </div>
                `;
            }
            

            let body = document.querySelector("body");
            body.innerHTML += `Astronaut count: ${json.length}`;

            

        });


    });

});

