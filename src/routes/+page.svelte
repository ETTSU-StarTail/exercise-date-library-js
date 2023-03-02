<script lang="ts">
	import type { ResearchContent } from '$lib/server/newt';

	export let data: {
		contents: ResearchContent[];
	};
</script>

<h1>JavaScript 日付ライブラリ</h1>
<p>
	このページでは <a href="https://github.com/ETTSU-StarTail">ettsu</a> が JavaScript
	の日付ライブラリの使い心地をまとめています。<br />
	個人の主観なので、実際に合うかは自ら確かめてくれ...!
</p>

<p>現在は下記のライブラリについて書かれています（ただし、編集中の可能性があります）。</p>

<ul>
	{#each data.contents as content}
		<li><a href="/date-library/{content.slug}">{content.name}</a></li>
	{/each}
</ul>
