export default function Item ({ item }) {
    console.log(item)
    return (
        <div>
           <img src={item.url}/>
           <h1>{item.title}</h1> 
           <p>{item.date}</p>
           <p>{item.explanation}</p>
        </div>
    )
}