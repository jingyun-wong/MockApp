import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CampaignDonorsPage } from './campaign-donors.page';



describe('CampaignDonorsPage', () => {
  let component: CampaignDonorsPage;
  let fixture: ComponentFixture<CampaignDonorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDonorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampaignDonorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
