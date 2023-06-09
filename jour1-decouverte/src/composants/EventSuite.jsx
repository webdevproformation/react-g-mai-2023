function EventSuite(){

    const fleurs = [
        { id : 1 , nom : "rose" , prix : 20 },
        { id : 2 , nom : "jasmin" , prix : 120 },
        { id : 3 , nom : "tulipe" , prix : 30 },
    ];

    // dans la vue, afficher pour chaque fleur 
    // <div>
    // <p> rose <button>prix</button> </p> => si je clique => alert(20)
    // <p> jasmin <button>prix</button> </p> => si je clique => alert(120)
    // <p> tulipe <button>prix</button> </p> => si je clique => alert(30)
    // </div>
    // cas pratique : réaliser le jsx ci dessus 
    return <div>
        { fleurs.map(function(item, key){
            return <p key={key} className="ps-5"> {item.nom}  
                <button onClick={function(){ alert(item.prix) }}>prix</button> 
            </p>
        }) }
    </div>
}

export default EventSuite ;