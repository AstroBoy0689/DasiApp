/**
 * ----------------------------
 * --author: Sandro del Valle--
 * ----------------------------
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineFilesComponent } from './combine-files.component';

describe('CombineFilesComponent', () => {
  let component: CombineFilesComponent;
  let fixture: ComponentFixture<CombineFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
