export const objectNotEmpty = obj => {
  if (obj) {
    return !(Object.keys(obj).length === 0 && obj.constructor === Object);
  } else {
    return false
  }
};

export const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined';

export const isWebWorker =
  typeof self === 'object' &&
  self.constructor &&
  self.constructor.name === 'DedicatedWorkerGlobalScope';

export const isNode =
  typeof process !== 'undefined' &&
  process.versions != null &&
  process.versions.node != null;
