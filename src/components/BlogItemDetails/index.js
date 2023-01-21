import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    console.log(data)

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-details">
        <h1 className="blog-details-title">{title}</h1>
        <div className="blog-details-profile">
          <img src={avatarUrl} alt="" className="detail-profile-pic" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="detail-img" />
        <p className="detail-content">{content}/</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-details-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
