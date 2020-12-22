import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MmseService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = "https://localhost:44363/api";

  formModel = this.fb.group({
    DataSubmit: Date,
    YearQuestion : [''],
    SeasonQuestion : [''],
    DayQuestion : [''],
    MonthQuestion : [''],
    DateQuestion : Date,
    CountryQuestion : [''],
    RegionQuestion : [''],
    CityQuestion : [''],
    HomeAddressQuestion : [''],
    NumberBuildingQuestion : 0,
    FirstObject : [''],
    SecondObject : [''],
    ThirdObject : [''],
    FirstCount : 0,
    SecondCount : 0,
    ThirdCount : 0,
    FourthCount : 0,
    FifthCount : 0,
    IsFirstObject : [''],
    IsSecondObject : [''],
    IsThirdObject : [''],
    FirstShownObject : [''],
    SecondShownObject : [''],
    RepeatPhrase : [''],
    FirstTask : false,
    SecondTask : false,
    ThirdTask : false,
    FourthTask : false,
    WriteSentence : [''],
    DrawPicture : false,
    Score : 0,
    Description : ['']

  })

  fillTest(){
    var body = {
      DataSubmit : this.formModel.value.DateQuestion,
      YearQuestion : this.formModel.value.YearQuestion,
      SeasonQuestion : this.formModel.value.SeasonQuestion,
      DayQuestion : this.formModel.value.DayQuestion,
      MonthQuestion : this.formModel.value.MonthQuestion,
      DateQuestion : this.formModel.value.DateQuestion,
      CountryQuestion : this.formModel.value.CountryQuestion,
      RegionQuestion : this.formModel.value.RegionQuestion,
      CityQuestion : this.formModel.value.CityQuestion,
      HomeAddressQuestion : this.formModel.value.HomeAddressQuestion,
      NumberBuildingQuestion : this.formModel.value.NumberBuildingQuestion,
      FirstObject : this.formModel.value.FirstObject,
      SecondObject : this.formModel.value.SecondObject,
      ThirdObject : this.formModel.value.ThirdObject,
      FirstCount : this.formModel.value.FirstCount,
      SecondCount : this.formModel.value.SecondCount,
      ThirdCount : this.formModel.value.ThirdCount,
      FourthCount : this.formModel.value.FourthCount,
      FifthCount : this.formModel.value.FifthCount,
      IsFirstObject : this.formModel.value.IsFirstObject,
      IsSecondObject : this.formModel.value.IsSecondObject,
      IsThirdObject : this.formModel.value.IsThirdObject,
      FirstShownObject : this.formModel.value.FirstShownObject,
      SecondShownObject : this.formModel.value.SecondShownObject,
      RepeatPhrase : this.formModel.value.RepeatPhrase,
      FirstTask : this.formModel.value.FirstTask,
      SecondTask : this.formModel.value.SecondTask,
      ThirdTask : this.formModel.value.ThirdTask,
      FourthTask : this.formModel.value.FourthTask,
      WriteSentence : this.formModel.value.WriteSentence,
      DrawPicture : this.formModel.value.DrawPicture,
      Score : this.formModel.value.Score,
      Description : this.formModel.value.Description
    };
    return this.http.post(this.BaseURI + '/Mmse', body);
  }
  countResult() {
    var body = {
      Score : this.formModel.value.Score,
      Description : this.formModel.value.Description
    }
    return this.http.put(this.BaseURI + '/MmseResult', body)
  }
}
