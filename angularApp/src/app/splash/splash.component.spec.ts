/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SplashComponent } from './splash.component';

describe('Component: Splash', () => {
  it('should create an instance', () => {
    let component = new SplashComponent();
    expect(component).toBeTruthy();
  });
});
