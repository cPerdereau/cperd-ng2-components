import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayComponent } from './array.component';
import { SampleDirective } from './sample.directive';
import { FilterByPipe } from './filter-by.pipe';
import { SampleService } from './sample.service';

export * from './array.component';
export * from './sample.directive';
export * from './filter-by.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArrayComponent,
    SampleDirective,
    FilterByPipe
  ],
  exports: [
    ArrayComponent,
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
