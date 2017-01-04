import React from 'react'
import Link from 'next/prefetch'
import Application from '../components/application';
import 'isomorphic-fetch'

class MyPage extends React.Component {
  static async getInitialProps ({ query: { repo }}) {
    // eslint-disable-next-line no-undef
    console.log('others gip called');
    const res = await fetch(`https://api.github.com/repos/${repo}`)
    const json = await res.json()
    return { stars: json.stargazers_count, repo }
  }

  render () {
    return (
      <div>
        <p>{this.props.repo} has {this.props.stars} ⭐️</p>
        <Link href='/'>I bet next has more stars (?)</Link>
      </div>
    )
  }
}

export default Application(MyPage);
