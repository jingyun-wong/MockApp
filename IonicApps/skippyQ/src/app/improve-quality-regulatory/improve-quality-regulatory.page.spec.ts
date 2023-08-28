import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImproveQualityRegulatoryPage } from './improve-quality-regulatory.page';

describe('ImproveQualityRegulatoryPage', () => {
  let component: ImproveQualityRegulatoryPage;
  let fixture: ComponentFixture<ImproveQualityRegulatoryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImproveQualityRegulatoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImproveQualityRegulatoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
