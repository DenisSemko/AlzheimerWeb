import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MmseService } from 'src/app/shared/mmse.service';

@Component({
  selector: 'app-mmse',
  templateUrl: './mmse.component.html',
  styleUrls: ['./mmse.component.css']
})
export class MmseComponent implements OnInit {
   
  constructor(public service: MmseService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }
  // public eyesCheck:boolean;

  // public onSaveEyesCheckBox(value:boolean){
  //     this.eyesCheck = value;
  // }
  //#closeEyesCheckBox [checked]="eyesCheck" (change)="onSaveEyesCheckBox(closeEyesCheckBox.checked)"
    onSubmit()
  {
    this.service.fillTest().subscribe(
      (res:any) => {
          this.service.formModel.reset();
          this.toastr.success('The test has been successfully created!', 'Test completed.')
      },
      err => {
        console.log(err);
      }
    )
  }


}
