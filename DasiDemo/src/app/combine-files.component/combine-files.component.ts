/**
 * ----------------------------
 * --author: Sandro del Valle--
 * ----------------------------
 */
import { Component, OnInit } from '@angular/core';
import { ITableInfo } from '../interfaces/ITableInfo';
import { InvoiceHttpService } from '../services/invoice-http.service';


@Component({
  selector: 'app-combine-files',
  templateUrl: './combine-files.component.html',
  styleUrls: ['./combine-files.component.css']
})
export class CombineFilesComponent implements OnInit {

  public tableInfo: ITableInfo[];//stores all data retrieved from url
  public filteredTableInfo: ITableInfo[];//stores filtered data from tableInfo
 
  private errorMessage: string;

  //ngModel Data Binding on text field with  getter and setter
  private _invoiceNumber: string;//invoice number user text
  get invoiceNumber(): string {
    return this._invoiceNumber;
  }
  set invoiceNumber(value: string) {
    //filter data by invoice number
    this._invoiceNumber = value;
    this.filteredTableInfo = this._invoiceNumber ? this.performFilterByName(this.invoiceNumber) :
      this.filteredTableInfo = [];
  }
//-------- ends _invoiceNumber getters and setters

  public checked: boolean[]; //-----------items marked to be combined

  constructor(private _tableService: InvoiceHttpService) { }

  ngOnInit() {
    //http service retrieves data into tableInfo
    this._tableService.getTableInfo()
      .subscribe(data => this.tableInfo = data,
        error => this.errorMessage = error);
  }

  //method for search button
  // searchInvoice(value) {
  //   this.currentInvoice = [];
  //   console.log(value);
  // this.tableInfo.forEach(element => {
  //   if (element.invoiceNumber.includes(value)) {
  //     console.log(element.invoiceNumber);
  //     this.currentInvoice.push(element);
  //     this.checked.push(false);
  //     console.log(element.invoiceNumber);
  //   }
  // });
  // }

  /**
   * filter tableInfo by invoiceNumber
   * to display only the files associated 
   * to that specific invoiceNumber
   */
  performFilterByName(filterBy: string): ITableInfo[] {
    //exact match
    let currentInvoice: ITableInfo[] = [];
    filterBy = filterBy.toLocaleLowerCase();
    this.checked = [];
    this.tableInfo.forEach(element => {
      if (element.invoiceNumber == filterBy) {
        currentInvoice.push(element);
        this.checked.push(false);
        console.log(element);
      }
    });
    return currentInvoice;

    //not exact match
    // return this.tableInfo.filter( (currentInfo: ITableInfo) =>
    //       (currentInfo.invoiceNumber.toLocaleLowerCase().indexOf( filterBy) !== -1 );
  }

  /**
   * method for combine button click event
   * put all marked items into an array to be combined 
  */
  combine() {
    console.log("combine button click");
    let combineItems: ITableInfo[] = [];//---items to combine

    //validation with alerts
    if (this.invoiceNumber === undefined || this.invoiceNumber == "") {
      alert("Please Enter Invoice Number");
    }
    else if (this.filteredTableInfo === undefined || this.filteredTableInfo.length == 0) {
      alert("ENTER A VALID INVOICE NUMBER!!!");
    }
    else {
      //get all items to combineinto combineItems array
      for (let i = 0; i < this.filteredTableInfo.length; i++) {
        if (this.checked[i]) {
          combineItems.push(this.filteredTableInfo[i]);
        }
      }
      console.log(combineItems);
      console.log(this.checked);

      //more validation with alerts and confirmation alert
      if (combineItems === undefined || combineItems.length == 0) {
        alert("Select Items to Combine");
      }
      else {
         let txt : string = "ITEMS TO COMBINE AND SEND:\n";
         combineItems.forEach(element => {
           txt = txt + "\n" + element.docName;
         });
        if (confirm(txt)) {
          //combine files action here!!!!!-------------------------->
          console.log("You pressed OK!");
        } else {
          console.log("You pressed Cancel!");
        }
      }
    }
  }

  // --- used with click event on each checkbox to change wheter is checked or not
  isChecked(i) {
    if (!this.checked[i]) {
      this.checked[i] = true;
      
    }
    else if (this.checked[i]) {
      this.checked[i] = false;
    }
    console.log(this.checked);
  }

}
