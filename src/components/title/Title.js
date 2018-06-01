import React from 'react';

import classes from '../../App.css';
import selfPicture from '../../assets/Suit-Self.jpg';

const title = (props) => {
    return(
        <div className={classes.title}>
            <div className={classes.wrap} id="title">
                    <img 
                        src={selfPicture} 
                        alt='profile'
                        className={[classes.colNarrow, classes.profileImg].join(' ')} />
                <div className={classes.colWide}>
                    <h1>Tyler Mayberry</h1>
                </div>
                {/* <h3>(work in progress)</h3> */}
            </div>
        </div>
    )
}

export default title;