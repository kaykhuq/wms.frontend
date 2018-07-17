import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListPropertiesDeactive from './ListPropertiesDeactive';

class ListPropertiesDeactivePage extends React.Component {
  static defaultProps = {
    pathName: 'List Properties Deactive Page',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="List Properties Deactive Page" />
        <ListPropertiesDeactive />
      </Page>
    )
  }
}

export default ListPropertiesDeactivePage
