import React , {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
function ProduitSingle() {
    const {id, title} = useParams() ; // permet de récupérer la partie variable dans l'url :id/:title définis dans le router 
    const [produit, setProduit] = useState({});
    useEffect( function(){ // useEffect() => React => hook 
        // permet de remplir la variable produit via une requete ajax au moment du chargement du composant dans le DOM 
        fetch(`https://dummyjson.com/products/${id}`)
            .then(function(reponse){ return reponse.json()})
            .then(function( data ){ setProduit(data)})
    } , [])
  return (
    <div>
    { Object.keys(produit).length > 0 && <div className='container'>
    <section className="row mt-4">
        <figure className="col-4">
            <img src={produit.thumbnail} alt="" className='img-fluid mb-3' />
            <div className="row">
                {produit.images && produit.images.map(function(item, key){
                    return <div className='col-3'  key={key}>
                        <img src={item} alt=""  className='mw-100 border border-primary' />
                    </div>
                }) }
            </div>
        </figure>
        <div className="col-8">
            <h1>{produit.title}</h1>
            <p>{produit.description}</p>
            <p>{new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(produit.price)  }</p>
            <p>{produit.brand}</p>
        </div>
    </section>
</div>}
</div>
  )
}

export default ProduitSingle