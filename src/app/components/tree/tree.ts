import { Component } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { CdkNestedTreeNode } from '@angular/cdk/tree';
import { MatAnchor, MatButtonModule } from "@angular/material/button";

interface FoodNode{
  name:string;
  children?:FoodNode[];
}

@Component({
  selector: 'app-tree',
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './tree.html',
  styleUrl: './tree.scss',
})
export class Tree {

 tree_data:FoodNode[]=[
{
  name:'Fruit',
  children:[
   {name:'Apple'},
   {name:'Banana'}
  ]
},
{
  name:'Vegetables',
  children:[
    {
      name:'Green',
      children:[
        {name:'Broccoli'},
        {name:'Brussels sprouts'}
      ]

    },
    {
        name:'Orange',
        children:[
{name:'Pumpkins'},
{name:'Carrots'}
        ]
      }
  ]
}
];

 childrenAccessor=(nood:FoodNode)=>nood.children??[];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


}
