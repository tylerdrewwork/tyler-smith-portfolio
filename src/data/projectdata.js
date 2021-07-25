import eltImage from '../images/projects/project-elt.png';
import offYourChestImage from '../images/projects/sticky_note_white.svg';

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
        offYourChestImage,
    ),
    elt: new Project(
        "ELT Construction TX",
        "construction site built for a client ludum udaniu aiwudn iauwnd iuawn diu anw",
        eltImage,
    ),
    owld: new Project(
        "Overwatch League Directory",
        "descriptiondescription description description description description description descriptiondescription",
    ),
    backflipMaster: new Project(
        "Backflip Master",
        "description description description description description description description description description description description description description",
    ),
    pbab: new Project(
        "Physics-Based Arena Brawler",
        "dedescription description description description description descriptiondescription ",
    ),
    meat: new Project(
        "MEAT",
        "IN DEVELOPMENT: Fast paced gorey-fps-roguelike where consuming life essence from arena enemies upgrades your physical mutations for a huge amount of bloody synergies",
    ),
    surveasy: new Project(
        "Surveasy",
        "Create and publish surveys online for people to take, then anaylize the results. Planned features include iframe or webgl integration, more administration, and more configuration to include all types of polls."
    ),
    teamPayrollManager: new Project(
        "Team Payroll Manager",
        "Manage your employees and their salary with this useful CLI application."
    ),
    bigPicture: new Project(
        "Big Picture",
        "Figure out which positions in your field are in demand by stepping back and looking at the Big Picture. This web application scrapes popular job boards for metadata like titles, descriptions, and regions. It then analyzes the results and presents them in a graph for easier visualization.",
    ),
    weatherDashboard: new Project(
        "Weather Dashboard",
        "One of my first web applications. Add your city and enjoy a beautiful view while taking in local weather information.",
    ),

}

export default projectdata;