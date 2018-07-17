import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import SupplierActive from './SupplierActive';

class SupplierActivePage extends React.Component {
  static defaultProps = {
    pathName: 'Supplier Active Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Supplier Active Page" />
        <SupplierActive />
      </Page>
    )
  }
}

export default SupplierActivePage
