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
    icon: 'icmn icmn-calculator',
    children: [
      {
        title: 'Tạo Đơn Hàng',
        key: 'saleCreate',
        url: '/sale/create',
      },
      {
        title: 'Chờ Duyệt',
        key: 'salePending',
        url: '/sale/pending',
      },
      {
        title: 'Đã Duyệt',
        key: 'saleAccept',
        url: '/sale/accept',
      },
      {
        title: 'Hoàn Thành',
        key: 'saleComplete',
        url: '/sale/complete',
      },
      {
        title: 'Lưu Tạm',
        key: 'saleTemp',
        url: '/sale/temp',
      },
      {
        title: 'Đã Hủy',
        key: 'saleCancel',
        url: '/sale/cancel',
      },
    ],
  },
  {
    title: 'Khách Hàng',
    key: 'customer',
    icon: 'icmn icmn-user',
    children: [
      {
        title: 'Tạo Mới',
        key: 'customerCreate',
        url: '/customer/create',
      },
      {
        title: 'Đang Hoạt Động',
        key: 'customerActive',
        url: '/customer/active',
      },
      {
        title: 'Không Hoạt Động',
        key: 'customerDeactive',
        url: '/customer/deactive',
      },
    ],
  },
  {
    title: 'Nhà Cung Cấp',
    key: 'supplier',
    icon: 'icmn icmn-truck',
    children: [
      {
        title: 'Tạo Mới',
        key: 'supplierCreate',
        url: '/supplier/create',
      },
      {
        title: 'Đang Hoạt Động',
        key: 'supplierActive',
        url: '/supplier/active',
      },
      {
        title: 'Không Hoạt Động',
        key: 'supplierDeactive',
        url: '/supplier/deactive',
      },
    ],
  },
  {
    title: 'Sản Phẩm',
    key: 'product',
    icon: 'icmn icmn-joomla',
    children: [
      {
        title: 'Tạo Sản Phẩm',
        key: 'productCreate',
        url: '/product/create',
      },
      {
        title: 'Đang Hoạt Động',
        key: 'productActive',
        url: '/product/active',
      },
      {
        title: 'Không Hoạt Động',
        key: 'productDeactive',
        url: '/product/deactive',
      },
      {
        title: 'Lưu Tạm',
        key: 'productTemp',
        url: '/product/temp',
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
      },
      {
        title: 'Nhãn Hiệu',
        key: 'productBrand',
        url: '/product/brand',
        children: [
          {
            title: 'Tạo Hiệu Mới',
            key: 'productBrandCreate',
            url: '/product/brand/create',
          },
          {
            title: 'Danh Sách',
            key: 'productBrandList',
            url: '/product/brand/list',
          },
        ],
      },
    ],
  },
  {
    title: 'Thông Báo Hàng Đến',
    key: 'arrivalNotification',
    icon: 'icmn icmn-whatsapp',
    children: [
      {
        title: 'Tạo Mới',
        key: 'arrivalNotificationCreate',
        url: '/arrival-notification/create',
      },
      {
        title: 'Đang Mở',
        key: 'arrivalNotificationOpen',
        url: '/arrival-notification/open',
      },
      {
        title: 'Đã Đóng',
        key: 'arrivalNotificationClose',
        url: '/arrival-notification/close',
      },
      {
        title: 'Lưu Tạm',
        key: 'arrivalNotificationTemp',
        url: '/arrival-notification/temp',
      },
    ],
  },
  {
    title: 'Yêu Cầu Nhập Hàng',
    key: 'importRequirement',
    icon: 'icmn icmn-bullhorn',
    children: [
      {
        title: 'Tạo Mới',
        key: 'importRequirementCreate',
        url: '/import-requirement/create',
      },
      {
        title: 'Đang Mở',
        key: 'importRequirementOpen',
        url: '/import-requirement/open',
      },
      {
        title: 'Đã Duyệt',
        key: 'importRequirementAccept',
        url: '/import-requirement/accept',
      },
      {
        title: 'Hoàn Tất',
        key: 'importRequirementComplete',
        url: '/import-requirement/complete',
      },
      {
        title: 'Đã Hủy',
        key: 'importRequirementCancel',
        url: '/import-requirement/cancel',
      },
      {
        title: 'Lưu Tạm',
        key: 'importRequirementTemp',
        url: '/import-requirement/temp',
      },
    ],
  },
  {
    title: 'Nhập Xuất Hàng Hóa',
    key: 'export',
    icon: 'icmn icmn-loop',
    children: [
      {
        title: 'Phiếu Nhập Kho',
        key: 'importRecord',
        url: '/export/import-record',
        children: [
          {
            title: 'Tạo Mới',
            key: 'importRecordCreate',
            url: '/export/import-record/create',
          },
          {
            title: 'Đang Mở',
            key: 'importRecordOpen',
            url: '/export/import-record/open',
          },
          {
            title: 'Đã Hoàn Thành',
            key: 'importRecordCompleted',
            url: '/export/import-record/completed',
          },
          {
            title: 'Lưu Tạm',
            key: 'importRecordTemp',
            url: '/export/import-record/temp',
          },
        ],
      },
      {
        title: 'Phiếu Xuất Kho',
        key: 'exportRecord',
        url: '/export/export-record',
        children: [
          {
            title: 'Tạo Mới',
            key: 'exportRecordCreate',
            url: '/export/export-record/create',
          },
          {
            title: 'Đang Mở',
            key: 'exportRecordOpen',
            url: '/export/export-record/open',
          },
          {
            title: 'Đã Hoàn Thành',
            key: 'exportRecordCompleted',
            url: '/export/export-record/completed',
          },
          {
            title: 'Lưu Tạm',
            key: 'exportRecordTemp',
            url: '/export/export-record/temp',
          },
        ],
      },
      {
        title: 'Hướng Dẫn Lấy Hàng',
        key: 'getProductsGuide',
        url: '/export/get-guide',
        children: [
          {
            title: 'Tạo Mới',
            key: 'getProductsGuideCreate',
            url: '/export/get-guide/create',
          },
          {
            title: 'Đang Mở',
            key: 'getProductsGuideOpen',
            url: '/export/get-guide/open',
          },
          {
            title: 'Đã Hoàn Thành',
            key: 'getProductsGuideComplete',
            url: '/export/get-guide/complete',
          },
        ],
      },
      {
        title: 'Hướng Dẫn Đưa Hàng Vào Kho',
        key: 'putProductsGuide',
        url: '/export/put-guide',
        children: [
          {
            title: 'Tạo Mới',
            key: 'putProductsGuideCreate',
            url: '/export/put-guide/create',
          },
          {
            title: 'Đang Mở',
            key: 'putProductsGuideOpen',
            url: '/export/put-guide/open',
          },
          {
            title: 'Đã Hoàn Thành',
            key: 'putProductsGuideComplete',
            url: '/export/put-guide/complete',
          },
        ],
      },
      {
        title: 'Chuyển Kho Nội Bộ',
        key: 'changeLocalStore',
        url: '/export/change-store',
        children: [
          {
            title: 'Tạo Mới',
            key: 'changeStoreCreate',
            url: '/export/change-store/create',
          },
          {
            title: 'Đang Mở',
            key: 'changeStoreOpen',
            url: '/export/change-store/open',
          },
          {
            title: 'Đã Hoàn Thành',
            key: 'changeStoreCompleted',
            url: '/export/change-store/completed',
          },
          {
            title: 'Lưu Tạm',
            key: 'changeStoreTemp',
            url: '/export/change-store/temp',
          },
        ],
      },
    ],
  },
  {
    title: 'Phiếu Kiểm Kho',
    key: 'inventory records',
    icon: 'icmn icmn-clipboard',
    children: [
      {
        title: 'Tạo Mới',
        key: 'inventoryRecordsCreate',
        url: '/inventory-records/create',
      },
      {
        title: 'Đang Mở',
        key: 'inventoryRecordsOpen',
        url: '/inventory-records/open',
      },
      {
        title: 'Hoàn Thành',
        key: 'inventoryRecordsComplete',
        url: '/inventory-records/complete',
      },
      {
        title: 'Lưu Tạm',
        key: 'inventoryRecordsTemp',
        url: '/inventory-records/temp',
      },
    ],
  },
  {
    title: 'Nhà Kho',
    key: 'warehouse',
    icon: 'icmn icmn-home2',
    children: [
      {
        title: 'Kho Hàng',
        key: 'store',
        url: '/warehouse/store',
      },
      {
        title: 'Khu Vực',
        key: 'region',
        url: '/warehouse/region',
      },
      {
        title: 'Rack',
        key: 'rack',
        url: '/warehouse/rack',
      },
      {
        title: 'Shelf',
        key: 'shelf',
        url: '/warehouse/shelf',
      },
    ],
  },
  {
    title: 'Nhân Sự',
    key: 'employees',
    icon: 'icmn icmn-user-check',
    children: [
      {
        title: 'Nhân Viên',
        key: 'staff',
        url: '/employees/staff',
      },
      {
        title: 'Phòng Ban',
        key: 'department',
        url: '/employees/department',
        children: [
          {
            title: 'Phòng Ban',
            key: 'office',
            url: '/employees/department/office',
          },
          {
            title: 'Chức Vụ',
            key: 'position',
            url: '/employees/department/position',
          },
        ],
      },
      { 
        title: 'Xe Tải',
        key: 'trucks',
        url: '/employees/trucks',
        children: [
          {
            title: 'Đang Hoạt Động',
            key: 'trucksActive',
            url: '/employees/trucks/active',
          },
          {
            title: 'Không Hoạt Động',
            key: 'trucksInactive',
            url: '/employees/trucks/inactive',
          },
          {
            title: 'Tạo Mới',
            key: 'trucksCreate',
            url: '/employees/trucks/create',
          },
        ],
      },
    ],
  },
  {
    title: 'Danh Mục',
    key: 'list',
    icon: 'icmn icmn-list2',
    children: [
      {
        title: 'Danh Mục Sản Phẩm',
        key: 'products',
        url: '/list/products',
        children: [
          {
            title: 'Danh Mục Chủ',
            key: 'first',
            url: '/list/products/first',
          },
          {
            title: 'Danh Mục Cha',
            key: 'second',
            url: '/list/products/second',
          },
          {
            title: 'Danh Mục',
            key: 'third',
            url: '/list/products/third',
          },
        ],
      },
      {
        title: 'Thuộc Tính Sản Phẩm',
        key: 'properties',
        url: '/list/properties',
        children: [
          {
            title: 'Tạo Mới',
            key: 'propertiesCreate',
            url: '/list/properties/create',
          },
          {
            title: 'Đang Hoạt Động',
            key: 'propertiesActive',
            url: '/list/properties/active',
          },
          {
            title: 'Không Hoạt Động',
            key: 'propertiesDeactive',
            url: '/list/properties/deactive',
          },
        ],
      },
      {
        title: 'Quy Cách Đóng Gói',
        key: 'process',
        url: '/list/process',
        children: [
          {
            title: 'Loại Thùng',
            key: 'type',
            url: '/list/process/type',
          },
          {
            title: 'Kích Thước Thùng',
            key: 'size',
            url: '/list/process/size',
          },
          {
            title: 'Đơn Vị Tính',
            key: 'unit',
            url: '/list/process/unit',
          },
        ],
      },
    ],
  },
  {
    title: 'Cấu Hình',
    key: 'setting',
    icon: 'icmn icmn-wrench',
    children: [
      {
        title: 'Hệ Thống',
        key: 'system',
        url: '/setting/system',
      },
      {
        title: 'Kiểm tra thư',
        key: 'mail',
        url: '/setting/mail',
      },
      {
        title: 'Thuế',
        key: 'tax',
        url: '/setting/tax',
      },
      {
        title: 'Chi Phí Cộng Thêm Đơn Hàng',
        key: 'extraFee',
        url: '/setting/extra-fee',
      },
      {
        title: 'Developer',
        key: 'developer',
        url: '/setting/developer',
      },
      {
        title: 'Địa Chỉ',
        key: 'address',
        url: '/setting/address',
        children: [
          {
            title: 'Quốc Gia',
            key: 'country',
            url: '/setting/address/country',
          },
          {
            title: 'Tỉnh/Thành',
            key: 'city',
            url: '/setting/address/city',
          },
          {
            title: 'Quận/Huyện',
            key: 'district',
            url: '/setting/address/district',
          },
        ],
      },
    ],
  },
  {
    title: 'Báo Cáo',
    key: 'report',
    icon: 'icmn icmn-paste',
    children: [
      {
        title: 'Báo Cáo Sản Phẩm',
        key: 'productsReport',
        url: '/report/products',
      },
      {
        title: 'Báo Cáo Bán Hàng',
        key: 'saleReport',
        url: '/report/sale',
      },
      {
        title: 'Báo Cáo Kho',
        key: 'warehouseReport',
        url: '/report/warehouse',
      },
    ],
  },
]
