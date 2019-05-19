import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CdkTableModule } from "@angular/cdk/table";
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { LearnPaginationComponent } from "./learn-pagination/learn-pagination.component";

@NgModule({
  declarations: [AppComponent, LearnPaginationComponent],
  imports: [BrowserModule, CdkTableModule, HttpClientModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
