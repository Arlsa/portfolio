import { Button } from '../main.tsx'

const ProjectBox = (props: {title: string, description: string, image: string, link: string}) => {
    return (
        <div className="w-2/5 p-4 shadow-md space-y-4 mb-8">
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
            <p>{props.description}</p>
            <Button url={props.link} text={"Learn more"} />
        </div>
    );
}

export default ProjectBox;