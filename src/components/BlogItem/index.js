import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class BlogItem extends Component {
  state = {}

  render() {
    const {eachBlog} = this.props
    const {id, title, author, avatarUrl, imageUrl, topic} = eachBlog
    return (
      <Link className="item-link" to={`/blogs/${id}`}>
        <li className="blog-item">
          <img src={imageUrl} alt={`item${id}`} className="image" />
          <div className="blog-item-details">
            <p className="blog-topic">{topic}</p>
            <h1 className="blog-title">{title}</h1>
            <div className="profile">
              <img
                src={avatarUrl}
                alt={`avatar${id}`}
                className="profile-pic"
              />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
