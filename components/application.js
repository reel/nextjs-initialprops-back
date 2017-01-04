import React from 'react'

export default Page => class Application extends React.Component {
  constructor (props) {
    super(props)
    console.log('application level props', props);
  }
  static getInitialProps(ctx) {
    return Page.getInitialProps(ctx)
  }
  render () {
    return (
      <div>
        <Page {...this.props}/>
      </div>
    )
  }
}