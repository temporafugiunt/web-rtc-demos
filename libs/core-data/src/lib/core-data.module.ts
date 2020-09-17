import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './status/status.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [StatusPipe],
})
export class CoreDataModule {}
