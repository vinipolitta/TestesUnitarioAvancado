import { ActionDirectiveDirective } from './action-directive.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActionModule } from './action.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ActionDirectiveDirective', () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionModule]
    }).compileComponents

  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;

  })

  it('should create an instance', () => {
    const directive = new ActionDirectiveDirective();
    expect(directive).toBeTruthy();
  });

  it('(D) (@Output appAction) should emit event with payload when ENTER is pressed', () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });

  it('(D) (@Output appAction) should emit event with payload when CLICKED', () => {
    // const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const divEl = fixture.debugElement.query(By.directive(ActionDirectiveDirective)).nativeElement;
    const event = new Event('click');
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });
});

@Component({
  template: `<div class="dummy-component"(appAction)="actionHandler($event)"></div>`
})

class ActionDirectiveTestComponent {
  private event: Event = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }
}
