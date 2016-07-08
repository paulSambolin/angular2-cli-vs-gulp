/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SkillGridComponent } from './skill-grid.component';

describe('Component: SkillGrid', () => {
  it('should create an instance', () => {
    let component = new SkillGridComponent();
    expect(component).toBeTruthy();
  });
});
