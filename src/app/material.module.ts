import { NgModule } from '@angular/core';
import {
    MatInputModule, MatButtonModule, MatSelectModule, MatIconModule
} from '@angular/material';
@NgModule({
    exports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule
    ]
})

export class MaterialModule { }
