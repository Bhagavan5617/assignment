import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 10;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  onPageClick(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }

  getPaginationArray(): number[] {
    const totalPagesToShow = 8;
    const startPage = Math.max(1, this.currentPage - Math.floor(totalPagesToShow / 2));
    const endPage = Math.min(this.totalPages, startPage + totalPagesToShow - 1);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => index + startPage);
  }
}
