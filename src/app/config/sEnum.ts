
export const sEnum = {
  // data_version: {
  //   QD: '505'
  // },

  // data_version: [
  //   {
  //     QD: '505',
  //     record_type_forms: []
  //   },
  //   {
  //     QD: '505A1',
  //     record_type_forms: ["D02-LT", "D02-LT-TANG", "D02-LT-GIAM", "D02-LT-DIEUCHINH", '05A-HSB', 'DNHDKCB']
  //   },
  //   // {
  //   //   QD: '490',
  //   //   record_type_forms: ["D03-TS", "D03-TS-TANG", "D05-TS", "TK1-TS", "TK3-TS"]
  //   // },
  // ],

  configSys: {
    decimal_places_json: 'decimal_places_json',
    integrate_parameter: 'integrate_parameter',
    system_parameter: 'system_parameter',
    display_currency: 'display_currency',
    number_login_false: 'number_login_false',
    info_export_declaration: 'info_export_declaration',
    doc_relate_symbol: 'doc_relate_symbol',
    config_column_import_inv_excel: 'config_column_import_inv_excel',
    maximum_object_import: 'maximum_object_import',
  },
  adjustmentForm: {
    thong_tin: 'THONG_TIN',
    tien_chu: 'TIEN_CHU',
    khac: 'KHAC'
  },
  hinhThucXuat: {
    XuatChoKy: 'GIU_SO',
  },
  statusInv: {
    ChoKy: 'GIU_SO',
    DaXuat: 'DA_XUAT',
    GhiTam: 'GHI_TAM',
  },
  statusApprove: {
    ChuaTrinhKy: '0',
    ChoDuyet: '1',
    DaDuyet: '2',
    TuChoi: '3',
  },
  statusApi: {
    success: 'success',
    error: 'error',
  },
  type_cks: {
    token: '1',
    remote_signing: '2',
    sign_server: '3',
  },
  statusSynV2: {
    /// chưa đăng nhập v2 mà đã đăng nhập v3
    chua_dang_nhap_v2: '0',
    chua_dong_bo: '1',
    dang_dong_bo: '2',
    da_dong_bo: '3',
    dong_bo_loi: '4',
  },
  templatetype: {
    HoaDonVeMayBay: 'HOA_DON_VE_MAY_BAY',
    HoaDonNhaHangKhachSan: 'HOA_DON_NHA_HANG_KHACH_SAN',
    HoaDonBatDongSan: 'HOA_DON_BAT_DONG_SAN',
    HoaDonDangKiem: 'HOA_DON_DANG_KIEM',
    HoaDonXangDau: 'HOA_DON_XANG_DAU',
    HoaDonKinhDoanhXe: 'HOA_DON_KINH_DOANH_XE',
    HoaDonVeMayBayThuTien: 'HOA_DON_VE_MAY_BAY_THU_TIEN',
    HoaDonVeMayBayHoanTien: 'HOA_DON_VE_MAY_BAY_HOAN_TIEN',
    HoaDonVeMayBayTongHop: 'HOA_DON_VE_MAY_TONG_HOP',
  },
  groupRoles: {
    LapHoSo: 'LAP_HO_SO',
    KyVaNopHoSo: 'KY_VA_NOP_HO_SO',
    TraCuu: 'TRA_CUU',
    BaoCao: 'THONG_KE',
    QuanTriHeThong: 'QUAN_TRI_HE_THONG',
    CaiDat: 'CAI_DAT',
  },
  danhMuc: {
    DM_PHONG_BAN: 'DM_PHONG_BAN',
    DM_DON_VI_Y_TE: 'DM_DON_VI_Y_TE',
    DM_QUAN_HUYEN: 'DM_QUAN_HUYEN',
    DM_XA_PHUONG: 'DM_XA_PHUONG',
    DM_TINH_THANH: 'DM_TINH_THANH',
    DM_LOP_HOC: 'DM_LOP_HOC',
    DM_NGAN_HANG: 'DM_NGAN_HANG',
    DM_NHOM_DOI_TUONG: "DM_NHOM_DOI_TUONG",
    DM_NOI_DUNG_HUONG_DAN: "DM_NOI_DUNG_HUONG_DAN",
    DM_THAM_GIA_BHYT: "DM_THAM_GIA_BHYT",
    DM_LUONG_CO_SO: "DM_LUONG_CO_SO",
    DM_QUAN_HE: "DM_QUAN_HE",
    DM_MUC_DONG_BHXH: "DM_MUC_DONG_BHXH",
    DM_HANH_DONG_LOG: "DM_HANH_DONG_LOG",
    DM_CHUC_NANG_LOG: "DM_CHUC_NANG_LOG"
  },
  recordTypeForm: {
    D01_TS: 'D01-TS',
    TK1_TS: 'TK1-TS',
    TK3_TS: 'TK3-TS',
    DSDN: 'DSDN',
    TGTG: 'TGTG',
    D02_LT: 'D02-LT',
    D02_LT_TANG: 'D02-LT-TANG',
    D02_LT_GIAM: 'D02-LT-GIAM',
    D02_LT_DIEUCHINH: 'D02-LT-DIEUCHINH',
    D03_TS: 'D03-TS',
    D03_TS_TANG: 'D03-TS-TANG',
    D03_TS_GIAM: 'D03-TS-GIAM',
    D05_TS: 'D05-TS',
    OmDau: 'OmDau',
    M01B_HSB: '01B-HSB',
    ThaiSan: 'ThaiSan',
    DuongSuc: 'DuongSuc',
    DieuChinh: 'DieuChinh',
    M05A_HSB: '05A-HSB',
    TNLD: 'TNLD',
    BNN: 'BNN',
    DNHDKCB: 'DNHDKCB',
    DinhKem: 'DinhKem',
    Pgnhs: 'PGNHS',
    DS_XNBS: 'DS-XNBS'
  },
  typeDisplay: {
    CapLaiTheBhytDoHetHan: 'CapLaiTheBhytDoHetHan',
    CapLaiTheBhytDoMatHong: 'CapLaiTheBhytDoMatHong',
    CapLaiSoBHXH: 'CapLaiSoBHXH',
    GopSoBHXH: 'GopSoBHXH',
    GopSoBHXH_HSG: 'GopSoBHXH_HSG',
    ThayDoiThongTin : 'ThayDoiThongTin',
    XacNhanQuaTrinh: 'XacNhanQuaTrinh',
    D01_TS: 'D01-TS',
    TK1_TS: 'TK1-TS',
    DSDN: 'DSDN',
    PGNHS: "PGNHS",
    TIEUDE: 'TIEUDE',
    NHAN: 'NHAN',
    TGTG: 'TGTG',


    TANG_NTG: 'TNTG',
    TLD: 'TLD',
    TANG_TL: 'TTL',
    TANG_BHYT: 'BHYT',
    TANG_BHTN: 'BHTN',
    TANG_BHTNLD_BNN: 'TBHTNLD_BNN',
    TANG_MUC_DONG: 'TMD',


    GIAMLD: 'GIAMLD',
    GIAM_NTG: 'GIAMNTG',
    GIAM_TL: 'GIAMTL',
    GIAM_BHYT: 'GIAMBHYT',
    GIAM_BHTN: 'GIAMBHTN',
    GIAM_BHTNLD_BNN: 'GIAMBHTNLD_BNN',
    GIAM_MUC_DONG: 'GIAMMD',

    THAY_DOI_CHUC_DANH: 'THAY_DOI_CHUC_DANH',
    DC_BHTNLD_BNN: 'DC_BHTNLD_BNN',

    ///Ốm đau
    OM_THUONG: 'OM_THUONG',
    OM_DAI_NGAY: 'OM_DAI_NGAY',
    CON_OM: 'CON_OM',

    /// Thai sản
    KHAM_THAI: 'KHAM_THAI',
    SAY_THAI: 'SAY_THAI',
    SINH_CON: 'SINH_CON',
    NUOI_CON_NUOI: 'NUOI_CON_NUOI',
    MANG_THAI_HO: 'MANG_THAI_HO',
    NHO_MANG_THAI_HO: 'NHO_MANG_THAI_HO',
    LD_NAM_NGHI_VIEC: 'LD_NAM_NGHI_VIEC',
    LD_NAM_NHAN_TRO_CAP_1_LAN: 'LD_NAM_NHAN_TRO_CAP_1_LAN',
    BIEN_PHAP_KHHGD: 'BIEN_PHAP_KHHGD',

    /// Dưỡng sức
    DS_OM_DAU: 'DS_OM_DAU',
    DS_THAI_SAN: 'DS_THAI_SAN',
    DS_TNLD_BNN: 'DS_TNLD_BNN',

    /// Điều chỉnh
    DC_OM_DAU: 'DC_OM_DAU',// Điều chỉnh ốm đau
    DC_THAI_SAN: 'DC_THAI_SAN',// Điều chỉnh thai sản
    DC_DUONG_SUC: 'DC_DUONG_SUC',// Điều chỉnh dưỡng sức

    CT: 'CT',
    CG: 'CG',

    CLT_TDTTCN: 'CLT_TDTTCN',
    CLT_TDMQLBHYT: 'CLT_TDMQLBHYT',
    CLT_TDNKDKCBBD: 'CLT_TDNKDKCBBD',
    CLT_TDTGTG5LT: 'CLT_TDTGTG5LT',
    RaSoatMsBHXH: 'RaSoatMsBHXH',
    DeNghiHoanTra: 'DeNghiHoanTra',
    CapLaiDoiTheBhyt: 'CapLaiDoiTheBhyt',
    Khac: 'KHAC'

  },
  unitTypes: {
    BHXH_BAT_BUOC: 'BHXH_BAT_BUOC', // NLĐ tham gia BHXH, BHYT, BHTN, BHTNLĐ, BNN bắt buộc
    TRE_EM: 'TRE_EM', // Trẻ em dưới 06 tuổi
    HSSV: 'HSSV', // Học sinh – sinh viên
    BHYT_TU_DONG: 'BHYT_TU_DONG', // Hộ gia đình
    BHYT_NSNN_DONG: 'BHYT_NSNN_DONG', // Đối tượng chỉ tham gia BHYT
    BHXH_TU_NGUYEN: 'BHXH_TU_NGUYEN', // Tham gia BHXH tự nguyện
    BHYT_MSTB: 'BHYT_MSTB', // Hộ gia đình có mức sống trung bình
    BHYT_HNHCN: 'BHYT_HNHCN', // Hộ cận nghèo, hộ nghèo
    KHAC: 'KHAC',
  },
  columns: {
    ho_va_ten: 'ho_va_ten',
    ho_ten_cha_me: 'ho_ten_cha_me',
    ma_so_bhxh: 'ma_so_bhxh',
    so_bhxh: 'so_bhxh',
    ma_the_bhyt: 'ma_the_bhyt',
    ngay_sinh: 'ngay_sinh',
    gioi_tinh: 'gioi_tinh',
    ma_kcb: 'ma_kcb',
    ma_kcb_moi: 'ma_kcb_moi',
    ten_kcb: 'ten_kcb',
    noi_dung_thay_doi: 'noi_dung_thay_doi',
    ho_so_kem_theo: 'ho_so_kem_theo',
    ngay_van_ban: 'ngay_van_ban',
    han_the_cu: 'han_the_cu',
    ngay_chet: 'ngay_chet',
    ngay_quyet_dinh: 'ngay_quyet_dinh',
    ngay_hieu_luc: 'ngay_hieu_luc',
    tu_thang_nam: 'tu_thang_nam',
    den_thang_nam: 'den_thang_nam',
    tien_luong: 'tien_luong',
    pc_luong: 'pc_luong',
    pc_clbl: 'pc_clbl',
    cac_khoan_bo_sung: 'cac_khoan_bo_sung',
    he_so: 'he_so',
    ho_tro_khac: 'ho_tro_khac',
    pc_chuc_vu: 'pc_chuc_vu',
    pc_tnvk: 'pc_tnvk',
    pc_tnn: 'pc_tnn',
    pc_khac: 'pc_khac',
    tl_dong_bhxh: 'tl_dong_bhxh',
    tl_dong_bhtn: 'tl_dong_bhtn',
    tl_dong_tnld_bnn: 'tl_dong_tnld_bnn',
    dv_tham_gia: 'dv_tham_gia',
    chuc_vu: 'chuc_vu',
    noi_lam_viec: 'noi_lam_viec',
    ma_pa: 'ma_pa',
    tl_dong: 'tl_dong',
    tl_dong_hgd: 'tl_dong_hgd',
    tl_nsnn_ht: 'tl_nsnn_ht',
    tl_nsdp_ht: 'tl_nsdp_ht',
    so_thang_tham_gia: 'so_thang_tham_gia',
    tu_thang_tham_gia: 'tu_thang_tham_gia',
    ten_ccns: 'ten_ccns',
    ten_quoc_tich: 'ten_quoc_tich',
    ten_dan_toc: 'ten_dan_toc',
    ten_tinh_ks: 'ten_tinh_ks',
    ten_huyen_ks: 'ten_huyen_ks',
    ten_xa_ks: 'ten_xa_ks',
    ten_tinh_nn: 'ten_tinh_nn',
    ten_huyen_nn: 'ten_huyen_nn',
    ten_xa_nn: 'ten_xa_nn',
    dia_chi_nn: 'dia_chi_nn',
    so_tien_dong: 'so_tien_dong',
    ten_vung_ss: 'ten_vung_ss',
    ten_muc_huong: "ten_muc_huong",
    ten_phong_ban: 'ten_phong_ban',
    ten_loai_vb: 'ten_loai_vb',
    so_hieu: 'so_hieu',
    co_quan_ban_hanh: 'co_quan_ban_hanh',
    trich_yeu: 'trich_yeu',
    trich_luoc: 'trich_luoc',
    ten_lop_hoc: 'ten_lop_hoc',
    so_bien_lai: 'so_bien_lai',
    ngay_bien_lai: 'ngay_bien_lai',
    phu_luc_tvhgd: 'phu_luc_tvhgd',
    ma_dan_toc: 'ma_dan_toc',
    ma_quoc_tich: 'ma_quoc_tich',
    so_cmnd: 'so_cmnd',
    so_cmnd_me: "so_cmnd_me",
    ma_phuong_thuc_dong: 'ma_phuong_thuc_dong',
    ten_phuong_thuc_dong: 'ten_phuong_thuc_dong',
    muc_thu_nhap_thang_dong_bhxh_tn: "muc_thu_nhap_thang_dong_bhxh_tn",
    so_tien_nsnn_ho_tro: "so_tien_nsnn_ho_tro",
    nguoi_tham_gia_dong: "nguoi_tham_gia_dong",
    tl_ho_tro_khac: "tl_ho_tro_khac",
    so_tien_nsdp_ho_tro: "so_tien_nsdp_ho_tro",
    bao_giam_tu_thang: "bao_giam_tu_thang",
    tu_thang_hoan_tra: "tu_thang_hoan_tra",
    so_thang_hoan_tra: "so_thang_hoan_tra",
    so_tien_hoan_tra: "so_tien_hoan_tra",
    ly_do_hoan_tra: "ly_do_hoan_tra",
    lai_suat_bhxh: "lai_suat_bhxh",
    thoi_diem_ghi_bhyt: "thoi_diem_ghi_bhyt",
    thoi_diem_de_nghi_thay_doi: "thoi_diem_de_nghi_thay_doi",
    thay_doi_kcb: "thay_doi_kcb",
    vtvl_ten_loai: "vtvl_ten_loai",
    vtvl_tu_ngay: "vtvl_tu_ngay",
    vtvl_den_ngay: "vtvl_den_ngay",
    hdld_so: "hdld_so",
    hdld_ngay_ky: "hdld_ngay_ky",
    hdld_tu_ngay: "hdld_tu_ngay",
    hdld_den_ngay: "hdld_den_ngay",
    hdld_ten_loai: "hdld_ten_loai",
    nndh_tu_ngay: "nndh_tu_ngay",
    nndh_den_ngay: "nndh_den_ngay",
    da_co_so_bhxh: "da_co_so_bhxh",
    so_so_bhxh: "so_so_bhxh",
    ten_vung_ltt: "ten_vung_ltt",
    ghi_chu: "ghi_chu",
    tong_so_ngay: "tong_so_ngay",
    tu_ngay: "tu_ngay",
    den_ngay: "den_ngay",
    ngay_nghi_tuan: "ngay_nghi_tuan",
    tu_ngay_don_vi: "tu_ngay_don_vi",
    ten_hinh_thuc_nhan: "ten_hinh_thuc_nhan",
    ten_hinh_thuc_nhan_tro_cap: "ten_hinh_thuc_nhan_tro_cap",
    ma_benh: "ma_benh",
    ten_benh: "ten_benh",
    ten_tuyen_benh_vien: "ten_tuyen_benh_vien",
    ngay_sinh_con: "ngay_sinh_con",
    ngay_con_chet: "ngay_con_chet",
    ngay_me_chet: "ngay_me_chet",
    ngay_nhan_con: "ngay_nhan_con",
    ma_the_bhyt_con: "ma_the_bhyt_con",
    ma_the_bhyt_me: "ma_the_bhyt_me",
    ma_so_bhxh_me: "ma_so_bhxh_me",
    ma_so_bhxh_con: "ma_so_bhxh_con",
    so_con: "so_con",
    so_con_om: "so_con_om",
    so_con_chet: "so_con_chet",
    ngay_tro_lai_lam_viec: "ngay_tro_lai_lam_viec",
    tl_suy_giam: "tl_suy_giam",
    ngay_ket_luan: "ngay_ket_luan",
    ngay_giam_dinh: "ngay_giam_dinh",
    ten_dot_giai_quyet: "ten_dot_giai_quyet",
    ngay_giai_quyet: "ngay_giai_quyet",
    ly_do_dieu_chinh: "ly_do_dieu_chinh",
    tuoi_thai: "tuoi_thai",
    nghi_duong_thai: "nghi_duong_thai",
    ten_ngan_hang: "ten_ngan_hang",
    so_tai_khoan: "so_tai_khoan",
    ten_chu_tai_khoan: "ten_chu_tai_khoan",
    ten_dieu_kien_kham_thai: "ten_dieu_kien_kham_thai",
    ten_dieu_kien_sinh_con: "ten_dieu_kien_sinh_con",
    ngay_cap_cmnd: "ngay_cap_cmnd",
    noi_cap_cmnd: "noi_cap_cmnd",
    dia_chi_ks: "dia_chi_ks",
    cha_nghi_cham_con: "cha_nghi_cham_con",
    ngay_xay_ra_tnld: "ngay_xay_ra_tnld",
    so_bien_ban_tnld: "so_bien_ban_tnld",
    ngay_bien_ban_tnld: "ngay_bien_ban_tnld",
    noi_cap_bien_ban_tnld: "noi_cap_bien_ban_tnld",
    ten_truong_hop_bi_tnld: "ten_truong_hop_bi_tnld",
    ngay_xay_ra_tnld_bnn: "ngay_xay_ra_tnld_bnn",
    giay_kham_so: "giay_kham_so",
    giay_kham_ngay: "giay_kham_ngay",
    noi_cap_giay_kham: "noi_cap_giay_kham",
    loai_che_do: "loai_che_do",
    lan_thu: "lan_thu",
    cong_van_so: "cong_van_so",
    ten_don_vi: "ten_don_vi",
    thu_truong_don_vi: "thu_truong_don_vi",
    nam_de_nghi: "nam_de_nghi",
    so_giay_phep: "so_giay_phep",
    ngay_cap_giay_phep: "ngay_cap_giay_phep",
    so_y_te_quan_ly: "so_y_te_quan_ly",
  },
  selectBoxs: {
    list_ma_kcb: 'list_ma_kcb',
  },

  ccns: {
    day_du: '0',
    chi_co_thang_nam_sinh: '1',
    chi_co_nam_sinh: '2',
  },
  thu_tuc: {
    // Báo tăng, báo giảm, điều chỉnh đóng BHXH, BHYT, BHTN, BHTNLĐ, BNN
    _600: '600',
    _600c: '600c',
    _600o: '600o',
    _601: '601',
    _603_1: '603-1',
    _603_2: '603-2',
    // HSSV
    _603_3: '603-3',
    // Đăng ký, cấp thẻ BHYT cho Hộ gia đình
    _603_4: '603-4',
    _604: '604',
    _605: "605",
    _607: '607',
    _610: '610',
    _611: '611',
    _612: '612',
    _613: '613',
    // Đăng ký, đăng ký lại (bao gồm cả đóng bù cho thời gian chưa đóng), điều chỉnh phương thức đóng, căn cứ đóng BHXH tự nguyện
    _602: '602',
    _608: '608',
    _602a: '602a',
    _606a: '606a',
    _606b: '606b',
    _603a: '603a',
    _630: '630',
    _630a: '630a',
    _630b: '630b',
    _630c: '630c',
    _641a: '641a',
    _642a: '642a',
    _644a: '644a',
    _645a: '645a',
    _647a: '647a',
    _648a: '648a',
    _651a: '651a',
    _651b: '651b',
    _651c: '651c',
    // hồ sơ giấy
    _621a: '621a',
    _621: '621',
    _609: '609',
    _620: '620',
  },
  modal_confirm: {
    warning: 'warning',
    tutorial: 'tutorial',
    confirm: 'confirm',
    error: 'error',
  },
  statusTgia: {
    dang_tham_gia: 'DANG_THAM_GIA', // 1
    nghi_han: 'NGHI_HAN', // 6
    dang_dong: 'DANG_DONG', // 3
    dang_cho_cqbhxh_xu_ly: 'DANG_CHO_CQBHXH_XU_LY',
    dang_nghi_khong_luong: 'DANG_NGHI_KHONG_LUONG', // 4
    nghi_khong_luong: 'NGHI_KHONG_LUONG', // 7
    dang_nghi_om: 'DANG_NGHI_OM', // 8
    nghi_thai_san: 'NGHI_THAI_SAN', // 10
    dang_nghi_thai_san: 'DANG_NGHI_THAI_SAN', // 5
    het_han: 'HET_HAN', // 9
    nghi_om: 'NGHI_OM' // 2
  },
  statusNavStaff: {
    infor_staff: 'INFOR_STAFF',
    member: 'MEMBER',
    check_value_bhyt: 'CHECK_VALUE_BHYT',
    process: 'PROCESS',
  },
  ppTinh: {
    tinh_theo_muc_lcs: '1',
    tinh_theo_muc_dong: '2',
  },
  statusInsurrance: {
    chua_kiem_tra: '0',
    da_kiem_tra: '1',
    xem: '2',
  },
  trang_thai_nop_ho_so: {
    chua_nop: '101',
    cho_nhan: '200',
    dang_giai_quyet: '201',
    da_co_kq: '202',
    tu_choi: '203',
  },
  trang_thai_trinh_ky: {
    trinh_ky: 'TRINH_KY',
    cho_gui_ky: 'CHO_GUI_KY',
    cho_duyet: 'CHO_DUYET',
    tu_choi: 'TU_CHOI',
    da_ky: 'DA_KY'
  },
  comboKeyExcel: {
    name: 'name',
    class_code: 'class_code',
    insurrance_code: 'insurrance_code',
    dob: 'dob',
    sex: 'sex',
    identity_card_number: 'identity_card_number',
    kin_orther_name: 'kin_orther_name',
    name_ebhxh: 'name_ebhxh',
    class_code_ebhxh: 'class_code_ebhxh',
    insurrance_code_ebhxh: 'insurrance_code_ebhxh',
    dob_ebhxh: 'dob_ebhxh',
    sex_ebhxh: 'sex_ebhxh',
    identity_card_number_ebhxh: 'identity_card_number_ebhxh',
    kin_orther_name_ebhxh: 'kin_orther_name_ebhxh',
  },
  data_type: {
    _date_ddmmyyyy: [
      {
        code: "tu_thang_tham_gia",
        is_valid_greater: false
      },
      {
        code: "ngay_bien_lai",
        is_valid_greater: true
      },
      {
        code: "ngay_quyet_dinh",
        is_valid_greater: true
      },
      {
        code: "ngay_het_han_the",
        is_valid_greater: false
      },
      {
        code: "ngay_van_ban",
        is_valid_greater: true
      },
      {
        code: "ngay_ban_hanh",
        is_valid_greater: true
      },
      {
        code: "ngay_hieu_luc",
        is_valid_greater: true
      },
      {
        code: "ngay_chet",
        is_valid_greater: true
      },
      {
        code: "bhyt_number_start_date",
        is_valid_greater: false
      },
      // {
      //   code: "han_the_cu",
      //   is_valid_greater: true
      // },
      {
        code: "han_the_cu",
        is_valid_greater: false,
        //record_type: ["606a", "606b"]

      },
      {
        code: "thoi_diem_ghi_bhyt",
        is_valid_greater: false
      },
      {
        code: "thoi_diem_de_nghi_thay_doi",
        is_valid_greater: false
      },
      {
        code: "vtvl_tu_ngay",
        is_valid_greater: true
      },
      {
        code: "vtvl_den_ngay",
        is_valid_greater: false
      },
      {
        code: "hdld_ngay_ky",
        is_valid_greater: true
      },
      {
        code: "hdld_tu_ngay",
        is_valid_greater: true
      },
      {
        code: "hdld_den_ngay",
        is_valid_greater: false
      },
      {
        code: "nndh_tu_ngay",
        is_valid_greater: true
      },
      {
        code: "nndh_den_ngay",
        is_valid_greater: false
      },
      {
        code: "tu_ngay",
        is_valid_greater: true
      },
      {
        code: "den_ngay",
        is_valid_greater: true
      },
      {
        code: "den_ngay",
        is_valid_greater: false,
        record_type: ["630", "630a", "630b", "630c"]
      },
      {
        code: "tu_ngay_don_vi",
        is_valid_greater: true
      },
      {
        code: "ngay_sinh_con",
        is_valid_greater: true
      },
      {
        code: "ngay_nhan_con",
        is_valid_greater: true
      },
      {
        code: "ngay_con_chet",
        is_valid_greater: true
      },
      {
        code: "ngay_me_chet",
        is_valid_greater: true
      },
      {
        code: "ngay_ket_luan",
        is_valid_greater: true
      },
      {
        code: "ngay_giam_dinh",
        is_valid_greater: true
      },
      {
        code: "ngay_tro_lai_lam_viec",
        is_valid_greater: true
      },
      {
        code: "ngay_giai_quyet",
        is_valid_greater: true
      },
      {
        /// kê khai ở form dạng date
        code: "ngay_cap_cmnd",
        format: "YYYY-MM-DD",
        is_valid_greater: true
      },
      {
        /// kê khai ở form dạng date
        code: "ngay_xay_ra_tnld",
        format: "YYYY-MM-DD",
        is_valid_greater: true,
        is_dx_form: true,
      },
      {
        /// kê khai ở grid
        code: "ngay_xay_ra_tnld",
        is_valid_greater: true,
        record_type: ["642a"]
      },
      {
        /// kê khai ở form dạng date
        code: "ngay_bien_ban_tnld",
        format: "YYYY-MM-DD",
        is_valid_greater: true,
        is_dx_form: true,
      },
      {
        /// kê khai ở grid
        code: "ngay_bien_ban_tnld",
        is_valid_greater: true,
        record_type: ["642a"]
      },
      {
        /// kê khai ở form dạng date
        code: "ngay_bien_ban_tngt",
        format: "YYYY-MM-DD",
        is_valid_greater: true,
        is_dx_form: true,
      },
      {
        /// kê khai ở grid
        code: "ngay_bien_ban_tngt",
        is_valid_greater: true,
        record_type: ["642a"]
      },
      {
        /// kê khai ở form dạng date
        code: "ngay_xay_ra_tnld_bnn",
        format: "YYYY-MM-DD",
        is_valid_greater: true,
        is_dx_form: true,
      },
      {
        /// kê khai ở grid
        code: "ngay_xay_ra_tnld_bnn",
        is_valid_greater: true,
        record_type: ["642a"]
      },
      {
        /// kê khai ở form dạng date
        code: "giay_kham_ngay",
        format: "YYYY-MM-DD",
        is_valid_greater: true,
        is_dx_form: true,
      },
      {
        /// kê khai ở grid
        code: "giay_kham_ngay",
        is_valid_greater: true,
        record_type: ["642a"]
      },
      {
        /// kê khai ở form dạng date
        code: "ngay_cap_giay_phep",
        format: "YYYY-MM-DD",
        is_valid_greater: true,
        is_dx_form: true,
      },
    ],
    _date_mmyyyy: [
      {
        code: "xnbs_den_thang",
        is_valid_greater: false,
      },
      {
        code: "tu_thang_nam",
        is_valid_greater: true,
      },
      {
        code: "den_thang_nam",
        is_valid_greater: true,
      },
      {
        code: "tu_thang_nam",
        is_valid_greater: false,
        record_type: ["600", "600c", "605"]
      },
      {
        code: "den_thang_nam",
        is_valid_greater: false,
        record_type: ["600", "600c", "605"]
      },
      {
        code: "bao_giam_tu_thang",
        is_valid_greater: true
      },
      {
        code: "tu_thang_hoan_tra",
        is_valid_greater: true
      }
    ],

    date_from_to: [
      {
        from: "tu_thang_nam",
        to: "den_thang_nam",
        format: "MM/YYYY"
      },
      {
        from: "vtvl_tu_ngay",
        to: "vtvl_den_ngay",
        format: "DD/MM/YYYY"
      },
      {
        from: "hdld_tu_ngay",
        to: "hdld_den_ngay",
        format: "DD/MM/YYYY"
      },
      {
        from: "nndh_tu_ngay",
        to: "nndh_den_ngay",
        format: "DD/MM/YYYY"
      },
      {
        from: "tu_ngay",
        to: "den_ngay",
        format: "DD/MM/YYYY"
      }
    ],

    percent: ['tl_nsdp_ht', 'tl_dong', 'tl_dong_hgd', 'tl_dong_bhxh',
      'tl_dong_bhtn', 'tl_dong_tnld_bnn', 'tl_nsnn_ht', 'tl_ho_tro_khac',
      'lai_suat_bhxh', 'tl_dong_bhyt', 'pc_tnvk', 'pc_tnn', 'tl_suy_giam'],
    decimal: ['ho_tro_khac', 'so_tien_dong', 'nguoi_tham_gia_dong', 'so_tien_nsdp_ho_tro', 'so_tien_nsnn_ho_tro', 'muc_thu_nhap_thang_dong_bhxh_tn'],
    boolean: ['da_co_so_bhxh', 'da_kiem_tra', 'is_nhan_ban_giay', 'dieu_kien_lam_viec', 'nghi_duong_thai', 'cha_nghi_cham_con', 'phau_thuat_thai_32', 'thay_doi_kcb'],
    tokhai: ['D05-TS', 'D03-TS'],
    ds_to_khai_thay_doi_nld: ['DSDN', 'D03-TS', 'D03-TS-TANG', 'D03-TS-GIAM', 'D05-TS']
  },
  objBtn: {
    isBtnThayThe: 'isBtnThayThe',
    isBtnThayTheToanBo: 'isBtnThayTheToanBo',
    isBtnThemTiep: 'isBtnThemTiep',
    isBtnThemMoi: 'isBtnThemMoi',
    isBtnFileMau: 'isBtnFileMau',
    isBtnFileTrang: 'isBtnFileTrang',
    isBtnFileData: 'isBtnFileData',
    isBtnYes: 'isBtnYes',
    isBtnNo: 'isBtnNo',
    isBtnCancel: 'isBtnCancel',
    isBtnDong: 'isBtnDong',
    isGhiLai: 'isGhiLai',
    isBtnLuu: 'isBtnLuu',
    isHtml: 'isHtml',
    isKeKhaiNgay: 'isKeKhaiNgay',
    isKeKhaiSau: 'isKeKhaiSau',
    isBtnGiaHan: 'isBtnGiaHan',
    isBtnThanhToan: 'isBtnThanhToan',
    isShowNotify: 'isShowNotify',
    isBtnDongY: 'isBtnDongY',
    isBtnKiemTraLai: 'isBtnKiemTraLai',
    isSuaTrucTiep: 'isSuaTrucTiep',
    isSuaTrenFileExcel: 'isSuaTrenFileExcel'
  },
  phuong_an: {
    bao_tang:
    {
      _tang_moi: "TM"
    }
  },
  phuong_thuc_dong: {
    ve_sau: "VS",
    con_thieu: "TH"
  },
  ThoiHan:
  {
    HetHan: 'HET_HAN',
    DaHetHan: 'DA_HET_HAN',
    ThangNay: 'THANG_NAY',
    ThangToi: 'THANG_TOI',
    HaiThangToi: 'HAI_THANG_TOI',
    BaThangToi: 'BA_THANG_TOI',
    DangDong: 'DANG_DONG',
  },
  fields:
  {
    listtype: '&fields[]=id&fields[]=code&fields[]=name&fields[]=status&fields[]=modify_able&fields[]=updated_at'
  },
  loaibaocao:
  {
    D11b_TS: 'D11b_TS',
    D11a_TS: 'D11a_TS',
    C17_TS: 'C17_TS',
    TH_KQ_GIAO_DICH: 'TH_KQ_GIAO_DICH',
    Th_bhyt_truot_tai_tuc: 'Th_bhyt_truot_tai_tuc'
  },
  verified_2fa: {
    GG_AUTHENCATOR: "GG_AUTHENCATOR",
    OTP_MAIL: "OTP_MAIL"
  }
  // valBtnConfirm: {
  //   thay_the: 'thay_the',
  //   thay_the_toan_bo: 'thay_the_toan_bo',
  //   them_tiep: 'them_tiep',
  //   file_mau: 'file_mau',
  //   file_data: 'file_data',
  //   co: 'co',
  //   luu: 'luu',
  //   ghi_lai: 'ghi_lai',
  //   ke_khai_ngay: 'ke_khai_ngay',
  //   ke_khai_sau: 'ke_khai_sau',
  //   no: 'no',
  //   gia_han: 'gia_han',
  //   thanh_toan: 'thanh_toan',
  //   dong_y: 'dong_y',
  //   dong: 'dong',
  //   huy: 'huy',
  // }
};
