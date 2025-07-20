import type { Routes } from "@angular/router";

export const routes: Routes = [
	{ path: "", loadComponent: () => import("./home/home").then((c) => c.Home) },
];
