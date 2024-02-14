import { Component, OnInit } from '@angular/core';
import { ToDoService } from './to-do.service';
import { AboutService } from './about.service';
interface Todo {
  id: number;
  text: string;
}
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  todos: Todo[] = [];
  newTodoText: string = '';
  products: any = [];
  newProduct: any[] = [
    {
      id: 40,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];
  constructor(
    private todoService: ToDoService,
    private aboutService: AboutService
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();

    this.getProducts();
  }
  getProducts() {
    this.aboutService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
  addToCart(product: any) {
    this.aboutService.addToCart(product);
    console.log(product);
  }

  deleteProduct(id: any) {
    this.aboutService
      .deleteProduct(id)
      .subscribe(() =>
        console.log(`Product with ID ${id} deleted successfully.`)
      );
    this.getProducts();
  }

  addProduct() {
    this.aboutService.addProducts().subscribe((response: any) => {
      this.newProduct = response;
      this.getProducts();
      console.log(response);
    });
  }

  addTodo(): void {
    if (this.newTodoText.trim()) {
      this.todoService.addTodo(this.newTodoText);
      this.newTodoText = '';
      this.todos = this.todoService.getTodos();
    }
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
