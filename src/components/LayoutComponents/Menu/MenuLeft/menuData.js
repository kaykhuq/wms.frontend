export default [
  {
    divider: true,
  },
  {
    title: 'Dashboard Alpha',
    key: 'dashboardAlpha',
    url: '/dashboard/alpha',
    icon: 'icmn icmn-stack',
  },
  {
    divider: true,
  },
  {
    title: 'Empty Page',
    key: 'empty',
    url: '/empty',
    icon: 'icmn icmn-books',
  },
  {
    divider: true,
  },
  {
    title: 'Bán Hàng',
    key: 'sale',
    url: '/sale',
    icon: 'icmn icmn-calculator',
    children: [
      {
        title: 'Tạo Đơn Hàng',
        key: 'saleCreate',
        url: '/sale/create',
        icon: '',
      },
      {
        title: 'Chờ Duyệt',
        key: 'salePending',
        url: '/sale/pending',
        icon: '',
      },
      {
        title: 'Đã Duyệt',
        key: 'saleAccept',
        url: '/sale/accept',
        icon: '',
      },
      {
        title: 'Hoàn Thành',
        key: 'saleComplete',
        url: '/sale/complete',
        icon: '',
      },
      {
        title: 'Lưu Tạm',
        key: 'saleTemp',
        url: '/sale/temp',
        icon: '',
      },
      {
        title: 'Đã Hủy',
        key: 'saleCancel',
        url: '/sale/cancel',
        icon: '',
      }, 
    ]
  },
  {
    title: 'Khách Hàng',
    key: 'customer',
    url: '/customer',
    icon: 'icmn icmn-user',
    children: [
      {
        title: 'Tạo Mới',
        key: 'customerCreate',
        url: '/customer/create',
        icon: '',
      },
      {
        title: 'Đang Hoạt Động',
        key: 'customerActive',
        url: '/customer/active',
        icon: '',
      },
      {
        title: 'Không Hoạt Động',
        key: 'customerDeactive',
        url: '/customer/deactive',
        icon: '',
      },
    ]
  },
  {
    title: 'Nhà Cung Cấp',
    key: 'supplier',
    url: '/supplier',
    icon: 'icmn icmn-truck',
    children: [
      {
        title: 'Tạo Mới',
        key: 'supplierCreate',
        url: '/supplier/create',
        icon: '',
      },
      {
        title: 'Đang Hoạt Động',
        key: 'supplierActive',
        url: '/supplier/active',
        icon: '',
      },
      {
        title: 'Không Hoạt Động',
        key: 'supplierDeactive',
        url: '/supplier/deactive',
        icon: '',
      },
    ]
  },
  {
    title: 'Sản Phẩm',
    key: 'product',
    url: '/product',
    icon: 'icmn icmn-joomla',
    children: [
      {
        title: 'Tạo Sản Phẩm',
        key: 'productCreate',
        url: '/product/create',
        icon: '',
      },
      {
        title: 'Đang Hoạt Động',
        key: 'productActive',
        url: '/product/active',
        icon: '',
      },
      {
        title: 'Không Hoạt Động',
        key: 'productDeactive',
        url: '/product/deactive',
        icon: '',
      },
      {
        title: 'Lưu Tạm',
        key: 'productTemp',
        url: '/product/temp',
        icon: '',
      },
      {
        title: 'Lô',
        key: 'productBlock',
        url: '/product/block',
        icon: '',
      },
      {
        title: 'Thùng',
        key: 'productBox',
        url: '/product/box',
        icon: '',
      },
      {
        title: 'Nhãn Hiệu',
        key: 'productBrand',
        url: '/product/brand',
        icon: '',
        children: [
          {
            title: 'Tạo Hiệu Mới',
            key: 'productBrandCreate',
            url: '/product/brand/create',
            icon: '',
          },
          {
            title: 'Danh Sách',
            key: 'productBrandList',
            url: '/product/brand/list',
            icon: '',
          },
        ]
      },
    ]
  },
  {
    title: 'Thông Báo Hàng Đến',
    key: 'arrivalNotification',
    url: '/arrival-notification',
    icon: 'icmn icmn-whatsapp',
    children: [
      {
        title: 'Tạo Mới',
        key: 'arrivalNotificationCreate',
        url: '/arrival-notification/create',
        icon: '',
      },
      {
        title: 'Đang Mở',
        key: 'arrivalNotificationOpen',
        url: '/arrival-notification/open',
        icon: '',
      },
      {
        title: 'Đã Đóng',
        key: 'arrivalNotificationClose',
        url: '/arrival-notification/close',
        icon: '',
      },
      {
        title: 'Lưu Tạm',
        key: 'arrivalNotificationTemp',
        url: '/arrival-notification/temp',
        icon: '',
      },
    ]
  },
  {
    title: 'Yêu Cầu Nhập Hàng',
    key: 'importRequirement',
    url: '/import-requirement',
    icon: 'icmn icmn-bullhorn',
    children: [
      {
        title: 'Tạo Mới',
        key: 'importRequirementCreate',
        url: '/import-requirement/create',
        icon: '',
      },
      {
        title: 'Đang Mở',
        key: 'importRequirementOpen',
        url: '/import-requirement/open',
        icon: '',
      },
      {
        title: 'Đã Duyệt',
        key: 'importRequirementAccept',
        url: '/import-requirement/accept',
        icon: '',
      },
      {
        title: 'Hoàn Tất',
        key: 'importRequirementComplete',
        url: '/import-requirement/complete',
        icon: '',
      },
      {
        title: 'Đã Hủy',
        key: 'importRequirementCancel',
        url: '/import-requirement/cancel',
        icon: '',
      },
      {
        title: 'Lưu Tạm',
        key: 'importRequirementTemp',
        url: '/import-requirement/temp',
        icon: '',
      },
    ]
  },
  {
    title: 'Nhập Xuất Hàng Hóa',
    key: 'export',
    url: '/export',
    icon: 'icmn icmn-loop',
    children: [
      {
        title: 'Phiếu Nhập Kho',
        key: 'importRecord',
        url: '/export/import-record',
        icon: '',
        children: [
          {
            title: 'Tạo Mới',
            key: 'importRecordCreate',
            url: '/export/import-record/create',
            icon: '',
          },
          {
            title: 'Đang Mở',
            key: 'importRecordOpen',
            url: '/export/import-record/open',
            icon: '',
          },
          {
            title: 'Đã Hoàn Thành',
            key: 'importRecordCompleted',
            url: '/export/import-record/completed',
            icon: '',
          },
          {
            title: 'Lưu Tạm',
            key: 'importRecordTemp',
            url: '/export/import-record/temp',
            icon: '',
          },
        ]
      },
      {
        title: 'Phiếu Xuất Kho',
        key: 'exportRecord',
        url: '/export/export-record',
        icon: '',
        children: [
          {
            title: 'Tạo Mới',
            key: 'exportRecordCreate',
            url: '/export/export-record/create',
            icon: '',
          },
          {
            title: 'Đang Mở',
            key: 'exportRecordOpen',
            url: '/export/export-record/open',
            icon: '',
          },
          {
            title: 'Đã Hoàn Thành',
            key: 'exportRecordCompleted',
            url: '/export/export-record/completed',
            icon: '',
          },
          {
            title: 'Lưu Tạm',
            key: 'exportRecordTemp',
            url: '/export/export-record/temp',
            icon: '',
          },
        ]
      },
      {
        title: 'Hướng Dẫn Lấy Hàng',
        key: 'getProductsGuide',
        url: '/export/get-guide',
        icon: '',
        children: [
          {
            title: 'Tạo Mới',
            key: 'getProductsGuideCreate',
            url: '/export/get-guide/create',
            icon: '',
          },
          {
            title: 'Đang Mở',
            key: 'getProductsGuideOpen',
            url: '/export/get-guide/open',
            icon: '',
          },
          {
            title: 'Đã Hoàn Thành',
            key: 'getProductsGuideComplete',
            url: '/export/get-guide/complete',
            icon: '',
          },
        ]
      },
      {
        title: 'Hướng Dẫn Đưa Hàng Vào Kho',
        key: 'putProductsGuide',
        url: '/export/put-guide',
        icon: '',
        children: [
          {
            title: 'Tạo Mới',
            key: 'putProductsGuideCreate',
            url: '/export/put-guide/create',
            icon: '',
          },
          {
            title: 'Đang Mở',
            key: 'putProductsGuideOpen',
            url: '/export/put-guide/open',
            icon: '',
          },
          {
            title: 'Đã Hoàn Thành',
            key: 'putProductsGuideComplete',
            url: '/export/put-guide/complete',
            icon: '',
          },
        ]
      },
      {
        title: 'Chuyển Kho Nội Bộ',
        key: 'changeLocalStore',
        url: '/export/change-store',
        icon: '',
        children: [
          {
            title: 'Tạo Mới',
            key: 'changeStoreCreate',
            url: '/export/change-store/create',
            icon: '',
          },
          {
            title: 'Đang Mở',
            key: 'changeStoreOpen',
            url: '/export/change-store/open',
            icon: '',
          },
          {
            title: 'Đã Hoàn Thành',
            key: 'changeStoreCompleted',
            url: '/export/change-store/completed',
            icon: '',
          },
          {
            title: 'Lưu Tạm',
            key: 'changeStoreTemp',
            url: '/export/change-store/temp',
            icon: '',
          },
        ]
      },
    ]
  },
  {
    title: 'Phiếu Kiểm Kho',
    key: 'inventory records',
    url: '/inventory-records',
    icon: 'icmn icmn-clipboard',
    children: [
      {
        title: 'Tạo Mới',
        key: 'inventoryRecordsCreate',
        url: '/inventory-records/create',
        icon: '',
      },
      {
        title: 'Đang Mở',
        key: 'inventoryRecordsOpen',
        url: '/inventory-records/open',
        icon: '',
      },
      {
        title: 'Hoàn Thành',
        key: 'inventoryRecordsComplete',
        url: '/inventory-records/complete',
        icon: '',
      },
      {
        title: 'Lưu Tạm',
        key: 'inventoryRecordsTemp',
        url: '/inventory-records/temp',
        icon: '',
      },
    ]
  },
  {
    title: 'Nhà Kho',
    key: 'warehouse',
    url: '/warehouse',
    icon: 'icmn icmn-home2',
    children: [
      {
        title: 'Kho Hàng',
        key: 'store',
        url: '/warehouse/store',
        icon: '',
      },
      {
        title: 'Khu Vực',
        key: 'region',
        url: '/warehouse/region',
        icon: '',
      },
      {
        title: 'Rack',
        key: 'rack',
        url: '/warehouse/rack',
        icon: '',
      },
      {
        title: 'Shelf',
        key: 'shelf',
        url: '/warehouse/shelf',
        icon: '',
      },
    ]
  },
  {
    title: 'Nhân Sự',
    key: 'employees',
    url: '/employees',
    icon: 'icmn icmn-user-check',
    children: [
      {
        title: 'Nhân Viên',
        key: 'staff',
        url: '/employees/staff',
        icon: '',
        children: [
          {
            title: 'Đang Hoạt Động',
            key: 'staff-active',
            url: '/employees/staff/active',
            icon: '',
          },
          {
            title: 'Không Hoạt Động',
            key: 'staff-inactive',
            url: '/employees/staff/inactive',
            icon: '',
          },
          {
            title: 'Tài khoản ',
            key: 'staff-account',
            url: '/employees/staff/account',
            icon: '',
          },
          {
            title: 'Vai trò  ',
            key: 'staff-role',
            url: '/employees/staff/role',
            icon: '',
          },
          {
            title: 'Tạo Mới ',
            key: 'staff-create',
            url: '/employees/staff/create',
            icon: '',
          },
        ]
      },
      {
        title: 'Phòng Ban',
        key: 'department',
        url: '/employees/department',
        icon: '',
        children: [
          {
            title: 'Phòng Ban',
            key: 'office',
            url: '/employees/department/office',
            icon: '',
          },
          {
            title: 'Chức Vụ',
            key: 'position',
            url: '/employees/department/position',
            icon: '',
          },
        ]
      },
      {
        title: 'Xe Tải',
        key: 'trucks',
        url: '/employees/trucks',
        icon: '',
        children: [
          {
            title: 'Đang Hoạt Động',
            key: 'trucksActive',
            url: '/employees/trucks/active',
            icon: '',
          },
          {
            title: 'Không Hoạt Động',
            key: 'trucksDeactive',
            url: '/employees/trucks/deactive',
            icon: '',
          },
          {
            title: 'Tạo Mới',
            key: 'trucksCreate',
            url: '/employees/trucks/create',
            icon: '',
          },
        ]
      },
    ]
  },
  {
    title: 'Danh Mục',
    key: 'list',
    url: '/list',
    icon: 'icmn icmn-list2',
    children: [
      {
        title: 'Danh Mục Sản Phẩm',
        key: 'products',
        url: '/list/products',
        icon: '',
        children: [
          {
            title: 'Danh Mục Chủ',
            key: 'first',
            url: '/list/products/first',
            icon: '',
          },
          {
            title: 'Danh Mục Cha',
            key: 'second',
            url: '/list/products/second',
            icon: '',
          },
          {
            title: 'Danh Mục',
            key: 'third',
            url: '/list/products/third',
            icon: '',
          },
        ],
      },
      {
        title: 'Thuộc Tính Sản Phẩm',
        key: 'properties',
        url: '/list/properties',
        icon: '',
        children: [
          {
            title: 'Tạo Mới',
            key: 'propertiesCreate',
            url: '/list/properties/create',
            icon: '',
          },
          {
            title: 'Đang Hoạt Động',
            key: 'propertiesActive',
            url: '/list/properties/active',
            icon: '',
          },
          {
            title: 'Không Hoạt Động',
            key: 'propertiesDeactive',
            url: '/list/properties/deactive',
            icon: '',
          },
        ]
      },
      {
        title: 'Quy Cách Đóng Gói',
        key: 'process',
        url: '/list/process',
        icon: '',
        children: [
          {
            title: 'Loại Thùng',
            key: 'type',
            url: '/list/process/type',
            icon: '',
          },
          {
            title: 'Kích Thước Thùng',
            key: 'size',
            url: '/list/process/size',
            icon: '',
          },
          {
            title: 'Đơn Vị Tính',
            key: 'unit',
            url: '/list/process/unit',
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
    children: [
      {
        title: 'Hệ Thống',
        key: 'system',
        url: '/setting/system',
        icon: '',
      },
      {
        title: 'Kiểm tra thư',
        key: 'mail',
        url: '/setting/mail',
        icon: '',
      },
      {
        title: 'Thuế',
        key: 'tax',
        url: '/setting/tax',
        icon: '',
      },
      {
        title: 'Chi Phí Cộng Thêm Đơn Hàng',
        key: 'extraFee',
        url: '/setting/extra-fee',
        icon: '',
      },
      {
        title: 'Developer',
        key: 'developer',
        url: '/setting/developer',
        icon: '',
      },
      {
        title: 'Địa Chỉ',
        key: 'address',
        url: '/setting/address',
        icon: '',
        children: [
          {
            title: 'Quốc Gia',
            key: 'country',
            url: '/setting/address/country',
            icon: '',
          },
          {
            title: 'Tỉnh/Thành',
            key: 'city',
            url: '/setting/address/city',
            icon: '',
          },
          {
            title: 'Quận/Huyện',
            key: 'district',
            url: '/setting/address/district',
            icon: '',
          },
        ]
      },
    ]
  },
  {
    title: 'Báo Cáo',
    key: 'report',
    url: '/report',
    icon: 'icmn icmn-paste',
    children: [
      {
        title: 'Báo Cáo Sản Phẩm',
        key: 'productsReport',
        url: '/report/products',
        icon: '',
      },
      {
        title: 'Báo Cáo Bán Hàng',
        key: 'saleReport',
        url: '/report/sale',
        icon: '',
      },
      {
        title: 'Báo Cáo Kho',
        key: 'warehouseReport',
        url: '/report/warehouse',
        icon: '',
      },
    ]
  },
]
