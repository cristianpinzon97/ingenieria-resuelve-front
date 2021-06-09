import { Pipe, PipeTransform } from '@angular/core';

/**
 * Truncate text pipe
 */
@Pipe({
  name: 'truncatePipe'
})
export class TruncatePipePipe implements PipeTransform {

  /**
   * Pipe that truncante a text
   *
   * @param value text to be truncated
   * @param args maximum of caracters and decoration of the end
   * @returns truncated text
   */
  transform(value: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
   }

}
