import eltImage from '../images/projects/project-elt.png';
import offyourchest from '../images/projects/offyourchest.png';
import owld from '../images/projects/owld.svg';
import surveasy from '../images/projects/surveasy.png';
import payroll from '../images/projects/payroll.png';
import bigpicture from '../images/projects/bigpicture.png';
import weatherdashboard from '../images/projects/weatherdashboard.png';

function Project (title, description, image, link) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
}

const projectdata = {
    offYourChest: new Project(
        "Off Your Chest",
        "completely anonymous online message wall to get otherwise stationary thoughts off of your chest",
        offyourchest,
    ),
    elt: new Project(
        "ELT Construction TX",
        "construction site built for a client ludum udaniu aiwudn iauwnd iuawn diu anw",
        eltImage,
    ),
    owld: new Project(
        "Overwatch League Directory",
        "descriptiondescription description description description description description descriptiondescription",
        owld,
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
        "Create and publish surveys online for people to take, then anaylize the results. Planned features include iframe or webgl integration, more administration, and more configuration to include all types of polls.",
        surveasy,
    ),
    teamPayrollManager: new Project(
        "Team Payroll Manager",
        "Manage your employees and their salary with this useful CLI application.",
        payroll,
    ),
    bigPicture: new Project(
        "Big Picture",
        "Figure out which positions in your field are in demand by stepping back and looking at the Big Picture. This web application scrapes popular job boards for metadata like titles, descriptions, and regions. It then analyzes the results and presents them in a graph for easier visualization.",
        bigpicture,

    ),
    weatherDashboard: new Project(
        "Weather Dashboard",
        "One of my first web applications. Add your city and enjoy a beautiful view while taking in local weather information.",
        weatherdashboard,
    ),

}

export default projectdata;