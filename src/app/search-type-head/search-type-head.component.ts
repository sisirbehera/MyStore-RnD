import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, map, of, switchMap, tap } from 'rxjs';
// import { ExteranlHttpService } from '../custom-http/exteranl-http.service';

@Component({
  selector: 'app-search-type-head',
  standalone: true,
  imports: [],
  templateUrl: './search-type-head.component.html',
  styleUrl: './search-type-head.component.css'
})

export class SearchTypeHeadComponent implements OnInit {
  @ViewChild('keywordSearchInput') keywordInput: ElementRef | undefined;
  @Output() setSearchKeywordEvent = new EventEmitter<{keyword: string}>();
  // let searchInput: HTMLElement | null = this.document.getElementById('search-box');
  
  results: any = [];
  showSearches: boolean = false;
  isSearching:boolean = false;
  searchedResults: any = [];

  constructor() {
    this.results = ['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen'];
    this.searchedResults = this.results;
  }

  ngOnInit() {
  	this.keywordSearch();
  }

  getResults(keyword: string): Observable<any> {
    return of(this.filterResults(keyword)) // Get the static observabel
    // return this.exteranlHttpService.fetchResults(keyword);
  }

  filterResults(keyword: string) {
    return this.results.filter((val: string) => val.toLowerCase().includes(keyword.toLowerCase()) == true )
  }

  keywordSearch() {
    // Adding keyup Event Listerner on input field
    this.keywordInput?.nativeElement?.value;
    const search$ = fromEvent(this.keywordInput?.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(300), // Wait for the user to stop typing for 300ms
      distinctUntilChanged(),
      tap(()=> this.isSearching = true),
      switchMap((searchTerm) => searchTerm && searchTerm.length > 3 ? this.getResults(searchTerm) : of<any>(this.results)),
      tap(() => {
        this.isSearching = false,
        this.showSearches = true;
      }));

      search$.subscribe(data => {
        this.isSearching = false
        this.searchedResults = data;
      })
  }

  setResult(keyword: string) {
    this.searchedResults = this.filterResults(keyword);
    this.setSearchKeywordEvent.emit({keyword});
    if(this.keywordInput) {
      this.keywordInput.nativeElement.value = keyword;
    }
    this.showSearches = false;
  }

  trackById(index: number, item: any):void{
    return item._id;
  }
  
}
