import { NgModule } from '@angular/core';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

@NgModule({
    imports:[
        PhotosModule,
        PhotoFormModule,
        PhotoListModule
    ]
})

export class PhotosModule{}