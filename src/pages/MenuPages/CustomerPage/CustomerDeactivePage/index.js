import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import CustomerDeactive from './CustomerDeactive'

class CustomerDeactivePage extends React.Component {
  static defaultProps = {
    pathName: 'Customer Deactive Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Customer Deactive Page" />
        <CustomerDeactive />
      </Page>
    )
  }
}

export default CustomerDeactivePage
