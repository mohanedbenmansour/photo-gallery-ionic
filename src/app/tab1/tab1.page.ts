import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private photoService:PhotoService) {}
  async ngOnInit() {
    await this.photoService.loadSaved();
  }
snap(){
  this.photoService.addNewToGallery();
}
}
