import Item from "./Item"

export default function ListItem ({ data }) {
    return (
        <div>
            {data && data.map((item, id) => (
                <Item key={id} item={item}/>
            ))}
        </div>
    )
}