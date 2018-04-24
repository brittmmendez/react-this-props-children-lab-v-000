import React  from 'react';
import PropTypes  from 'prop-types';

export default class Invitation extends React.Component{
  render(){
    return(
      <h1> Youve been invited!</h1>
      {this.props.children}
    );
  }
}
