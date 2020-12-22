import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotesService } from 'src/app/shared/notes.service';
import { Note } from 'src/app/shared/notesModel.model';

@Component({
  selector: 'app-notes-body',
  templateUrl: './notes-body.component.html',
  styleUrls: ['./notes-body.component.scss']
})
export class NotesBodyComponent implements OnInit {
  
  note: Note;
  noteId: number;
  new: boolean;
  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if(params.id) {
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      } else {
        this.new = true;
      }
    })

  }

    onSubmit(form:NgForm) {
      if(this.new) {
        this.notesService.add(form.value);
      } else {
        this.notesService.update(this.noteId, form.value.title, form.value.body )
      }
      this.router.navigateByUrl('/patient/account');
    }
    
    cancel() {
      this.router.navigateByUrl('/patient/account');
    }
}
