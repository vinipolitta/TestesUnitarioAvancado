import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardService } from 'src/app/shared/services/photo-board/photo-board.service';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListModule } from '../photo-list.module';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/shared/interfaces/photo';
import { PhotoBoardMockService } from 'src/app/shared/services/photo-board-mock.service';

describe(PhotoListComponent.name + ' MOCK PROVIDER', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoListComponent],
      imports: [HttpClientModule, PhotoListModule],
      providers: [
        {
          provide: PhotoBoardService,
          useClass: PhotoBoardMockService
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(D) should display board when data arrives', () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board).withContext('Should not display boarder').not.toBeNull();
    expect(loader).withContext('Should display loader').toBeNull();
  });
});
