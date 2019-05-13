import React, { Component } from "react";
import "./../MoviePage/style.css";

function Comment(props) {
    return (
        <div className="comment">
            <span className="on-comment" id="username-comment">Katie</span>
            <span className="on-comment" id="time-comment">5/10/2019</span>
            <span className="comment-content">I love this movie. Especially the part where that girl swallows a frog.</span>
        </div>
    )
}



class Comments extends Component {
    render() {
        let comments = (
            <React.Fragment>
            <div className="rate-this-movie">
                    <h2 id="rate-this">Comments</h2>
                </div>
            <div className="comments-here">
                <Comment />
            </div>
            
            <div className="write-comment">
            
            <textarea className="write-content" rows="4" cols="50" placeholder="write your comment here..."></textarea>
            <br></br>
            <button className="post-comment" type="submit">Post</button>
            </div>
            
        </React.Fragment>
        );

        if (! this.props.isComment) {
            comments = null;
        }
        return (
            <div>
                {comments}
            </div>
        )
    }
}

export default Comments;