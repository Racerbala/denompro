import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-conversion",
  templateUrl: "./conversion.component.html",
  styleUrls: ["./conversion.component.css"],
})
export class ConversionComponent implements OnInit {
  constructor() {}
  denoming: any = [
    { denomination: 2000, count: 0 },
    { denomination: 500, count: 0 },
    { denomination: 200, count: 0 },
    { denomination: 100, count: 0 },
    { denomination: 50, count: 0 },
  ];

  denomination = [2000, 500, 200, 100, 50];
  counts: any = [];
  amount: any = 0;
  objectData: any;
  rem: number = 0;
  disp = false;
  cape = 0;
  total = 0;

  ngOnInit(): void {}
  convert() {
    this.counts = [];
    this.cape = 0;
    this.total = 0;
    this.rem = this.amount;
    for (let i = 0; i < this.denoming.length; i++) {
      if (this.amount > 0 && this.amount % 50 == 0) {
        this.denoming[i].count = Math.floor(
          this.rem / this.denoming[i].denomination
        );
        this.total = this.total + this.denoming[i].count;
        this.rem = this.rem % this.denoming[i].denomination;
        this.cape = i;
      } else this.amount = "please enter a valid amount";
    }
    if ((this.cape = 4)) {
      this.disp = true;
      this.counts = this.denoming;
      this.objectData = this.counts.objectData;

      console.log(this.total);
    }
  }
}
