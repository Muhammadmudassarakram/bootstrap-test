import { Component } from "@angular/core";
import {
  Popover,
  Tooltip,
} from "node_modules/bootstrap/dist/js/bootstrap.esm.min.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public oddNumbers: number[] = [];
  public evenNumbers: number[] = [];
  public parentClassName: string = "Hello I am Parent class";

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    Array.from(
      document.querySelectorAll('button[data-bs-toggle="popover"]')
    ).forEach((popoverNode) => new Popover(popoverNode));
    /* Array.from(document.querySelectorAll('button[data-bs-toggle="dropdown"]'))
    .forEach(dropdownNode => new Dropdown(dropdownNode)); */
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  }

  public onIntervalAdded(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

  public displayCount(data) {
    console.log(data.counter + "" + data.countIs);
  }
}
