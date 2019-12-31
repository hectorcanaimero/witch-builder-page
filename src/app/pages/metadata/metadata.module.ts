import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetadataRoutingModule } from './metadata-routing.module';
import { MetadataComponent } from './metadata.component';


@NgModule({
  declarations: [MetadataComponent],
  imports: [
    CommonModule,
    MetadataRoutingModule
  ]
})
export class MetadataModule { }
