import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any, search: string): any {
    if(!search){return products}
    let filtered = []
    for(let product of products){
      if(product.name.toLowerCase().includes(search)){
        filtered.push(product)
      }
    }
    return filtered
  }

}
