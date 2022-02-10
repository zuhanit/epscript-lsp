
import * as i18next from 'i18next';
import en from './files/en-us.json';
import ko from './files/ko-kr.json';

export enum languages {
	'English' = 'en',
	'Korean' = 'ko'
}

export enum keys {
	'diagnostics.duplicatedIdentifier' = 'duplicatedIdentifier',
	'diagnostics.notExist' = 'notExist',
	'diagnostics.argumentLengthNotMatch' = 'argumentLengthNotMatch',
	'diagnostics.expected' = 'expected',
	'diagnostics.butGot' = 'butGot',
	'diagnostics.property' = 'property',
	'diagnostics.doesNotExist' = 'doesNotExist',
}

const resources = {
	en: { translation: en },
	ko: { translation: ko }
};

export class LanguageManager {
	constructor() {
		i18next.init({
			lng: 'en',
			debug: true,
			resources: resources,
		});
	}

	public changeLanguage(language: languages) {
		i18next.changeLanguage(language);
	}

	public getDiagnosticsKey(key: keys) {
		return i18next.t(key);
	}
}