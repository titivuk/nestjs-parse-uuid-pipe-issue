import {
  Controller,
  Get,
  HttpStatus,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';

class CustomException extends Error {
  message = 'Custom message';
  statusCode = HttpStatus.I_AM_A_TEAPOT;
}

const exceptionFactory = () => new CustomException();

@Controller()
export class AppController {
  @Get('test')
  testParseUUIDPipe(
    @Query('id', new ParseUUIDPipe({ exceptionFactory })) id: string,
  ) {
    return id;
  }
}
