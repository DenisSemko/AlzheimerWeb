import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { NotesService } from 'src/app/shared/notes.service';
import { Note } from 'src/app/shared/notesModel.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();

  @ViewChild('filterInput') filterInputElRef: ElementRef<HTMLInputElement>;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getAll();
    this.filter('');
    
  }

  deleteNote(note: Note) {
    let nodeId = this.notesService.getId(note);
    this.notesService.delete(nodeId);
    this.filter(this.filterInputElRef.nativeElement.value);
  }

  generateNoteUrl(note: Note) {
    let noteId = this.notesService.getId(note);
    return noteId;
  }

  filter(query: string) {
    query = query.toLowerCase().trim();

    let allResults: Note[] = new Array<Note>();
    let terms: string[] = query.split(' ');
    terms = this.removeDuplicates(terms);
    terms.forEach(term => {
      let results: Note[] = this.relevantNotes(term);
      allResults = [...allResults, ...results]
    });

    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotes = uniqueResults;
    this.sortByRelevancy(allResults);
  }
  removeDuplicates(arr: Array<any>) : Array<any> {
    let uniqueResults: Set<any> = new Set<any>();
    arr.forEach(e => uniqueResults.add(e));

    return Array.from(uniqueResults);
  }
  relevantNotes(query: string) : Array<Note> {
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note => {
      if (note.title && note.title.toLowerCase().includes(query)) {
        return true;
      }
      if (note.body && note.body.toLowerCase().includes(query)) {
        return true;
      }
      return false;
    })

    return relevantNotes;
  }
  sortByRelevancy(searchResults: Note[]) {

    let noteCountObj: Object = {}; // format - key:value => NoteId:number (note object id : count)

    searchResults.forEach(note => {

      if (noteCountObj[note._id]) {
        noteCountObj[note._id] += 1;
      } else {
        noteCountObj[note._id] = 1;
      }
    })

    this.filteredNotes = this.filteredNotes.sort((a: Note, b: Note) => {

      let aCount = noteCountObj[a._id];
      let bCount = noteCountObj[b._id];

      return bCount - aCount;
    })
  }
}


