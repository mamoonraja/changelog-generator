const changelog = require('./../src/changelog');

const Readable = require('stream').Readable
jest.mock('conventional-changelog-core');

describe('changelog', () => {
  beforeAll(() => {
    const conventionalChagelog = require('conventional-changelog-core');
    conventionalChagelog.mockImplementation(() => {
      var readStream = new Readable();
      readStream._read = function () {};
      readStream.push('### this is the mock log');
      return readStream;
    });
  });
  it('should throw warning and return null', () => {
    expect(changelog({})).toEqual(null);
  });

  it('should return readable stream when from and two provided', () => {
    expect(changelog({
      to: 'tag2',
      from: 'tag1',
    }).writable).toBeTruthy();
  });

  it('should return readable stream and no output file provided', () => {
    expect(changelog({
      to: 'tag2',
      from: 'tag1',
    }).path).toEqual(undefined);
  });

  it('should return readable stream with path when output file provided', () => {
    expect(changelog({
      to: 'tag2',
      from: 'tag1',
      outfile: 'out.md',
    }).path).toEqual('out.md');
  });

});


