import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pageData } from '../../data/data'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  contentTitle:string=""
  @Input()
  contentDesc:string=""

  private id:string | null = "0"

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id =value.get("id"))
    this.setValueToComponent(this.id)
  }

  setValueToComponent(id:string | null){
    const result = pageData.filter(article => article.id == id)[0]

    this.photoCover = result.photoCover
    this.contentDesc = result.description
    this.contentTitle = result.title
  }
}
