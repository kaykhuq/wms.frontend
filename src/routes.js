import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedSwitch } from 'reactRouterConnected'
import Loadable from 'react-loadable'
import Page from 'components/LayoutComponents/Page'
import NotFoundPage from 'pages/DefaultPages/NotFoundPage'
import HomePage from 'pages/DefaultPages/HomePage'

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => null,
  })

const loadableRoutes = {
  // Default Pages
  '/login': {
    component: loadable(() => import('pages/DefaultPages/LoginPage')),
  },
  '/empty': {
    component: loadable(() => import('pages/DefaultPages/EmptyPage')),
  },
  
  '/forgotpassword': {
    component: loadable(() => import('pages/DefaultPages/ForgotPassword')),
  },
  // Dashboards
  '/dashboard/alpha': {
    component: loadable(() => import('pages/Dashboard/DashboardAlphaPage')),
  },

  // Menu Pages

  // Menu Khach Hang
  '/customer/create': {
    component: loadable(() => import('pages/MenuPages/CustomerPage/CustomerCreatePage')),
  },
  '/customer/active': {
    component: loadable(() => import('pages/MenuPages/CustomerPage/CustomerActivePage')),
  },
  '/customer/deactive': {
    component: loadable(() => import('pages/MenuPages/CustomerPage/CustomerDeactivePage')),
  },

  // Menu Nha Cung Cap
  '/supplier/create': {
    component: loadable(() => import('pages/MenuPages/SupplierPage/SupplierCreatePage')),
  },
  '/supplier/active': {
    component: loadable(() => import('pages/MenuPages/SupplierPage/SupplierActivePage')),
  },
  '/supplier/deactive': {
    component: loadable(() => import('pages/MenuPages/SupplierPage/SupplierDeactivePage')),
  },

  // Menu Danh Muc
  // Danh Mục Sản Phẩm
  '/list/products/first': {
    component: loadable(() => import('pages/MenuPages/ListPage/ListProductPage/ListFirstPage')),
  },
  '/list/products/second': {
    component: loadable(() => import('pages/MenuPages/ListPage/ListProductPage/ListSecondPage')),
  },
  '/list/products/third': {
    component: loadable(() => import('pages/MenuPages/ListPage/ListProductPage/ListThirdPage')),
  },

  // Thuộc Tính Sản Phẩm
  '/list/properties/create': {
    component: loadable(() =>
      import('pages/MenuPages/ListPage/ListPropertiesPage/ListPropertiesCreatePage'),
    ),
  },
  '/list/properties/active': {
    component: loadable(() =>
      import('pages/MenuPages/ListPage/ListPropertiesPage/ListPropertiesActivePage'),
    ),
  },
  '/list/properties/deactive': {
    component: loadable(() =>
      import('pages/MenuPages/ListPage/ListPropertiesPage/ListPropertiesDeactivePage'),
    ),
  },
  // Quy Cách Đóng Gói
  '/list/process/type': {
    component: loadable(() =>
      import('pages/MenuPages/ListPage/ListProcessPage/ListProcessTypePage'),
    ),
  },
  '/list/process/size': {
    component: loadable(() =>
      import('pages/MenuPages/ListPage/ListProcessPage/ListProcessSizePage'),
    ),
  },
  '/list/process/unit': {
    component: loadable(() =>
      import('pages/MenuPages/ListPage/ListProcessPage/ListProcessUnitPage'),
    ),
  },
  // Nhan su
  '/employees/staff/active': {
    component: loadable(() => import('pages/MenuPages/EmployeePage/EmployeesStaffActive')),
  },
  '/employees/staff/inactive': {
    component: loadable(() => import('pages/MenuPages/EmployeePage/EmployeesStaffInactive')),
  },
  '/employees/staff/accounts': {
    component: loadable(() => import('pages/MenuPages/EmployeePage/EmployeesStaffAccounts')),
  },
  '/employees/staff/roles': {
    component: loadable(() => import('pages/MenuPages/EmployeePage/EmployeesStaffRoles')),
  },
  '/employees/staff/create': {
    component: loadable(() => import('pages/MenuPages/EmployeePage/EmployeesStaffCreate')),
  },
  '/employees/department/office': {
    component: loadable(() => import('pages/MenuPages/EmployeePage/EmployeesDepartmentOffice')),
  },
  '/employees/department/position': {
    component: loadable(() => import('pages/MenuPages/EmployeePage/EmployeesDepartmentPosition')),
  },
  '/employees/trucks/active': {
    component: loadable(() => import('pages/MenuPages/EmployeePage/EmployeesTrucksActive')),
  },
  '/employees/trucks/inactive': {
    component: loadable(() => import('pages/MenuPages/EmployeePage/EmployeesTrucksInactive')),
  }, 
  '/employees/trucks/create': {
    component: loadable(() => import('pages/MenuPages/EmployeePage/EmployeesTrucksCreate')),
  },
}

class Routes extends React.Component {
  timeoutId = null

  componentDidMount() {
    this.timeoutId = setTimeout(
      () => Object.keys(loadableRoutes).forEach(path => loadableRoutes[path].component.preload()),
      5000, // load after 5 sec
    )
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    return (
      <ConnectedSwitch>
        <Route exact path="/" component={HomePage} />
        {Object.keys(loadableRoutes).map(path => {
          const { exact, ...props } = loadableRoutes[path]
          props.exact = exact === void 0 || exact || false // set true as default
          return <Route key={path} path={path} {...props} />
        })}
        <Route
          render={() => (
            <Page>
              <NotFoundPage />
            </Page>
          )}
        />
      </ConnectedSwitch>
    )
  }
}

export { loadableRoutes }
export default Routes
