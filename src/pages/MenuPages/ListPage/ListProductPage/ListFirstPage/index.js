import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListFirst from './ListFirst';

class ListFirstPage extends React.Component {
  static defaultProps = {
    pathName: 'List First Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="List First Page" />
        <ListFirst />
      </Page>
    )
  }
}

export default ListFirstPage
