export default [
  {
    path: '/',
    name: '控制台',
    icon: 'DesktopOutlined',
    component: '@/pages/workbench/index.tsx',
  },
  {
    path: '/content',
    name: '内容管理',
    icon: 'AppstoreOutlined',
    // redirect:'/content/custom-page',
    routes: [
      {
        path: '/content/custom-page',
        name: '自定义页面',
        component: '@/pages/content/custom-page',
      },
      {
        path: '/content/advertising',
        name: '广告位管理',
        component: '@/pages/content/advertising',
      },
      {
        path: '/content/hot-word',
        name: '热搜词管理',
        component: '@/pages/content/hot-word',
      },
      {
        path: '/content/evaluate',
        name: '评价管理',
        component: '@/pages/content/evaluate',
      },
      {
        path: '/content/article',
        name: '文章管理',
        component: '@/pages/content/article',
      },
      {
        path: '/content/programme',
        name: '栏目管理',
        component: '@/pages/content/programme',
      },
    ],
  },
  {
    path: '/commodity',
    name: '商品',
    icon: 'ShoppingOutlined',
    routes: [
      {
        path: '/commodity/controller',
        name: '商品管理',
        component: '@/pages/commodity/controller',
      },
      {
        path: '/commodity/grouping',
        name: '商品分组',
        component: '@/pages/commodity/grouping',
      },
      {
        path: '/commodity/brand',
        name: '品牌管理',
        component: '@/pages/commodity/brand',
      },
      {
        path: '/commodity/label',
        name: '商品标签',
        component: '@/pages/commodity/label',
      },
      {
        path: '/commodity/nature',
        name: '商品属性',
        component: '@/pages/commodity/nature',
      },
    ],
  },
  {
    path: '/order',
    name: '订单',
    icon: 'AuditOutlined',
    routes: [
      {
        path: '/order/controller',
        name: '订单管理',
        component: '@/pages/order/controller',
      },
      {
        path: '/order/after-sale',
        name: '售后维权',
        component: '@/pages/order/after-sale',
      },
      {
        path: '/order/deliver',
        name: '批量发货',
        component: '@/pages/order/deliver',
      },
      {
        path: '/order/dispatching',
        name: '配送管理',
        component: '@/pages/order/dispatching',
      },
    ],
  },
  {
    path: '/clientele',
    name: '客户管理',
    icon: 'TeamOutlined',
    routes: [
      {
        path: '/clientele/query',
        name: '客户查询',
        component: '@/pages/clientele/query',
      },
      {
        path: '/clientele/colony',
        name: '客户分群',
        component: '@/pages/clientele/colony',
      },
      {
        path: '/clientele/member',
        name: '会员设置',
        component: '@/pages/clientele/member',
      },
      {
        path: '/clientele/equity',
        name: '权益管理',
        component: '@/pages/clientele/equity',
      },
      {
        path: '/clientele/equity-card',
        name: '权益卡',
        component: '@/pages/clientele/equity-card',
      },
      {
        path: '/clientele/tag-controller',
        name: '标签管理',
        component: '@/pages/clientele/tag-controller',
      },
      {
        path: '/clientele/integral',
        name: '积分管理',
        component: '@/pages/clientele/integral',
      },
      {
        path: '/clientele/integral-data',
        name: '积分数据',
        component: '@/pages/clientele/integral-data',
      },
    ],
  },
  {
    path: '/activity',
    name: '营销活动',
    icon: 'DeploymentUnitOutlined',
    routes: [
      {
        path: '/activity/marketing',
        name: '场景营销',
        component: '@/pages/activity/marketing',
      },
      {
        path: '/activity/operation',
        name: '人群运营',
        component: '@/pages/activity/operation',
      },
      {
        path: '/activity/coupon',
        name: '优惠券',
        component: '@/pages/activity/coupon',
      },
      {
        path: '/activity/wholesale',
        name: '拼团',
        component: '@/pages/activity/wholesale',
      },
      {
        path: '/activity/seckill',
        name: '秒杀',
        component: '@/pages/activity/seckill',
      },
    ],
  },
  {
    path: '/finance',
    name: '财政管理',
    icon: 'MoneyCollectOutlined',
    routes: [
      {
        path: '/finance/overview',
        name: '资产总览',
        component: '@/pages/finance/overview',
      },
      {
        path: '/finance/reconciliation',
        name: '对账管理',
        component: '@/pages/finance/reconciliation',
      },
      {
        path: '/finance/detail',
        name: '收支明细',
        component: '@/pages/finance/detail',
      },
    ],
  },
  {
    path: '/statement',
    name: '数据报表',
    icon: 'BarChartOutlined',
    routes: [
      {
        path: '/statement/customer-data',
        name: '客户数据',
        component: '@/pages/statement/customer-data',
      },
      {
        path: '/statement/flow-data',
        name: '流量数据',
        component: '@/pages/statement/flow-data',
      },
      {
        path: '/statement/commodity-data',
        name: '商品数据',
        component: '@/pages/statement/commodity-data',
      },
      {
        path: '/statement/deal-data',
        name: '交易数据',
        component: '@/pages/statement/deal-data',
      },
      {
        path: '/statement/member-data',
        name: '会员数据',
        component: '@/pages/statement/member-data',
      },
    ],
  },
  {
    path: '/system',
    name: '系统',
    icon: 'SettingOutlined',
    routes: [
      {
        path: '/system/role',
        name: '角色管理',
        component: '@/pages/system/role',
      },
      {
        path: '/system/account',
        name: '账号管理',
        component: '@/pages/system/account',
      },
      {
        path: '/system/department',
        name: '部门管理',
        component: '@/pages/system/department',
      },
      {
        path: '/system/log',
        name: '操作日志',
        component: '@/pages/system/log',
      },
      {
        path: '/system/message',
        name: '消息管理',
        component: '@/pages/system/message',
      },
    ],
  },
];
