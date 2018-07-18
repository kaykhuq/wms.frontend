import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import CustomerActive from './CustomerActive'

class CustomerActivePage extends React.Component {
  static defaultProps = {
    pathName: 'Customer Active Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Customer Active Page" />
        <CustomerActive />
      </Page>
    )
  }
}

export default CustomerActivePage
