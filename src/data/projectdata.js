import eltImage from '../images/projects/project-elt.png';
import offyourchest from '../images/projects/offyourchest.png';
import owld from '../images/projects/owld.svg';
import surveasy from '../images/projects/surveasy.png';
import payroll from '../images/projects/payroll.png';
import bigpicture from '../images/projects/bigpicture.png';
import weatherdashboard from '../images/projects/weatherdashboard.png';
import pbab from '../images/projects/pbab.png';
import backflipmaster from '../images/projects/backflipmaster.png';
import meat from '../images/projects/meat.png';

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
        "https://off-your-chest.herokuapp.com/",
    ),
    elt: new Project(
        "ELT Construction TX",
        "construction site built for a client",
        eltImage,
        "https://www.eltconstructiontx.com/",
    ),
    owld: new Project(
        "Overwatch League Directory",
        "(deprecated due to Blizzard closing the public API) view the current Overwatch League's stats, with up to date player and roster information",
        owld,
        "https://github.com/Sakiskid/Overwatch-League-Player-Directory"
    ),
    backflipMaster: new Project(
        "Backflip Master",
        "a physics-based adventure story where a stuntperson must uncover the mystery of a murdered family member by backflipping their way to vengence. learned a lot about trigonometry, active simulated ragdolls, and Unity 3D physics. I've learned such an enormous amount about architecture and good practices since then!",
        backflipmaster,
        "https://sakiskid.itch.io/backflip-master",
    ),
    pbab: new Project(
        "Physics-Based Arena Brawler",
        "physically-simulated 2D arena fighter where enemy ai and modularity were a big priority. the player can use anything in the arena to fight enemies - including the enemies themselves! this was my first big solo project outside of the 12 smaller games I made as part of a coding course. there was a lot I loved about making this, and I will revisit it in the future! Check out my devlog!",
        pbab,
        "https://sakiskid.itch.io/pbab/devlog/72914/pbab-update-6-the-big-one",
    ),
    meat: new Project(
        "MEAT",
        "IN DEVELOPMENT: Fast paced gorey-fps-roguelike where consuming life essence from arena enemies upgrades your physical mutations for a huge amount of bloody synergies",
        meat,
        ""
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