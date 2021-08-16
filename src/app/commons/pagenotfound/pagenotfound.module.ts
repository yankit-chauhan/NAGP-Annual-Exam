import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedMaterialModule } from "../shared.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        SharedMaterialModule
    ],
    exports: [
        PageNotFoundComponent
    ]
})

export class PageNotFoundModule {
    constructor() {
        console.log("Page Not Found Module Loaded");
    }
}