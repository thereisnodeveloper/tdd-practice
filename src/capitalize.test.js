/**DISABLED jest-environment jsdom */

import capitalize from './capitalize.js';

describe('capitalize', () => {
  // takes a string and returns it with the first character capitalized
  it('exists', () => {
    expect(capitalize).toBeDefined();
  });

  it('returns', () => {
    expect(capitalize('hello')).toBeDefined();
  });
  
    // it('returns 1st char capitalized', () => {
    //   expect(capitalize('goodbye')).toBe('G')
    // });
  it('returns string with 1st char capitalized', () => {
    expect(capitalize('hello')).toBe('Hello')
  });
  it('returns string with 1st char capitalized', () => {
    expect(capitalize('goodbye')).toBe('Goodbye')
  });
  // it('returns substring after 1st char',()=>{
  //   expect(capitalize('hello')).toBe('ello')
  // })
});
