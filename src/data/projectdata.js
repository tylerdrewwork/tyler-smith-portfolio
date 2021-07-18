import eltImage from '../images/projects/project-elt.png';

function Project (title, description, image) {
    this.title = title;
    this.description = description;
    this.image = image;
}

const projectdata = {
    //  Web Projects
    web: [
        new Project(
            "ELT Construction TX",
            "construction site built for a client ludum udaniu aiwudn iauwnd iuawn diu anw",
            eltImage,
        ),
        new Project(
            "Overwatch League Directory (OWLD)",
            "full directory of all the current players in the Overwatch League",
            "img"
        ),
        new Project(
            "Off Your Chest",
            "completely anonymous online message wall to get otherwise stationary thoughts off of your chest",
            "img"
        ),
    ],
    // Game Dev Projects
    gamedev: [
        new Project(
            "Backflip Master",
            "lorem ipsum are tea lkan eain eflorem ipsum are tea lkan eain eflorem ipsum are tea lkan eain eflorem ipsum are tea lkan eain ef",
            "img",
        ),
        new Project(
            "Physics Based Arena Brawler (PBAB)",
            "lorem ipsum are tea lkan eain eflorem ipsum are tea lkan eain eflorem ipsum are tea lkan eain ef",
            "img",
        )
    ],
    offYourChest: new Project(
        "Off Your Chest",
        "completely anonymous online message wall to get otherwise stationary thoughts off of your chest",
        "img",
    ),
}

export default projectdata;