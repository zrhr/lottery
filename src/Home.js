import React from 'react';

export default function Home (props){
    return(
        <div>
        {props.session.isLoggedIn ? (
            <div>
                <p>You are logged in</p>
            </div>
        ):  <div>
                <p>You are not logged in</p>
            </div>}    
         </div>
    )
}