import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultUsers = [];
    for(const user of value){
      if(user.numero_identificacion_id.indexOf(args) > -1){
        resultUsers.push(user);
      };
    };
    return resultUsers;
  }

}
