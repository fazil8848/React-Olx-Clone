import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../Store/PostContexts';
import { FirebaseContext } from '../../Store/Context';

function View() {
  const [userDetails, setUserDetails] = useState(null);

  const { productDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const { userId } = productDetails;

    const fetchUserDetails = async () => {
      try {
        const userSnapshot = await firebase
          .firestore().collection('users').where('id', '==', userId).get();

        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data();
          setUserDetails(userData);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [firebase, productDetails]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={productDetails.imageURL}
          alt="Product"
        />
      </div>
      <div className="rightSection">

        <div className="productDetails">
          <p>&#x20B9; {productDetails.price} </p>
          <span>{productDetails.name}</span>
          <p>{productDetails.category}</p>
          <span>{productDetails.createdAt}</span>
        </div>

        {userDetails && ( // Conditionally render userDetails
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.userName}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
