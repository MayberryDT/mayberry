import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Title from '../title/Title';
import Nav from '../nav/Nav';
import AboutMe from '../about-me/AboutMe';
import Projects from '../projects/Projects';
import Blog from '../blog/blog';
import Article from '../blog/article';
import ContactMe from '../contact-me/contactMe';
import Aux from '../../hoc/Auxiliary';

class Layout extends React.Component {
    constructor() {
        super();
    }
    render () {
        return(
            <Aux>
                <Router>
                    <div>
                        <Nav />
                        <Route
                            exact
                            path={process.env.PUBLIC_URL + "/blog/:id"}
                            component={Article}
                        />
                    </div>
                </Router>
                <Title />
                <AboutMe />
                <Blog />
                <Projects />
                <ContactMe />
            </Aux>
        )
    }
}

export default Layout;