import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import TrucksActive from './TrucksActive'

class EmployeesTrucksActive extends React.Component {
  

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Trucks Active Page" />
        <TrucksActive/>
      </Page>
    )
  }
}

export default EmployeesTrucksActive
