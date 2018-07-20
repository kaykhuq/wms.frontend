import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import ListFirst from './ListFirst'
import { connect } from 'react-redux'
// import { actFetchUserRequest } from '../../../../../ducks/actions'
import callApi from '../../../../../ducks/apiCaller'

class ListFirstPage extends React.Component {
    static defaultProps = {
        pathName: 'List First Page',
        roles: ['agent', 'administrator'],
    }
    state = {
        users: []
    }
    componentDidMount() {
        // this.props.fetchAllUser();
        callApi('users', 'GET', null).then(res => {
            this.setState({
                users: res.data
            })
            // console.log(res.data);
        })
    }
    render() {
        const props = this.props;
        // const { users } = this.props;
        const { users } = this.state;
        // console.log(users);
        return (
            <Page {...props}>
                <Helmet title="List First Page" />
                <ListFirst users={users} />
            </Page>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        // users: state.users
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        // fetchAllUser: () => {
        //     dispatch(actFetchUserRequest());
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListFirstPage)
