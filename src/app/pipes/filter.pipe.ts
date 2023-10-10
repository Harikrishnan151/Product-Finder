import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform  {

  transform(allproduct:any[],searchTerm:string,propsname:string): any[]{
    const result:any[]=[]
    if(!allproduct||searchTerm==''||propsname==''){
      return allproduct
    }
    allproduct.forEach((product:any)=>{
      if(product[propsname].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      result.push(product)
    })
    return result;
  }

}
