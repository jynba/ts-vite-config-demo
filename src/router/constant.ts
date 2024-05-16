export const REDIRECT_NAME = 'Redirect';

export const PARENT_LAYOUT_NAME = 'ParentLayout';

export const PAGE_NOT_FOUND_NAME = 'PageNotFound';

export const LAYOUT = () => import('@/components/Layout/index.vue');

export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: PARENT_LAYOUT_NAME,
      });
    });
};

// // 路由组件映射表
// export const componentsMap = {
//   LAYOUT,
//   dashboard: LAYOUT,
//   dashboardAnalysis: () => import('@/views/dashboard/analysis/index.vue'),
//   base: LAYOUT,
//   platform: () => import('@/views/base/platform/index.vue'),
//   ['platform:r']: () => import('@/views/base/platform/detail/index.vue'),
//   agent: () => import('@/views/base/agent/index.vue'),
//   ['agent:r']: () => import('@/views/base/agent/detail/index.vue'),
//   shop: () => import('@/views/base/shop/index.vue'),
//   ['shop:r']: () => import('@/views/base/shop/detail/index.vue'),
//   site: () => import('@/views/base/site/index.vue'),
//   ['site:r']: () => import('@/views/operation-management/approve/built-store/site/index.vue'),
//   operationManagement: LAYOUT,
//   settled: () => import('@/views/operation-management/settled/index.vue'),
//   pendingApproval: () => import('@/views/operation-management/approve/applications/index.vue'),
//   builtStore: () => import('@/views/operation-management/approve/applications/index.vue'),
//   allApplications: () => import('@/views/operation-management/approve/applications/index.vue'),
//   builtSite:() => import('@/views/operation-management/approve/built-store/site/index.vue'),
//   builtShop:() => import('@/views/base/shop/detail/index.vue'),
//   editSiteOccupancies:() => import('@/views/operation-management/settled/index.vue'),


// };
