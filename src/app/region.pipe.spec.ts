import { RegionPipe } from './region.pipe';
import { Region } from './region';

describe('RegionPipe', () => {
  it('formats each region as its full name', () => {
    const pipe = new RegionPipe();

    expect(pipe.transform(Region.NA)).toBe('North America');
    expect(pipe.transform(Region.EUW)).toBe('Europe West');
    expect(pipe.transform(Region.KR)).toBe('Korea');
  });
});
