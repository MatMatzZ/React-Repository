import React from 'react'
// Stateless Functional Component

const Greet = ({name,heroName})=>{
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {/* {props.children} */}
        </div>
    );
}

export default Greet;