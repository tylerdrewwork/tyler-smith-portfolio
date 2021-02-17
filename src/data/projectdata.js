// import eltImage from '../images/projects/project-elt.png';
import eltImageFull from '../images/projects/project-elt-full.jpg';

function Project (title, description, image, link) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.link = link;
}

// 
const projectdata = [
    new Project(
        "ELT Construction TX",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum efficitur quam eu congue. Etiam blandit ante sed purus ornare ullamcorper. Nullam dignissim ante a faucibus accumsan. Fusce porta metus lorem. Aenean egestas facilisis ligula, non blandit libero tempor ac. Duis sit amet tempus est.",
        eltImageFull,
        "https://www.eltconstructiontx.com"
    ),
    new Project(
        "Overwatch League Directory (OWLD)",
        "Full Directory of all the current players in the Overwatch League",
        "img",
        "https://sakiskid.github.io/Overwatch-League-Player-Directory/",
    ),
    new Project(
        "Off Your Chest",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum efficitur quam eu congue. Etiam blandit ante sed purus ornare ullamcorper. Nullam dignissim ante a faucibus accumsan. Fusce porta metus lorem.",
        "img",
        "https://off-your-chest.herokuapp.com/",
    ),
]

export default projectdata;