import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import TrucksCreate from './TrucksCreate'
import './style.scss'

class EmployeesTrucksCreate extends React.Component {
  static defaultProps = {
    pathName: 'Staff Create Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Trucks Create Page" />
        <TrucksCreate />
      </Page>
    )
  }
}

export default EmployeesTrucksCreate
