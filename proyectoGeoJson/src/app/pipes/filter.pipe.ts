import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(args == '' || args.length < 3) return value;
    const resultUsers = [];
    for(const user of value){
      if(user.numero_identificacion_id.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resultUsers.push(user);
      };
    };
    return resultUsers;
  }

}
