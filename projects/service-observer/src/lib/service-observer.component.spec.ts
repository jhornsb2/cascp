import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceObserverComponent } from './service-observer.component';

describe('ServiceObserverComponent', () => {
  let component: ServiceObserverComponent;
  let fixture: ComponentFixture<ServiceObserverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceObserverComponent]
    });
    fixture = TestBed.createComponent(ServiceObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
