import { LightningElement, track } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CreateTask extends LightningElement {
  @track whoId = "";
  @track whatId = "";

  handleWhoIdChange(event) {
    this.whoId = event.target.value;
  }

  handleWhatIdChange(event) {
    this.whatId = event.target.value;
  }

  handleCreateTask() {
    const fields = {
      Subject: "Follow up",
      Status: "Not Started",
      Priority: "Normal",
      WhoId: this.whoId, // Polymorphic field for Contact or Lead
      WhatId: this.whatId // Polymorphic field for Account or Opportunity
    };

    const taskRecordInput = { apiName: "Task", fields };

    createRecord(taskRecordInput)
      .then((task) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Success",
            message: "Task created successfully",
            variant: "success"
          })
        );
      })
      .catch((error) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error creating task",
            message: error.body.message,
            variant: "error"
          })
        );
      });
  }
}
