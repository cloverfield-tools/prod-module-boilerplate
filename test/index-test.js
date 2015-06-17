import hello from '../source/index';


describe('Tests run', () => {
  it('should pass', () => {
    expect(true).toBeTruthy();
  });


  it('should greet World', () => {
    expect(hello('World')).toEqual('Hello, World!');
  });
});
