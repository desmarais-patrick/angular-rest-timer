import { TimeLeftPipe } from './time-left.pipe';

describe('TimeLeftPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeLeftPipe();
    expect(pipe).toBeTruthy();
  });
  it('format positive minutes', () => {
    const pipe = new TimeLeftPipe();
    expect(pipe.transform(0)).toEqual("0m");
    expect(pipe.transform(30)).toEqual("30m");
  });
  it('format negative minutes to default', () => {
    const pipe = new TimeLeftPipe();
    expect(pipe.transform(-1)).toEqual("0m");
  });
});
