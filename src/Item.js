export default function Item ({ item }) {
    console.log(item)
    return (
        <div>
           <img src={item.image}/>
           <h1>{item.title}</h1> 
           <p>{item.date}</p>
           <p>{item.caption}</p>
        </div>
    )
}