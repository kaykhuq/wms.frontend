import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListPropertiesCreate from './ListPropertiesCreate'

class ListPropertiesCreatePage extends React.Component {
  static defaultProps = {
    pathName: 'List Properties Create Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="List Properties Create Page" />
        <ListPropertiesCreate />
      </Page>
    )
  }
}

export default ListPropertiesCreatePage
