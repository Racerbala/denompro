import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "denomination";
  amount: any = 0;
  convert() {
    if (this.amount % 50 !== 0) {
      return (this.amount = "Enter multiples of 50's");
    }
  }
}
