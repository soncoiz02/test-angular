import notify from 'devextreme/ui/notify';
import { confirm } from 'devextreme/ui/dialog';
declare var $: any;




export class Library {

  constructor(
  ) {
  }

  /**
   * message: Thông báo cần hiển thị
   * type: Success; error;
   *
   */
  static notify(message: any, type: any, timeout = 20000, position = 'top center', offset = '0 20') {
    Library.hideloading();
    console.log(message);
    notify({
      position: { at: position, my: position, offset: offset },
      width: "350px",
      message: message,
      closeOnClick: true,
      closeOnOutsideClick: true,
      closeOnBackButton: true
    }, type, timeout);
  }
  // static notify1(message, type, bsModalRef, modalService) {
  //   Library.hideloading();
  //   const initialState = {
  //     typeModel: type == sEnum.statusApi.success ? sEnum.modal_confirm.confirm : sEnum.modal_confirm.error,
  //     textContent: message,
  //     textContentWhy: '',
  //     dataBtn: {
  //       isBtnDong: true,
  //     }
  //   };
  //   bsModalRef = modalService.show(ModalConfirmComponent, {
  //     class: 'second modal-margin-calc-380',
  //     initialState,
  //     backdrop: 'static',
  //     keyboard: false
  //   });
  //   // const subscription = this.modalService.onHide.subscribe(
  //   //   () => {
  //   //     subscription.unsubscribe();
  //   //     if (this.bsModalRef.content.successModalConfirm === sEnum.objBtn.isBtnFileMau) {
  //   //       this.fileTrang();

  //   //     } else if (this.bsModalRef.content.successModalConfirm === 'file_data') {
  //   //       this.fileCoDuLieu();
  //   //     }
  //   //   }
  //   // );
  // }

  static confirm(message: any, header: any) {
    return confirm(message, header);
  }

  static confirmVA(message: any, header: any, callback: any) {
    let check = confirm(message, header);
    check.then((dialogResult) => {
      if (dialogResult) {
        callback();
      }
    });
  }

  static showloading() {
    let html = '<div class="app-loading"><svg class="spinner" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/></svg></div>';
    $("#app-loading").html(html);
  }

  static hideloading() {
    $("#app-loading").html('');
  }

}
