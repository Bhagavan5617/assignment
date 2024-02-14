import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';

interface ApiData {
  user_id: number;
  user_fname: string;
  user_lname: string;
  user_email: string;
  user_phone: string;
  user_password: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  data: ApiData[] = [];
  searchText: string = '';
  filterBy: string = ' ';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;
  totalRecords: number = 0;
  pagedData: number=0;

  constructor(public componentsService: ComponentsService) { }

  ngOnInit(): void {
    this.getDataWithPagination();
    console.log('totalRecords:', this.totalRecords);
console.log('pageSize:', this.pageSize);
console.log('totalPages:', this.calculatedPages());
   
  }
  getDataWithPagination() {
    
    const startIndex = (this.currentPage - 1) * this.pageSize
    const endIndex = startIndex + this.pageSize
    this.componentsService.getData().subscribe(
      (responce: any) => {
        console.log(responce)
        this.data = responce.data.slice(startIndex, endIndex)      
        this.totalRecords = responce.data.length; 
        this.totalPages = this.calculatedPages();
      }
    )
  }
  calculatedPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }

  getPagenationArray(): number[] {
    const paginateArray: number[] = [];

    for (let i = 1; i <= this.totalPages; i++) {
      paginateArray.push(i);
    }
   
    return paginateArray;
  }

  onPageClick(pageNumber: number) {
    this.currentPage = pageNumber
    this.getDataWithPagination()
    console.log(this.getPagenationArray());
  }
  calculateSerialNumber(indexOnPage: number): number {
    return (this.currentPage - 1) * this.pageSize + indexOnPage + 1;
  }

  filteredData(): ApiData[] {
    return this.data.filter(apiData => {
      if (this.filterBy === 'id') {
        return apiData.user_id.toString().includes(this.searchText);
      } else if (this.filterBy === 'name') {
        const fullName = `${apiData.user_fname} ${apiData.user_lname}`;
        return fullName.toLowerCase().includes(this.searchText.toLowerCase());
      }
      return true;
    });
  }
 

  /* getDataWithPagination(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.componentsService.getData().subscribe(
      (response: any) => {
        this.data = response.data.slice(startIndex, endIndex);
        this.totalRecords = response.data.length;
        this.totalPages = this.calculateTotalPages();
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.getDataWithPagination();
  }
  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
    this.getDataWithPagination();
  }
  getPaginationArray(): number[] {
    const totalPagesToShow = 8;
    const startPage = Math.max(1, this.currentPage - Math.floor(totalPagesToShow / 2));
    const endPage = Math.min(startPage + totalPagesToShow - 1, this.totalPages);  
    const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, index) => index + startPage);  
    const pagesWithFirstTwo = Array.from({ length: Math.min(2, this.totalPages) }, (_, index) => index + 1);  
    if (visiblePages[visiblePages.length - 1] < this.totalPages) {
      visiblePages.push(-1); 
    }

    return [...pagesWithFirstTwo, ...visiblePages];
  }

  calculateTotalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }*/        
     

}
