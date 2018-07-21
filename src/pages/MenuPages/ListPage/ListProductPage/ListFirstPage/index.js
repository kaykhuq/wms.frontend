import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListFirst from './ListFirst'
import { connect } from 'react-redux'
import { getUser } from 'ducks/userList'

const mapStateToProps = (state) => ({
    users: state.app.users
})
@connect(mapStateToProps)
class ListFirstPage extends React.Component {
    static defaultProps = {
        pathName: 'List First Page',
        roles: ['agent', 'administrator'],
    }
    componentDidMount() {
        const { dispatch } = this.props        
        dispatch(getUser());
    }
    render() {
        const props = this.props;
        const { users } = this.props;
        return (
            <Page {...props}>
                <Helmet title="List First Page" />
                <ListFirst users={users} />
            </Page>
        )
    }
}
export default ListFirstPage
