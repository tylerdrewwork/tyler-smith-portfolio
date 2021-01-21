import eltImage from '../images/projects/project-elt.png';

function Project (title, description, image) {
    this.title = title;
    this.description = description;
    this.image = image;
}

// 
const projectdata = [
    new Project(
        "ELT Construction TX",
        "Construction Website",
        eltImage,
    ),
    new Project(
        "Overwatch League Directory (OWLD)",
        "Full Directory of all the current players in the Overwatch League",
        "img"
    ),
    new Project(
        "Off Your Chest",
        "description",
        "img"
    ),
]

export default projectdata;