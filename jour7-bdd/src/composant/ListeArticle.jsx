import React , {useState, useEffect} from 'react'
import "./ListeArticle.css"

function ListeArticle({updateListe , setUpdateListe}) {
    const [posts , setPosts] = useState([])
    const [id, setId] = useState(0); 
    useEffect( function(){
        //console.log("exécution fetch")
        fetch("http://localhost:4200/articles")
        .then(function(reponse){ return reponse.json()})
            .then(function(data){
                setPosts(data)
            })
        
    } , [updateListe])

    function supprimer(id){
        const verif = confirm("être vous sur de vouloir supprimer l'article num " + id);
        if(!verif) return ;
        const option = {
            method: "DELETE"
        }
        fetch(`http://localhost:4200/articles/${id}` , option)
            .then(function(reponse){ return reponse.json() })
            .then(function(){ 
                setUpdateListe(function(update){ return !update})
            })
    }

    function modifier(id){
        setId(id);
        setUpdateListe(function(update){ return !update})
    }

    function changeData(e , id){
        const clonePosts = [...posts];
        const postAModifier = clonePosts.find(function(item){
            return item.id === id
        })
        const index = clonePosts.indexOf(postAModifier)
        clonePosts[index][e.target.name] = e.target.value ;
        // console.log( clonePosts); 
        setPosts(clonePosts);
    }

    function submit(e){
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        const option = {
            method: "PUT" , 
            body : JSON.stringify(data),
            headers : {
                "content-type" : "application/json"
            }
        }
        fetch(`http://localhost:4200/articles/${id}` , option)
            .then(function(reponse){ return reponse.json() })
            .then(function(){ 
                setUpdateListe(function(update){ return !update})
                setId(0);
            })
    }

  return (
    <div className='articles'>
        <h2>ListeArticle</h2>
        { posts.map(function(item, key){
           return (
            <>{ id === item.id 
            ? 
                <form onSubmit={submit}> 
                    <input type="hidden" name="id" value={item.id} />
                    <input type='text' name="titre" onChange={function(e){
                        changeData(e, id)
                    }} value={item.titre} />
                    <textarea name="body" rows="3" onChange={function(e){
                        changeData(e, id)}} value={item.body} ></textarea>
                    <input type="submit" value="ok"/>
                </form> 
            : 
            <article key={key}>
                <h2>{item.titre}</h2>
                <p>{item.body}</p>
                <button className='me-3' onClick={ function(){ modifier(item.id) }}>modifier</button>
                <button onClick={function(){  supprimer(item.id)  }}>supprimer</button>
            </article>
            }</>
            
           )
            
        }) }
    </div>
  )
}

export default ListeArticle