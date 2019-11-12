import { Pipe, PipeTransform } from '@angular/core';
import { Buscas } from '../services/intefaces/busca'
@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( anuncios: Buscas[],texto: string): Buscas[] {
    if( texto.length === 0 ) { return anuncios; }

    texto = texto.toLocaleLowerCase();

    return anuncios.filter( Anu => {
      return Anu.titulo.toLocaleLowerCase().includes(texto)
             || Anu.especialidade.toLocaleLowerCase().includes(texto);
    });
  }
}
