import { Component, OnInit } from '@angular/core';
import { livro } from '../shared/livro';
import { LivroService } from '../shared/livro.service';

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.page.html',
  styleUrls: ['./lista-livro.page.scss'],
})
export class ListaLivroPage implements OnInit {

  listaLivro: livro[];

  constructor(private listaService: LivroService ) {
    
   }

   ngOnInit() {
      this.listar();
  }

  listar() {  
    this.listaLivro = this.listaService.getLivros();
  };

}
