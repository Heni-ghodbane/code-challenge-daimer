import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CenterMatrixService } from '../../services/center-matrix.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CenterMatrix } from '../../model';

@Component({
  selector: 'tss-job-interview-create-center-matrix',
  templateUrl: './create-center-matrix.component.html',
  styleUrls: ['./create-center-matrix.component.scss']
})
export class CreateCenterMatrixComponent implements OnInit {

  idMatrixToUpdate?: string | null;
  actionLabel?: string = 'Create';
  // @ts-ignore
  centerMatrixForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private activatedroute:ActivatedRoute, private centerMatrixService: CenterMatrixService, private router: Router, ) {
    this.idMatrixToUpdate = this.activatedroute.snapshot.paramMap.get("id");
    if(typeof  this.idMatrixToUpdate === 'string') {
      this.actionLabel = 'Update';
    }
  }

  // convenience getter for easy access to form fields
  get fields() { return this.centerMatrixForm.controls; }

  ngOnInit(): void {

    this.centerMatrixForm = this.formBuilder.group({
      id: new FormControl(''),
      center_name: new FormControl('', Validators.required),
      GSSN_COMPANYID: new FormControl('', Validators.required),
      GSSN_OUTLETID: new FormControl('', Validators.required),
      vd_name: new FormControl('', Validators.required),
      vfnr: new FormControl('', Validators.required),
      vfnr_hb: new FormControl('', Validators.required),
      mode: new FormControl('', Validators.required),
      sortorder: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      shortcut: new FormControl('', Validators.required),
      company_name: new FormControl('', Validators.required),
      branch: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      place: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
    });

    if(this.idMatrixToUpdate != null){
      this.centerMatrixService.getCenterMatrixById(this.idMatrixToUpdate).subscribe((matrixToUpdate: CenterMatrix) => {
        this.centerMatrixForm.setValue(matrixToUpdate);
      });
    }
  }

  onSubmitCenterMatrix = () => {
    this.submitted = true;

    if (this.centerMatrixForm.invalid){
      this.centerMatrixForm.markAllAsTouched();
      return;
    }
    delete this.centerMatrixForm.value.id;  // delete id;
    this.centerMatrixService.createNewCenterMatrix(this.centerMatrixForm.value).subscribe(resp => {
      this.centerMatrixForm.reset();
      this.submitted = false;

      this.navigateToList();
      console.log('Great! Center Matrix created successful.');
    });

  }

  onUpdateCenterMatrix = () => {
    this.submitted = true;

    if (this.centerMatrixForm.invalid){
      this.centerMatrixForm.markAllAsTouched();
      return;
    }

    delete this.centerMatrixForm.value.id;  // delete id;
    debugger
    this.centerMatrixService.updateNewCenterMatrix(this.centerMatrixForm.value, this.idMatrixToUpdate).subscribe(resp => {
      this.centerMatrixForm.reset();
      this.navigateToList();
      console.log('Great! Center Matrix updated successful.');
    });

  }

  navigateToList() {
    this.router.navigate(['list']).then(() => {
      window.location.reload();
    });
  }

  }
