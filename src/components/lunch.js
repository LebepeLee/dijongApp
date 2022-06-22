export default function Lunch (props){

    
    return(
        <div className="food">
            {
                props.food.map(Item=>{
                    return <div key={Item}>
                     
                <img onClick={()=>props.display(Item.name,`./MyImages/${Item.name}.jpg`,Item.price )} src = {`./MyImages/${Item.name}.jpg`}  />
                    </div>
                })
            }
        </div>
    );
}
