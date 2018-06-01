import React, {Component} from 'react';

import axios from 'axios';

import ArticlePreview from './articlePreview';
import classes from '../../App.css';

class Blog extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }
    componentDidMount() {
      axios
        .get(
          "https://public-api.wordpress.com/rest/v1/sites/mayberrydt.wordpress.com/posts"
        )
        .then(res => {
          this.setState({ posts: res.data.posts });
          console.log(this.state.posts);
        })
        .catch(error => console.log(error));
    }
  
    render() {
      return (
        <div className={classes.blog}>
            <div className={classes.wrap} id="blog">
              <div className={classes.colNarrow}>
                <h2>Blog</h2>
              </div>
              <div className={classes.colWide}>
                {this.state.posts.map(post => <ArticlePreview post={post} />)}
              </div>
            </div>
        </div>
      );
    }
}

export default Blog;