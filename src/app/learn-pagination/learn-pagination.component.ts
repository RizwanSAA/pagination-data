import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { DataServiceService } from "../shared/services/data-service.service";
import { SampleData } from "../shared/models/sample-data.model";

@Component({
  selector: "app-learn-pagination",
  templateUrl: "./learn-pagination.component.html",
  styleUrls: ["./learn-pagination.component.css"]
})
export class LearnPaginationComponent implements OnInit {
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  displayedColumn$ = new BehaviorSubject<any[]>(["postId", "id", "name", "email", "body"]);
  currentPage$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(7);
  dataOnPage$ = new BehaviorSubject<any[]>([]);

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataService.getDataFromTypicode().subscribe(
      (res: SampleData) => {
        this.tableDataSource$.next(Object.values(res));
      },
      error => {
        console.log(error);
      }
    );

    combineLatest(this.tableDataSource$, this.currentPage$, this.pageSize$).subscribe(
      ([tableSource, currentPage, pageSize]) => {
        const startingIndex = (currentPage - 1) * pageSize;
        const onPage = tableSource.slice(startingIndex, startingIndex + pageSize);
        this.dataOnPage$.next(onPage);
      }
    );
  }
}
