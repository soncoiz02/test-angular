import { Injectable } from '@angular/core';
import { sEnum } from './sEnum';

@Injectable()
export class SidebarService {

  constructor() {
  }

  static _sidebar(translate: any) {
    if (translate) {
      return [
        {
          name: "Bán hàng",//translate.MENU.nguoi_lao_dong,
          url: '/system/pos',
          icon: 'assets\\img\\icons\\pos.svg',
          icon_active: 'assets\\img\\icons\\pos.svg',
          //icon: 'fa fa-shopping-cart fa-2x',
          permissions: [sEnum.groupRoles.LapHoSo, sEnum.groupRoles.KyVaNopHoSo]
        },
        {
          name: "Hóa đơn",//translate.MENU.hs_ke_khai,
          url: '/system/bills',
          icon: 'assets\\img\\icons\\bill.svg',
          icon_active: 'assets\\img\\icons\\bill-active.svg',
          //icon: 'fa fa-file-text fa-2x',
          permissions: [sEnum.groupRoles.LapHoSo, sEnum.groupRoles.KyVaNopHoSo]
        },
        {
          name: "Hàng hóa",
          url: '/system/products',
          icon: 'assets\\img\\icons\\product.svg',
          icon_active: 'assets\\img\\icons\\product-active.svg',
          permissions: [sEnum.groupRoles.TraCuu]
        },
        {
          name: "Khách hàng",
          url: '/system/customers',
          icon: 'assets\\img\\icons\\customer.svg',
          icon_active: 'assets\\img\\icons\\customer-active.svg',
          permissions: [sEnum.groupRoles.TraCuu]
        },
        {
          name: "Sổ quỹ",
          url: '/system/cash-flows',
          icon: 'assets\\img\\icons\\cash-flow.svg',
          icon_active: 'assets\\img\\icons\\cash-flow-active.svg',
          permissions: [sEnum.groupRoles.TraCuu]
        },
        // {
        //   name: translate.MENU.thong_ke,
        //   url: '/system/statistical',
        //   url_ref: [
        //     '/system/statistical/th-kq-hsgd',
        //     '/system/statistical/ct-kq-hsgd',
        //     '/system/statistical/th-bhyt-truot-tai-tuc',
        //     '/system/statistical/ct-bhyt-truot-tai-tuc'
        //   ],
        //   icon: 'assets\\img\\icons\\mn_thong_ke.png',
        //   icon_active: 'assets\\img\\icons\\mn_thong_ke_active.png',
        //   permissions: [sEnum.groupRoles.BaoCao]

        // },
        // {
        //   name: translate.MENU.huong_dan,
        //   url: '/system/tutorial/document',
        //   icon: 'assets\\img\\icons\\mn_huong_dan.png',
        //   icon_active: 'assets\\img\\icons\\mn_huong_dan_active.png',
        //   permissions: ['ALL']

        // },
        // {
        //   name: translate.MENU.thong_bao,
        //   url: '/system/notification',
        //   icon: 'assets\\img\\icons\\mn_thong_bao.png',
        //   icon_active: 'assets\\img\\icons\\mn_thong_bao_active.png',
        //   permissions: ['ALL']
        // },
        // {
        //   name: translate.MENU.he_thong,
        //   // url: '/system/users',
        //   icon: 'assets\\img\\icons\\icon_he_thong.png',
        //   icon_active: 'assets\\img\\icons\\icon_he_thong_active.png',
        //   permissions: ['ALL'],
        //   children: [
        //     {
        //       name: 'Thông tin dịch vụ',
        //       url: '/system/information-service',
        //       icon: 'fa fa-caret-right',
        //       icon_active: 'fa fa-caret-right',
        //       permissions: ['ALL']
        //     },
        //     {
        //       name: 'Quản lý người dùng',
        //       url: '/system/users',
        //       icon: 'fa fa-caret-right',
        //       icon_active: 'fa fa-caret-right',
        //       permissions: [sEnum.groupRoles.QuanTriHeThong]
        //     },
        //     {
        //       name: 'Thông tin đơn vị',
        //       url: '/system/unit-account',
        //       icon: 'fa fa-caret-right',
        //       icon_active: 'fa fa-caret-right',
        //       permissions: ['ALL']
        //     },
        //     {
        //       name: translate.MENU.tham_so_he_thong,
        //       url: '/system/configs',
        //       icon: 'fa fa-caret-right',
        //       icon_active: 'fa fa-caret-right',
        //       permissions: [sEnum.groupRoles.QuanTriHeThong]
        //     },
        //     {
        //       name: 'Nhật ký hoạt động',
        //       url: '/system/diary',
        //       icon: 'fa fa-caret-right',
        //       icon_active: 'fa fa-caret-right',
        //       permissions: [sEnum.groupRoles.QuanTriHeThong]
        //     },
        //   ]
        // },
        // {
        //   name: translate.MENU.cai_dat,
        //   // url: '/system/users',
        //   icon: 'assets\\img\\icons\\mn_he_thong.png',
        //   icon_active: 'assets\\img\\icons\\mn_he_thong_active.png',
        //   permissions: ["superadmin"],
        //   children: [
        //     {
        //       name: 'Danh mục hệ thống',
        //       url: '/system/lists',
        //       icon: 'fa fa-caret-right',
        //       icon_active: 'fa fa-caret-right',
        //       permissions: ["superadmin"]
        //     },
        //     {
        //       name: 'Cấu hình thủ tục',
        //       url: '/config-procedures',
        //       icon: 'fa fa-caret-right',
        //       icon_active: 'fa fa-caret-right',
        //       permissions: ["superadmin"]
        //     },
        //     {
        //       name: 'Hướng dẫn kê khai',
        //       url: '/system/tutorial-declaration',
        //       icon: 'fa fa-caret-right',
        //       icon_active: 'fa fa-caret-right',
        //       permissions: ["superadmin"]
        //     },
        //     {
        //       name: 'Loại danh mục hệ thống',
        //       url: '/system/listtypes',
        //       icon: 'fa fa-caret-right',
        //       icon_active: 'fa fa-caret-right',
        //       permissions: ["superadmin"]
        //     },
        //     {
        //       name: 'Quản trị thông báo',
        //       url: '/system/manage-notifies',
        //       icon: 'fa fa-caret-right',
        //       icon_active: 'fa fa-caret-right',
        //       permissions: ["superadmin"]
        //     },
        //   ]
        // }
      ];
    } else {
      return [];
    }
  }

  static _sidebarMobile(translate: any) {
    if (translate) {
      return [
        {
          name: "Tổng quan",
          url: '/system/home',
          icon: 'fa fa-bar-chart fa-lg',
          permissions: ['ALL']
        },
        {
          name: "Bán hàng",//translate.MENU.hs_ke_khai,
          url: '/system/pos',
          icon: 'fa fa-shopping-cart fa-lg',
          permissions: ['ALL']
        },
        {
          name: "Hóa đơn",//translate.MENU.hs_ke_khai,
          url: '/system/bills',
          icon: 'fa fa-file-text fa-lg',
          permissions: ['ALL']
        },
        {
          name: "Hàng hóa",
          url: '/system/products',
          icon: 'fa fa-shopping-basket fa-lg',
          permissions: ['ALL']

        },
        // {
        //   name: translate.MENU.thong_bao,
        //   url: '/system/notification',
        //   icon: 'fa fa-bell fa-lg',
        //   permissions: ['ALL']
        // },
        {
          name: "Nhiều hơn",
          url: '/system/sidebar-more',
          icon: 'fa fa-bars fa-lg',
          permissions: ['ALL']
        },
      ];
    } else {
      return [];
    }
  }
}

