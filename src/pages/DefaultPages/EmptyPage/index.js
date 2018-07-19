import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Empty from './Empty'

class EmptyPage extends React.Component {
  static defaultProps = {
    pathName: 'Empty Page',
    roles: ['agent', 'administrator'],
  }
  state = {
    abc: []
  }
  componentDidMount() {
    console.log('component did mount');
    this.setState({
      abc:123
    })
  }
  render() {
    console.log('render');
    const props = this.props
    const { abc } = this.state;
    console.log(abc);
    return (
      <Page {...props}>
        <Helmet title="Empty Page" />
        <Empty />
      </Page>
    )
  }
}

export default EmptyPage
