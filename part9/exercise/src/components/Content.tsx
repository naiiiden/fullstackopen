import Part from "./Part"

const Content = ({ name, exerciseCount, info }: { name: string, exerciseCount: number, info: string }) => {
    return (
        <div>
            <p>
                <strong>{name} {exerciseCount}</strong>
            </p>
            <Part info={info}/>
        </div>
    )
}

export default Content