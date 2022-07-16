import { Book } from './../model/Book';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-itens',
  templateUrl: './product-itens.component.html',
  styleUrls: ['./product-itens.component.css']
})
export class ProductItensComponent implements OnInit {

  @Input()
  livro!: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
