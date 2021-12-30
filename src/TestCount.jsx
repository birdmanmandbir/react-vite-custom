import React from 'react'

class TestCount extends React.Component{
    render() {
        // 当count === false，div中内容不会被渲染；当count === 0，会渲染<div>0</div>
    const count = false;
    return (
        <div>
          { count && <h1>Messages: {count}</h1>}
        </div>
      );
    
  }
}

export default TestCount