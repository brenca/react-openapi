import React from 'react'
import Path from './Path'
import TOC from './TOC'
import './OpenAPI.css'

export default React.createClass({
  render() {
    if (!this.props.info) {
      return <div>Loading...</div>
    }
    const paths = Object.keys(this.props.paths).map((path) => {
      return (
        <Path
          key={path}
          path={path}
          methods={this.props.paths[path]}
        />
      )
    })

    return (
      <div>
        <h2 style={{marginBottom: 24}}>{this.props.info.title}</h2>
        <div style={{marginTop: 24, marginBottom: 24}}>
          {this.props.info.description}
        </div>
        {Object.keys(this.props.paths).length > 1 &&
          <div style={{marginTop: 24, marginBottom: 24}}>
            <TOC {...this.props} />
          </div>
        }
        <div>
          {paths}
        </div>
      </div>
    )
  }
})