import { rejects } from 'assert';
import { glob } from 'glob';

export async function getEPSPaths(workspacePath: string): Promise<string[]> {
	return new Promise((resolve, reject) => {
		glob(
			'**/*.eps',
			{ cwd: workspacePath },
			(err, matches) => {
				if (err) return reject(err);
				return resolve(matches);
			} 	
		);
	});
}