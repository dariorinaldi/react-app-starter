import React from 'react';

class AppErrorBoundary extends React.Component {
    state = { hasError: false };
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      //logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default AppErrorBoundary;