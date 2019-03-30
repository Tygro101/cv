import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageResolverService {

  private images: {[key: string]: string} = {};
  constructor() {
    this.images["Name"] = "assets/img/highlights/name.svg";
    this.images["Email"] = "assets/img/highlights/email.svg";
    this.images["Status"] = "assets/img/highlights/status.svg";
    this.images["Phone"] = "assets/img/highlights/phone.svg";
  }

  public resolveImg(key: string): string{
    return this.images[key];
  }
}
