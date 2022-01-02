import { Connection, InitializeParams, URI, WorkspaceFolder } from 'vscode-languageserver';
import { IContextPackage } from './context/IContextPackage';

/**
 * 문서 정리 프로그램.
 */
export class Analyzer {
	/**
	 * 클라이언트에 열려있는 문서 패키지.
	 */
	documents = new Map<URI, IContextPackage>();

	/**
	 * 분석기 초기화 및 호출.
	 * 
	 * @returns Analyzer
	 */
	public static async initialize
		(
			connection: Connection,
			params: InitializeParams,
		): Promise<Analyzer>
	{
		console.log('Analyzer Initialized');
		const analyzer = new Analyzer();
		return analyzer;
	}

	public async analyze
		(
			uri: URI,
			document: string
		): Promise<IContextPackage>
	{
		const contextPackage: IContextPackage = {
			document: document,
		};
		this.documents.set(uri, contextPackage);
		return contextPackage;
	}
}