import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import CustomerCreate from './CustomerCreate'

class CustomerCreatePage extends React.Component {
  static defaultProps = {
    pathName: 'Customer Create Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Customer Create Page" />
        <CustomerCreate />
      </Page>
    )
  }
}

export default CustomerCreatePage
