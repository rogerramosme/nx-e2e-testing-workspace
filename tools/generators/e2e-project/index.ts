import {
  Tree,
  formatFiles,
  // installPackagesTask as installPackages,
} from '@nrwl/devkit';
// import { runTasksInSerial } from '@nrwl/workspace/src/utilities/run-tasks-in-serial';
import { addCypress } from './lib/add-cypress';
import { Schema } from './schema';

export default async function (tree: Tree, schema: Schema) {
  await addCypress(tree, schema);
  // const installPackagesTask = installPackages(tree);
  await formatFiles(tree);
}
