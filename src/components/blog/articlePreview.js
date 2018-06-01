import React, {Component} from 'react';

import classes from '../../App.css';

class ArticlePreview extends Component {
  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string.replace("<p>", "").replace("[&hellip;]</p>", "...").replace("</p>", "...");
    }
  }

  render() {
    const excerpt = this.removeUnicode(this.props.post.excerpt);

    if (this.props.post) {
      return (
        <div>
          <a href={"/blog/" + this.props.post.ID}>
            {this.props.post.featured_image ? (
              <img
                className={classes.webpic}
                alt="article header"
                src={this.props.post.featured_image}
              />
            ) : (
              ""
            )}
            <h3>{this.props.post.title}</h3>
            <div className={classes.article}>{excerpt}</div>
          </a>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ArticlePreview;