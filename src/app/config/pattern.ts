export const pattern = {
  email: /^(([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))*$/,
  phone: /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/,
  password: /^.{6,}$/,
  password_advan: /^(?=.*\d)(?=.*[a-z]).{6,}$/, // it nhat co 1 chu so va 1 chu cai, tu 6 ky tu tro len
  name: /^[^0-9]+$/,
  tax_code: /^(([0-9]{10})(\-[0-9]{3})?$)|(^[12378][0-9]{6})$/,
  ten_number: /^[0-9]{10}$/,
  fifteen_number_char: /^[a-zA-Z0-9]{15}$/,
  ho_va_ten: /[a-zA-Z]$/,
  only_number: /^[0-9]+$/,
  dob_ngay_thang_nam: /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])[/](0[1-9]|1[0-2])[/](1[8-9]|2[0])\d{2}$|^(0[1-9]|1[0-2])[/](1[8-9]|2[0])\d{2}$|^(1[8-9]|2[0])\d{2}$/,
  phone_infor: /^\d{1,20}$/,
  insurrance_code: /^\d{10}$/,
  close_rate: /^(0)[.]\d+$|^[1-9][.]\d{3,4}$/,
  percent: /^(0)[.]\d{1,2}$/,
  he_so: /^\d{1,3}$|^\d{1,3}[.]\d{1,3}$/,
  so_thang: /^\d{1,3}$/,
  identity_card_number: /^[a-zA-Z]\d{8}$|^\d{9}$|^\d{12}$/,
  wage: /^[1-9]$|^[1-9]\d{1,9}$/,
  start_number: /^\d+[.]*\d+$/,
  rate_percent: /^\d[.]*\d*$/,
  percentFormat: /^\d{1,2}$/,
  rate_nsnnht: /^[0-9][.]\d{1,2}$|^[0-9]$/,
  bank_number: /^\d{1,50}$/,
  kcb_code: /^\d{2}[-]\d{3}/,
  email_reg: /^[a-zA-Z0-9_]+[@](([a-zA-Z0-9_]+[.][a-zA-Z0-9_]+)|([a-zA-Z0-9_]+[.][a-zA-Z0-9_]+[.][a-zA-Z0-9_]{2,}))$/,
  full_name_vn: /^[a-z A-Z 'àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]+$/,
  dob_thang_nam: /^(0[1-9]|1[0-2])[/](1[8-9]|2[0])\d{2}$|^(0[1-9]|1[0-2])[/](1[8-9]|2[0])\d{2}$|^(1[8-9]|2[0])\d{2}$/,
  //full_name_vn: /^[a-z A-Z]*$/, 

};
