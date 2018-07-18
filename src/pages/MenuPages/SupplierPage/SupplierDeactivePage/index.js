import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import SupplierDeactive from './SupplierDeactive'

class SupplierDeactivePage extends React.Component {
  static defaultProps = {
    pathName: 'Supplier Deactive Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Supplier Deactive Page" />
        <SupplierDeactive />
      </Page>
    )
  }
}

export default SupplierDeactivePage
