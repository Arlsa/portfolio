import { Button } from '../main.tsx'

const ProjectBox = (props: {title: string, description: string, image: string, link: string}) => {
    return (
        <div className="project-box">
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
            <p>{props.description}</p>
            <Button url={props.link} text={"Learn more"} />
        </div>
    );
}

export default ProjectBox;