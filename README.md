# Bug: Inconsistent data-sharing between +layout.server.ts and +layout.ts if route does not exist

In the root `+layout.server.ts` the load is defined like this:

```ts
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	return { year: 2024 };
};
```

And the in the root `+layout.ts` the load is defined like this and `ssr` is set to `false` (important!):

```ts
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = ({ data }) => {
	return { year: data.year };
};
```


When going to a route that exists `data` contains the expected `year` property. But when going to a route that does not exist `data` is suddenly null. 

This does not happen if `ssr` is set to `true`.

So to summarize:

### If route exists

- Receives data from `LayoutServerLoad` if `ssr` is `true` ✅
- Receives data from `LayoutServerLoad` if `ssr` is `false` ✅

### If route does not exist

- Receives data from `LayoutServerLoad` if `ssr` is `true` ✅
- Does **not** receive data from `LayoutServerLoad` if `ssr` is `false` ❌

