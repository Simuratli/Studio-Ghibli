import React from 'react'
import './MovieContainer.scss'
function MovieContainer(props) {
    return (
        <section className="mainSearchingSection">
        <div className="mainContainer">
            <div className="movies">
                {props.children}
            </div>
        </div>
    </section>

    )
}

export default MovieContainer
