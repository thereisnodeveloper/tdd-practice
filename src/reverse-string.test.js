import reverseString  from './reverse-string';

describe(' takes a string and returns it reversed', () => {
  it('exists', () => {
    expect(reverseString).toBeDefined();
  });

  it('returns reversed string',()=>{
    expect(reverseString('bye')).toBe('eyb')
  })

  it('returns reversed string',()=>{
    expect(reverseString('hello')).toBe('olleh')
  })
});
