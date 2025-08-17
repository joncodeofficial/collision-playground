/* eslint-disable @typescript-eslint/no-explicit-any */
export type EmscriptenModule = {
  ccall: (
    ident: string,
    returnType: string | null,
    argTypes: string[] | null,
    args: any[] | null
  ) => any;

  cwrap: <T extends (...args: any[]) => any>(
    ident: string,
    returnType: string | null,
    argTypes: string[] | null
  ) => T;

  _setPause: (value: boolean) => void;

  _CircleToCircleCollision(
    x1: number,
    y1: number,
    r1: number,
    x2: number,
    y2: number,
    r2: number
  ): boolean;

  calledRun: boolean;
};
