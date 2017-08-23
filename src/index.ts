import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayComponent } from './Components/ArrayComponent/array.component';
import { SearchBarComponent } from './Components/SearchBarComponent/searchbar.component';
import { SampleDirective } from './sample.directive';
import { FilterByPipe } from './Pipes/filter-by.pipe';
import { SampleService } from './sample.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export * from './Components/ArrayComponent/array.component';
export * from './Components/SearchBarComponent/searchbar.component';
export * from './sample.directive';
export * from './Pipes/filter-by.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArrayComponent,
    SearchBarComponent,
    SampleDirective,
    FilterByPipe
  ],
  exports: [
    ArrayComponent,
    SearchBarComponent,
    SampleDirective,
    FilterByPipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
