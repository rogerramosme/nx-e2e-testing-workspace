import { cypressProjectGenerator } from '@nrwl/cypress';
import { Tree } from '@nrwl/devkit';
import { Schema } from '../schema';

export async function addCypress(host: Tree, options: Schema) {
  return await cypressProjectGenerator(host, {
    ...options,
    name: `${options.name}-e2e`,
    baseUrl: options.projectUrl
  });
}
