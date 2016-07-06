/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SweetComponent } from './sweet.component';

describe('Component: Sweet', () => {
  it('should create an instance', () => {
    let component = new SweetComponent();
    expect(component).toBeTruthy();
  });
});
