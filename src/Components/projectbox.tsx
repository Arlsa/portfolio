import { Button, ClickImage } from '../main.tsx'

const ProjectBox = (props: {title: string, description: string, image: string, link: string}) => {
    return (
        <div className="w-2/5 p-4 shadow-md space-y-4 mb-8">
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <ClickImage src={props.image} alt={props.title} />
            <p>{props.description}</p>
            <Button url={props.link} text={"Learn more"} />
        </div>
    );
}

export default ProjectBox;