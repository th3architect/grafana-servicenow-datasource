export class Annotation {
  title = '';
  text = '';
  tags: string[] = [];
  time: number = new Date().getTime();
  timeEnd?: number;
}
