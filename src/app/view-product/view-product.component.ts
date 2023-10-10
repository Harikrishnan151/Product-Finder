import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../servive/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId:string=''//To hold id of contact
  product:any=[]
  constructor(private activeRoute:ActivatedRoute, private api:ApiService){}
  

  ngOnInit(): void {
   this.activeRoute.params.subscribe((data:any)=>{
    console.log(data);
    console.log(data.Id);
    
    this.productId=data.Id
    this.api.viewProduct(this.productId).subscribe((result:any)=>{
      console.log(result);
      this.product=result

    })
    
   })
    
  }

}
