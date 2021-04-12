import { getCurrencySymbol } from '@angular/common';
import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { dataValue } from './dataValue'
import { FetchresultService } from './fetchresult.service';
//import { logWarnings } from 'protractor/built/driverProviders';


const ELEMENT_DATA: dataValue[] = [
  {caseNo: 1900013, branch: 'Branch3', reportingMethod: 'In Person', date: '12-02-2021', time: '12:35:02', category:'Grievance',  subCategory:'Complaints', priority:'low', nature:'Health', caseManager:'Daryl', caseReporter:'Tanner', caseStatus:'Not Prepared'},
  {caseNo: 1900014, branch: 'Branch2', reportingMethod: 'Call', date: '15-02-2021', time: '12:35:02', category:'Grievance',  subCategory:'Query', priority:'medium', nature:'Transport', caseManager:'Titus', caseReporter:'Clinton', caseStatus:'Progress'},
  {caseNo: 1900015, branch: 'Branch3', reportingMethod: 'In Person', date: '17-02-2021', time: '12:35:02', category:'Employement',  subCategory:'Complaints', priority:'high', nature:'Health', caseManager:'Alfonzo', caseReporter:'Tanner', caseStatus:'Not Prepared'},
  {caseNo: 1900016, branch: 'Branch2', reportingMethod: 'Call', date: '19-02-2021', time: '12:35:02', category:'Grievance',  subCategory:'Query', priority:'medium', nature:'Health', caseManager:'Leif', caseReporter:'Clinton', caseStatus:'Progress'},
  {caseNo: 1900017, branch: 'Branch3', reportingMethod: 'In Person', date: '20-02-2021', time: '12:35:02', category:'Employement',  subCategory:'Complaints', priority:'high', nature:'Transport', caseManager:'Geoffrey', caseReporter:'Tanner', caseStatus:'Not Prepared'},
  {caseNo: 1900018, branch: 'Branch2', reportingMethod: 'Call', date: '23-02-2021', time: '12:35:02', category:'Security',  subCategory:'Query', priority:'medium', nature:'Transport', caseManager:'Elmer', caseReporter:'Clinton', caseStatus:'Progress'},
  {caseNo: 1900019, branch: 'Branch3', reportingMethod: 'In Person', date: '28-02-2021', time: '12:35:02', category:'Employement',  subCategory:'Complaints', priority:'high', nature:'Transport', caseManager:'Geoffrey', caseReporter:'Tanner', caseStatus:'Not Prepared'},
  {caseNo: 1900020, branch: 'Branch2', reportingMethod: 'Call', date: '09-03-2021', time: '12:35:02', category:'Security',  subCategory:'Query', priority:'medium', nature:'Transport', caseManager:'Elmer', caseReporter:'Clinton', caseStatus:'Progress'},
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit ,OnInit {
  displayedColumns: string[] = ['caseNo', 'branch', 'reportingMethod',
  'date','time','category', 'subCategory', 'priority','nature','caseManager','caseReporter', 'caseStatus'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private fetchresultService : FetchresultService){
      
  }

  ngOnInit(){
    
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
    
  getColor(priority:any){
  
    if(priority.priority=="low"){
      priority.priority="low"
    }
    else if(priority.priority=="high")
    priority.priority="high"

    else 
    priority.priority="medium";
  
  }
  
  isMenuOpen = false;
  contentMargin = 240; 

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  // sidenavEvents(str) {
  //   console.log(str);
  // }
}
