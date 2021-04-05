import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";
import { TranslateConfigService } from "../../translate-config.service";

@Component({
  selector: "app-tab4",
  templateUrl: "tab4.page.html",
  styleUrls: ["tab4.page.scss"],
})
export class Tab4Page implements OnInit {
  selectedLanguage: string;

  constructor(
    private translateConfigService: TranslateConfigService,
    public actionSheetController: ActionSheetController
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit(){
    if(!localStorage.getItem('appLanguage')){
      localStorage.setItem('appLanguage', "en");
      this.selectedLanguage = "en";
    }else{
     this.selectedLanguage = localStorage.getItem('appLanguage');
    }
    this.translateConfigService.setLanguage(this.selectedLanguage);
  } 

  updateLanguage(lang) {
    localStorage.setItem("appLanguage", lang);
    this.selectedLanguage = lang;
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  async changeLanguage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Choose your primary address",
      buttons: [
        {
          text: "English",
          handler: () => {
            this.updateLanguage("en");
          },
        },
        {
          text: "தமிழ்",
          handler: () => {
            this.updateLanguage("ta");
          },
        },
        {
          text: "हिंदी",
          handler: () => {
            this.updateLanguage("hi");
          },
        },
        {
          text: "عربى",
          handler: () => {
            this.updateLanguage("ar");
          },
        },
        {
          text: "Spanish",
          handler: () => {
            this.updateLanguage("es");
          },
        },
        {
          text: "Portuguese",
          handler: () => {
            this.updateLanguage("pg");
          },
        },
        {
          text: "Indonesian",
          handler: () => {
            this.updateLanguage("id");
          },
        },
        {
          text: "Urdu",
          handler: () => {
            this.updateLanguage("ur");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancelled");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
