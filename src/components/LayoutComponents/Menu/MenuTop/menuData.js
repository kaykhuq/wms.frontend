export default [
  {
    title: 'Dashboard Alpha',
    key: 'dashboardAlpha',
    url: '/dashboard/alpha',
    icon: 'icmn icmn-stack',
  },
  {
    title: 'Empty Page',
    key: 'empty',
    url: '/empty',
    icon: 'icmn icmn-books',
  },
  {
    title: 'Bán Hàng',
    key: 'sale',
    url: '/sale',
    icon: 'icmn icmn-calculator',
  },
  {
    title: 'Khách Hàng',
    key: 'customer',
    url: '/customer',
    icon: 'icmn icmn-user',
  },
  {
    title: 'Nhà Cung Cấp',
    key: 'supplier',
    url: '/supplier',
    icon: 'icmn icmn-truck',
  },
  {
    title: 'Sản Phẩm',
    key: 'product',
    url: '/product',
    icon: 'icmn icmn-joomla',
  },
  {
    title: 'Thông Báo Hàng Đến',
    key: 'arrival notification',
    url: '/arrival-notification',
    icon: 'icmn icmn-whatsapp',
  },
  {
    title: 'Yêu Cầu Nhập Hàng',
    key: 'import requirement',
    url: '/import-requirement',
    icon: 'icmn icmn-bullhorn',
  },
  {
    title: 'Nhập Xuất Hàng Hóa',
    key: 'export',
    url: '/export',
    icon: 'icmn icmn-loop',
  },
  {
    title: 'Phiếu Kiểm Kho',
    key: 'inventory records',
    url: '/inventory-records',
    icon: 'icmn icmn-clipboard',
  },
  {
    title: 'Nhà Kho',
    key: 'warehouse',
    url: '/warehouse',
    icon: 'icmn icmn-home2',
  },
  {
    title: 'Nhân Sự',
    key: 'employees',
    url: '/employees',
    icon: 'icmn icmn-user-check',
  },
  {
    title: 'Danh Mục',
    key: 'menu',
    url: '/menu',
    icon: 'icmn icmn-list2',
    sub: [
      {
        title: 'Danh Mục Sản Phẩm',
        key: 'product',
        url: '/menu/product',
        icon: 'icmn icmn-forward3',
        sub2: [
          {
            title: 'Danh Mục Chủ',
            key: 'first',
            url: '/menu/product/first',
            icon: '',
          },
          {
            title: 'Danh Mục Cha',
            key: 'second',
            url: '/menu/product/second',
            icon: '',
          },
          {
            title: 'Danh Mục',
            key: 'third',
            url: '/menu/product/third',
            icon: '',
          },
        ]
      },
      {
        title: 'Thuộc Tính Sản Phẩm',
        key: 'properties',
        url: '/menu/properties',
        icon: 'icmn icmn-forward3',
        sub2: [
          {
            title: 'Tạo Mới',
            key: 'new',
            url: '/menu/properties/new',
            icon: '',
          },
          {
            title: 'Đang Hoạt Động',
            key: 'active',
            url: '/menu/properties/active',
            icon: '',
          },
          {
            title: 'Không Hoạt Động',
            key: 'deactive',
            url: '/menu/properties/deactive',
            icon: '',
          },
        ]
      },
      {
        title: 'Quy Cách Đóng Gói',
        key: 'Process',
        url: '/menu/process',
        icon: 'icmn icmn-forward3',
        sub2: [
          {
            title: 'Loại Thùng',
            key: 'type',
            url: '/menu/process/new',
            icon: '',
          },
          {
            title: 'Kích Thước Thùng',
            key: 'size',
            url: '/menu/process/size',
            icon: '',
          },
          {
            title: 'Đơn Vị Tính',
            key: 'unit',
            url: '/menu/process/unit',
            icon: '',
          },
        ]
      },
    ]
  },
  {
    title: 'Cấu Hình',
    key: 'setting',
    url: '/setting',
    icon: 'icmn icmn-wrench',
  },
]
