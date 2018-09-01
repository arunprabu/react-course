import React from 'react';

class NewPost extends React.Component {
  state = {
    title: '',
    body: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const body =  this.getBody.value;
    const data = {
      id: new Date().getTime(),
      title,
      body
    }
    console.log(data); //Check the Data

    this.props.onAddPost(data);

    this.getTitle.value = '';
    this.getBody.value = '';
  };


  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Title"
              className="form-control"
              name="title"
              ref={(input)=>this.getTitle = input}
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Body"
              className="form-control"
              name="body"
              ref={(input)=>this.getBody = input}>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;