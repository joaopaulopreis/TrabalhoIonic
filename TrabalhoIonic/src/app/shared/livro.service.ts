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
                isbn: 'SDW4S5WE52S'
                
            },
            {
                id_livro: 3,
                titulo: 'As virtudes Morais',
                foto_livro: 'https://images-na.ssl-images-amazon.com/images/I/515XukOBCnL.jpg',
                autor:  'Santo Tomás de Aquino',
                isbn: 'SDW4S5WE52S'
                
            },
            {
                id_livro: 4,
                titulo: 'Guerra e Paz',
                foto_livro: 'https://cdn.ome.lt/zn4uV-QEUyGTaVIe2yKzijUXFEo=/670x0/smart/uploads/conteudo/fotos/dungeons-and-dragons-livro-do-jogador.jpg',
                autor:  'Liev Tolstói',
                isbn: 'SDW4S5WE52S'
                
            },
            {
                id_livro: 5,
                titulo: 'Democracia, o Deus que Falhou',
                foto_livro: 'https://cdn.ome.lt/zn4uV-QEUyGTaVIe2yKzijUXFEo=/670x0/smart/uploads/conteudo/fotos/dungeons-and-dragons-livro-do-jogador.jpg',
                autor:  'Hans-Hermann Hoppe',
                isbn: 'SDW4S5WE52S'
                
            },
            {
                id_livro: 6,
                titulo: 'A anatomia do estado',
                foto_livro: 'https://cdn.ome.lt/zn4uV-QEUyGTaVIe2yKzijUXFEo=/670x0/smart/uploads/conteudo/fotos/dungeons-and-dragons-livro-do-jogador.jpg',
                autor:  'Murray Rothbard',
                isbn: 'SDW4S5WE52S'
                
            },
            {
                id_livro: 7,
                titulo: 'O Capital',
                foto_livro: 'https://cdn.ome.lt/zn4uV-QEUyGTaVIe2yKzijUXFEo=/670x0/smart/uploads/conteudo/fotos/dungeons-and-dragons-livro-do-jogador.jpg',
                autor:  'Karl Marx',
                isbn: 'SDW4S5WE52S'
                
            },
            {
                id_livro: 8,
                titulo: 'Atlas Shrugged',
                foto_livro: 'https://cdn.ome.lt/zn4uV-QEUyGTaVIe2yKzijUXFEo=/670x0/smart/uploads/conteudo/fotos/dungeons-and-dragons-livro-do-jogador.jpg',
                autor:  'Ayn Rand',
                isbn: 'SDW4S5WE52S'
                
            },
            {
                id_livro: 9,
                titulo: 'O Senhor dos Anéis',
                foto_livro: 'https://cdn.ome.lt/zn4uV-QEUyGTaVIe2yKzijUXFEo=/670x0/smart/uploads/conteudo/fotos/dungeons-and-dragons-livro-do-jogador.jpg',
                autor:  'J. R. R. Tolkien',
                isbn: 'SDW4S5WE52S'
                
            },
            {
                id_livro: 10,
                titulo: 'A Psicanálise dos Contos de Fadas',
                foto_livro: 'https://cdn.ome.lt/zn4uV-QEUyGTaVIe2yKzijUXFEo=/670x0/smart/uploads/conteudo/fotos/dungeons-and-dragons-livro-do-jogador.jpg',
                autor:  'Bruno Bettelheim',
                isbn: 'SDW4S5WE52S'
                
            }
            

        
        ];
    }

    getLivros() {
        return this.livro;
    }

}

