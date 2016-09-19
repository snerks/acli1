import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Acli1AppComponent } from '../app/acli1.component';

beforeEachProviders(() => [Acli1AppComponent]);

describe('App: Acli1', () => {
  it('should create the app',
      inject([Acli1AppComponent], (app: Acli1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'acli1 works!\'',
      inject([Acli1AppComponent], (app: Acli1AppComponent) => {
    expect(app.title).toEqual('acli1 works!');
  }));
});
