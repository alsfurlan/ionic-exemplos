import { Component } from '@angular/core';
import { Livro } from './livro.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private livros: Array<Livro>;
  
  constructor() {
    let livro1 = new Livro('JavaScript: O guia definitivo',  'David Flanagan', '856583719X');
    let livro2 = new Livro('O melhor do JavaScript', 'Douglas Crockford', '8576082799');

    this.livros = new Array<Livro>(livro1, livro2);
  }

}
