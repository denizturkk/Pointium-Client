import { Component, OnInit } from "@angular/core";
import { Field } from "./models/field";
import { FieldService } from "./services/field.service";

@Component({
  selector: "field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.css"],
})
export class FieldComponent implements OnInit {
  constructor(private fieldService: FieldService) {}

  fields: Field[];
  message: string;
  dataLoaded: boolean = false;

  ngOnInit(): void {
    this.getFieldList();
  }

  getFieldList() {
    this.fieldService.getFieldList().subscribe((response) => {
      if (response.success==true) {
        this.fields = response.data;
        this.dataLoaded = true;
      } else if (!response.success) {
        this.message = response.message;
      }
    });
  }
}
