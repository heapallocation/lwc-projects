// myModal.js
import { LightningElement, api } from "lwc";

export default class MyModal extends LightningElement {
  @api headerText;
  @api ok;
  @api cancel;
  @api result;

  handleOk() {
    this.result = true;
    console.log("result is", this.result);
  }

  handleCancel() {
    this.result = false;
    console.log("result is", this.result);
  }

  handleClose() {
    this.result = false;
  }
}
