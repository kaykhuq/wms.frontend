import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import SupplierCreate from './SupplierCreate'

class SupplierCreatePage extends React.Component {
  static defaultProps = {
    pathName: 'Supplier Create Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Supplier Create Page" />
        <SupplierCreate />
      </Page>
    )
  }
}

export default SupplierCreatePage
