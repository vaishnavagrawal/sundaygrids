import { clsx } from 'clsx';

export const config = {
  container: 'container mx-auto px-8',
  h1: 'text-3xl lg:text-4xl xl:text-5xl font-semibold',
  h2: 'text-2xl lg:text-3xl xl:text-4xl font-semibold',
  h3: 'text-lg lg:text-xl xl:text-2xl font-semibold',
};

export function cls(classnames: string, keys: (keyof typeof config)[]) {
  return clsx(
    classnames,
    keys.map((el) => config[el])
  );
}
