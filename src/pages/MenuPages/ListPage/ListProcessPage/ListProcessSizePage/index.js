import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListProcessSize from './ListProcessSize';

class ListProcessSizePage extends React.Component {
  static defaultProps = {
    pathName: 'List Process Size Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="List Process Size Page" />
        <ListProcessSize />
      </Page>
    )
  }
}

export default ListProcessSizePage
