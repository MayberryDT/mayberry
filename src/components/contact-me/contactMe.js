import React from 'react';

import classes from '../../App.css';

const contactMe = () => {
    return(
        <div className={classes.contactMe}>
            <div className={classes.wrap} id="contactMe">
                <div className={classes.colNarrow}>
                    <h2>Contact Me!</h2>
                </div>
                <div className={classes.colWide}>
                    <a href="mailto:mayberrydt@gmail.com"><i className="far fa-envelope"></i></a>
                    <a href="https://twitter.com/mayberrydt"><i className="fab fa-twitter-square"></i></a>
                    <a href="https://www.linkedin.com/in/mayberrydt"><i className="fab fa-linkedin"></i></a>
                    <a href="http://fb.me/mayberry.tyler"><i className="fab fa-facebook-square"></i></a>
                </div>
            </div>
        </div>
    )
}

export default contactMe;