

const Project = ({project}) => {
    const {picture, name, category, features, description, technologies, live, github} = project;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Project;