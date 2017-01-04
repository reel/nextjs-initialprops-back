import React from 'react'
import Link from 'next/prefetch'
import Application from '../components/application';
import 'isomorphic-fetch'

class MyPage extends React.Component {
  static async getInitialProps () {
    console.log('index gip called');
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render () {
  const repos = ['facebook/react', 'feathersjs/feathers', 'developit/preact', 'infernojs/inferno']
    return (
      <div>
        <p>Next.js has {this.props.stars} ⭐️</p>
        {repos.map((repo, i) => {
          const name = repo.split('/')[1];
          return <li key={i}><Link href={`/other?repo=${repo}`} as={`/other/${repo}`}>{`How about ${name}?`}</Link></li>
        }

        )}
      </div>
    )
  }
}

export default Application(MyPage);
