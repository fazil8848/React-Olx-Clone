import React, { useState } from 'react';
import { useEffect, useContext } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContexts';
import { useHistory } from 'react-router-dom'

function Posts() {

  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const { setDetails } = useContext(PostContext)
  const history = useHistory();


  useEffect(() => {
    firebase.firestore().collection('products').get().then((snap) => {
      const allPosts = snap.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        }
      })
      console.log(allPosts);
      setProducts(allPosts);
    })
  })


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {

            products.map(product => {

              return (
                <div className="card"
                  onClick={ ()=>{
                    setDetails (product);
                    history.push('/view')
                  } }>
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.imageURL} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              )
            })

          }

        </div>
      </div>
  
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          
          {

            products.map(product=>{

             return ( 

          <div className="card"
          onClick={ ()=>{
            setDetails (product);
            history.push('/view')
          } }>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.imageURL} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>

              )
          })

          }

        </div>
      </div>
    </div>
  );
}

export default Posts;
