<script lang="ts">
	import type { ResearchContent, LibraryLink } from '$lib/server/newt';
	export let data: {
		content: ResearchContent;
		links: {
			official: LibraryLink;
			others: LibraryLink[];
		};
	};
</script>

<h1>{data.content.name}</h1>

{#if data.content.writeStatus === 0}
	編集中です。
{/if}

<ul>
	<li>
		公式ページ: <a href={data.links.official.link}>{data.links.official.link}</a>
	</li>
	<li>
		その他リンク
		<ul>
			{#each data.links.others as link}
				<li>{link.linkTo}: <a href={link.link}>{link.link}</a></li>
			{/each}
		</ul>
	</li>
</ul>

<h2>評価</h2>

<p>使ってみた感覚での評価なので個人の意見です。5 点が満点。</p>

<table class="table-evaluation">
	<thead>
		<tr>
			<th>評価項目</th>
			<th>点数</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>使い心地</td>
			<td>
				{#if data.content.scoreUsability !== 0}
					{data.content.scoreUsability}
				{:else}
					未評価
				{/if}
			</td>
		</tr>
		<tr>
			<td>ドキュメント読み心地</td>
			<td>
				{#if data.content.scoreReadability !== 0}
					{data.content.scoreReadability}
				{:else}
					未評価
				{/if}
			</td>
		</tr>
		<tr>
			<td>実現コード量</td>
			<td>
				{#if data.content.scoreLowCode !== 0}
					{data.content.scoreLowCode}
				{:else}
					未評価
				{/if}
			</td>
		</tr>
	</tbody>
</table>

<h2>準備</h2>

{@html data.content.contentInstall}

<h2>使い方</h2>

{@html data.content.contentHowTo}

<style>
	.table-evaluation {
		border-collapse: collapse;
	}

	.table-evaluation th,
	.table-evaluation td {
		border: 1px solid black;
		padding: 1rem;
	}
</style>
