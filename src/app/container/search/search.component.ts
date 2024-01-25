import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string = ''; 

@Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    
  }

  updateSearchText(inputEL:HTMLInputElement){
    //this.onSearchTextChanged = event.target.value;
    // console.log(inputEL.value);
    this.searchText= inputEL.value;
    // we are putting this line after we have set serchTxt property. if i put it before, in that case when the event is raised 
    // by that time the serachText is empty string.
    this.searchTextChanged.emit(this.searchText);

  }
  

}
