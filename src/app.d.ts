/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}

	interface ImportMetaEnv {
		VITE_API_BASE: string;
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
}
