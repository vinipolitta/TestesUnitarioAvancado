import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardService } from 'src/app/shared/services/photo-board/photo-board.service';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListModule } from '../photo-list.module';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { of } from 'rxjs';

describe(PhotoListComponent.name, () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoListComponent],
      imports: [HttpClientModule, PhotoListModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(D) should display board when data arrives', () => {
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos').and.returnValue(of(photos));
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board).withContext('Should not display boarder').not.toBeNull();
    expect(loader).withContext('Should display loader').toBeNull();
  });

  it('(D) should display loader  while waiting for data', () => {
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos').and.returnValue(null);
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board).withContext('Should not display boader').toBeNull();
    expect(loader).withContext('Should not display loader').not.toBeNull();
  });

});
