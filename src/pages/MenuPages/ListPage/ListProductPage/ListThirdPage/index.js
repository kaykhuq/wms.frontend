import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListThird from './ListThird';

class ListThirdPage extends React.Component {
  static defaultProps = {
    pathName: 'List First Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="List First Page" />
        <ListThird />
      </Page>
    )
  }
}

export default ListThirdPage
