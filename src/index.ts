import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayComponent } from './ArrayComponent/array.component';
import { SearchBarComponent } from './SearchBarComponent/searchbar.component';
import { SampleDirective } from './sample.directive';
import { FilterByPipe } from './Pipes/filter-by.pipe';
import { SampleService } from './sample.service';

export * from './ArrayComponent/array.component';
export * from './SearchBarComponent/searchbar.component';
export * from './sample.directive';
export * from './Pipes/filter-by.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule
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
