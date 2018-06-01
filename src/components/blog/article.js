import React, {Component} from 'react';
import axios from 'axios';

import classes from '../../App.css';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        };
    }

  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string.replace("<p>", "").replace("[&hellip;]</p>", "...").replace("</p>", "...");
    }
  }

  componentDidMount() {
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1/sites/mayberrydt.wordpress.com/posts" +
            this.props.match.params.id
      )
      .then(res => {
        this.setState({ posts: res.data });
        const container = document.querySelector(".content");
        let scr = container.querySelectorAll("script");
        scr.forEach(node => {
            let parent = node.parentElement;
            let d = document.createElement("script");
            d.async = node.async;
            d.src = node.src;
            d.type = "text/javascript";
            parent.insertBefore(d, node);
            parent.removeChild(node);
            d.onload = console.log(d);
        });
      })
      .catch(error => console.log(error));
  }

  parseOutScripts(content) {}

  render() {

    if (this.props.post) {
      return (
        <div className={classes.blog}>
            <div className={classes.wrap}>
                {this.props.post.featured_image ? (
                    <img
                        className={classes.webpic}
                        alt="article header"
                        src={this.props.post.featured_image}
                    />
                ) : (
                ""
                )}
                <h1>{this.props.post.title}</h1>
                <div 
                    className={classes.article}
                    dangerouslySetInnerHTML={{__html:this.state.post.content}}
                />
            </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Article;