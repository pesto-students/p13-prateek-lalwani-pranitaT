import React from 'react';

//  log a message to the console each time the BookList component is rendered
const withLogger = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLogger;
