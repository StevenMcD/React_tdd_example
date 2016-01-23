import React, { Component, PropTypes } from 'react';

const propTypes = {
  onMount: PropTypes.func.isRequired,
  isActive: PropTypes.bool
};

class CommentList extends Component {
  componentDidMount() {
    this.props.onMount();
  };

  render(){
    return (
      <ul>
        <li> Commont One </li>
      </ul>
    );
  };
};

CommentList.propTypes = propTypes;
export default CommentList;
