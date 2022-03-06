import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CenterMatrixService } from '../../services/center-matrix.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tss-job-interview-list-center-matrix',
  templateUrl: './list-center-matrix.component.html',
  styleUrls: ['./list-center-matrix.component.scss']
})
export class ListCenterMatrixComponent implements OnInit {

  // @ts-ignore
  @ViewChild('deleteModal') deleteModal: ElementRef;

  listCenterMatrix: any;
  idMatrix: number | undefined;
  constructor(private centerMatrixService: CenterMatrixService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMatrixCenter();
  }

  getAllMatrixCenter(){
    this.centerMatrixService.getAllCenterMatrix().subscribe(results => this.listCenterMatrix = results);
  }

  onHandleDelete(){
    this.centerMatrixService.deleteCenterMatrixById(this.idMatrix).subscribe(results => {
      this.deleteModal.nativeElement.click();
      this.navigateToList();
    });

  }

  setCurrentMatrixItemId(currentId: number | undefined){
    this.idMatrix = currentId;
  }

  navigateToList() {
    this.router.navigate(['list']).then(() => {
      this.getAllMatrixCenter();
    });
  }

}
