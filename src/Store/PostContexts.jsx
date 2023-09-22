import { createContext, useState } from "react";


export const PostContext = createContext(null);

function Post({children}) {
    const [productDetails, setDetails] = useState()

    return(
        <PostContext.Provider value={{productDetails,setDetails}}>
            {children}
        </PostContext.Provider>
    )
    
}

export default Post;