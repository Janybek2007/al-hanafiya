'use client';
import { api } from '$/shared/redux/api';
import { createSearchParams } from '$/shared/utils';
import {
	ModulesArg,
	ModulesBySlugArg,
	ModulesBySlugResponse,
	ModulesResponse
} from './types';

const moduleApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: b => ({
		modules: b.query<ModulesResponse, ModulesArg>({
			query: arg => ({
				url: `/modules/?${createSearchParams(arg)}`
			})
		}),
		moduleBySlug: b.query<ModulesBySlugResponse, ModulesBySlugArg>({
			query: arg => ({
				url: `/modules/${arg.slug}/?${createSearchParams(arg)}`
			})
		})
	})
});

export const { useModuleBySlugQuery, useModulesQuery } = moduleApi;
