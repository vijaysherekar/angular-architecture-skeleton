import { CustomSecurityPipe } from './custom-security.pipe';

describe('CustomSecurityPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomSecurityPipe();
    expect(pipe).toBeTruthy();
  });
});
