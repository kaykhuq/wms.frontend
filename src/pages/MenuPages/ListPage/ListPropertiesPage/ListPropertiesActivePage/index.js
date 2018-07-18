import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListPropertiesActive from './ListPropertiesActive'

class ListPropertiesActivePage extends React.Component {
  static defaultProps = {
    pathName: 'List Properties Active Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="List Properties Active Page" />
        <ListPropertiesActive />
      </Page>
    )
  }
}

export default ListPropertiesActivePage
