import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTileComponent } from './article-tile.component';

describe('ArticleTileComponent', () => {
  let component: ArticleTileComponent;
  let fixture: ComponentFixture<ArticleTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleTileComponent]
    });
    fixture = TestBed.createComponent(ArticleTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
