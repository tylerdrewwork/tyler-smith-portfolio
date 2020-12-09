function Project (title, description, image) {
    this.title = title;
    this.description = description;
    this.image = image;
}

const projectdata = [
    new Project(
        "Overwatch League Directory (OWLD)",
        "directory"
    ),
    new Project(
        "Off Your Chest",
        "description",
        "img"
    )
]

export default projectdata;