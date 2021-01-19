function Project (title, description, image) {
    this.title = title;
    this.description = description;
    this.image = image;
}

// 
const projectdata = [
    new Project(
        "ELT Construction TX",
        "website for client",
        "img"
    ),
    new Project(
        "Overwatch League Directory (OWLD)",
        "directory",
        "img"
    ),
    new Project(
        "Off Your Chest",
        "description",
        "img"
    ),
]

export default projectdata;