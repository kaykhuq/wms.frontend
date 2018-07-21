import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import TrucksInactive from './TrucksInactive'

class EmployeesTrucksInactive extends React.Component {
  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Trucks Active Page" />
        <TrucksInactive />
      </Page>
    )
  }
}

export default EmployeesTrucksInactive
