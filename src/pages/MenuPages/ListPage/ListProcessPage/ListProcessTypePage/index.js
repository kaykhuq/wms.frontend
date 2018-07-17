import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListProcessType from './ListProcessType'

class ListProcessTypePage extends React.Component {
  static defaultProps = {
    pathName: 'List Process Type Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="List Process Type Page" />
        <ListProcessType />
      </Page>
    )
  }
}

export default ListProcessTypePage
