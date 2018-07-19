import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types'
export default class App extends React.Component {
  constructor(props) {
    super(props);
  };
  static childContextTypes = {
    router: PropTypes.object,
   
  }
  getChildContext () {
    return {
      router: this.props.router,
    }
  }
  render() {
    console.log(React);
    return (
      <div>
      { this.props.children }
      </div>
      );
  }
}