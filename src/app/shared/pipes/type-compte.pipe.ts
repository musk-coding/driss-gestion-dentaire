import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeCompte'
})
export class TypeComptePipe implements PipeTransform {

  transform(value: string): string {
    if(value=="true") return "Administrateur";
    else return "Utilisateur";
  }

}
