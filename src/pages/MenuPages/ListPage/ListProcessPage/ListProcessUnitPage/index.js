import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListProcessUnit from './ListProcessUnit'

class ListProcessUnitPage extends React.Component {
  static defaultProps = {
    pathName: 'List Process Unit Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="List Process Unit Page" />
        <ListProcessUnit />
      </Page>
    )
  }
}

export default ListProcessUnitPage
