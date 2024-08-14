import { LightningElement, api } from "lwc";
export default class BannerComponent extends LightningElement {
  @api headerText;
  @api message;
  @api bannerColor;

  renderedCallback() {
    this.template.querySelector(".banner").style.backgroundColor =
      this.bannerColor;
  }
}
