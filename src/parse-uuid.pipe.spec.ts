import { ArgumentMetadata, HttpStatus, ParseUUIDPipe } from '@nestjs/common';

class CustomException extends Error {
  message = 'Custom message';
  statusCode = HttpStatus.I_AM_A_TEAPOT;
}

describe('ParseUUIDPipe', () => {
  test('should throw CustomException :: value is string', async () => {
    const exceptionFactory = () => new CustomException();
    const pipe = new ParseUUIDPipe({ exceptionFactory });

    await expect(pipe.transform('qwe', {} as ArgumentMetadata)).rejects.toThrow(
      CustomException,
    );
  });

  test('should throw CustomException :: value is NOT string', async () => {
    const exceptionFactory = () => new CustomException();
    const pipe = new ParseUUIDPipe({ exceptionFactory });

    await expect(
      pipe.transform(undefined, {} as ArgumentMetadata),
    ).rejects.toThrow(CustomException);
  });
});
