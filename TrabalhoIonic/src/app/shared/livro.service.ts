import { Injectable } from '@angular/core';
import { livro } from './livro';

@Injectable({
    providedIn: 'root'
  })

export class LivroService {

    private livro: livro[];

    constructor(){

        this.livro = [
            {
                id_livro: 1,
                titulo: 'A arter da ficção',
                foto_livro: 'https://images-na.ssl-images-amazon.com/images/I/71p+xo5VOHL.jpg',
                autor:  'David lodge',
                isbn: 'SDW4S5WE52S'
                
            },
            {
                id_livro: 2,
                titulo: 'A arte de escrever',
                foto_livro: 'https://images-na.ssl-images-amazon.com/images/I/81bnAIdhStL.jpg',
                autor:  'Arthur Schopenhaur',
                isbn: 'SDDE4DES5SR'
                
            },
            {
                id_livro: 3,
                titulo: 'As virtudes Morais',
                foto_livro: 'https://images-na.ssl-images-amazon.com/images/I/515XukOBCnL.jpg',
                autor:  'Santo Tomás de Aquino',
                isbn: 'SDS5ERD652V'
                
            },
            {
                id_livro: 4,
                titulo: 'Guerra e Paz',
                foto_livro: 'https://m.media-amazon.com/images/I/41z1EV7E2aL.jpg',
                autor:  'Liev Tolstói',
                isbn: 'SDW4SDWERF5'
                
            },
            {
                id_livro: 5,
                titulo: 'Democracia, o Deus que Falhou',
                foto_livro: 'https://images-na.ssl-images-amazon.com/images/I/91l5clkTUwL.jpg',
                autor:  'Hans-Hermann Hoppe',
                isbn: 'DERF5D48FRD'
                
            },
            {
                id_livro: 6,
                titulo: 'A anatomia do estado',
                foto_livro: 'https://www.letracapital.com.br/wp-content/uploads/2014/12/238-A-anatomia-do-estado.jpg',
                autor:  'Murray Rothbard',
                isbn: 'SSDFER547FD'
                
            },
            {
                id_livro: 7,
                titulo: 'O Capital',
                foto_livro: 'https://m.media-amazon.com/images/I/51rekLx0xtL.jpg',
                autor:  'Karl Marx',
                isbn: 'SFWER1585SD'
                
            },
            {
                id_livro: 8,
                titulo: 'Atlas Shrugged',
                foto_livro: 'https://images-na.ssl-images-amazon.com/images/I/612URtxh-qL.jpg',
                autor:  'Ayn Rand',
                isbn: 'SF5874DFE5S'
                
            },
            {
                id_livro: 9,
                titulo: 'O Senhor dos Anéis',
                foto_livro: 'https://images-na.ssl-images-amazon.com/images/I/51CDlkHVkaL._SX354_BO1,204,203,200_.jpg',
                autor:  'J. R. R. Tolkien',
                isbn: 'SFSFWR58721'
                
            },
            {
                id_livro: 10,
                titulo: 'A Psicanálise dos Contos de Fadas',
                foto_livro: 'https://images-na.ssl-images-amazon.com/images/I/81R1KU2OBSL.jpg',
                autor:  'Bruno Bettelheim',
                isbn: 'SSFAFWER96S'
                
            }
            

        
        ];
    }

    getLivros() {
        return this.livro;
    }

}

