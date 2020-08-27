import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-conversion",
  templateUrl: "./conversion.component.html",
  styleUrls: ["./conversion.component.css"],
})
export class ConversionComponent implements OnInit {
  constructor() {}
  amount: any = 0;
  denom2: number = 0;
  denom5: number = 0;
  denom20: number = 0;
  denom10: number = 0;
  denom50: number = 0;
  quo: number = 0;
  disp = false;

  ngOnInit(): void {}
  convert() {
    if (this.amount % 50 !== 0) {
      this.disp = false;
      return (this.amount = "Enter multiples of 50's");
    } else this.disp = true;
    if (this.amount >= 2000) {
      this.denom2 = Math.floor(this.amount / 2000);
      this.quo = this.amount % 2000;
      this.amount = this.quo;
    } else this.denom2 = 0;
    if (this.amount >= 500) {
      this.denom5 = Math.floor(this.amount / 500);
      this.quo = this.amount % 500;
      this.amount = this.quo;
    } else this.denom5 = 0;
    if (this.amount >= 200) {
      this.denom20 = Math.floor(this.amount / 200);
      this.quo = this.amount % 200;
      this.amount = this.quo;
    } else this.denom20 = 0;
    if (this.amount >= 100) {
      this.denom10 = Math.floor(this.amount / 100);
      this.quo = this.amount % 100;
      this.amount = this.quo;
    } else this.denom10 = 0;
    if (this.amount >= 50) {
      this.denom50 = Math.floor(this.amount / 50);
      this.quo = this.amount % 50;
      this.amount = this.quo;
    } else this.denom50 = 0;
  }
}
