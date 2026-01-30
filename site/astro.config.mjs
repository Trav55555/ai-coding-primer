// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://trav55555.github.io',
	base: '/ai-coding-primer',
	integrations: [
		starlight({
			title: 'AI Coding Primer',
			description: 'From your first prompt to production: AI-integrated IDEs, terminal tools, and workflows.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Trav55555/ai-coding-primer' },
			],
			editLink: {
				baseUrl: 'https://github.com/Trav55555/ai-coding-primer/edit/main/site/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'learn/beginner/introduction' },
						{ label: 'What is AI Coding?', slug: 'learn/beginner/what-is-ai-coding' },
						{ label: 'Choose Your Tool', slug: 'learn/beginner/choose-your-tool' },
						{ label: 'Setup Checklist', slug: 'learn/beginner/setup-checklist' },
						{ label: 'Your First Session', slug: 'learn/beginner/first-session' },
					],
				},
				{
					label: 'Working Effectively',
					items: [
						{ label: 'Core Concepts', slug: 'learn/intermediate/core-concepts' },
						{ label: 'The Five Levels', slug: 'learn/intermediate/five-levels' },
						{ label: 'Context Engineering', slug: 'learn/intermediate/context-engineering' },
						{ label: 'Effective Patterns', slug: 'learn/intermediate/effective-patterns' },
						{ label: 'Common Mistakes', slug: 'learn/intermediate/common-mistakes' },
						{ label: 'When It\'s Not Working', slug: 'learn/intermediate/troubleshooting' },
					],
				},
				{
					label: 'Advanced',
					items: [
						{ label: 'Project Context Files', slug: 'learn/advanced/project-context-files' },
						{ label: 'MCP Deep Dive', slug: 'learn/advanced/mcp-deep-dive' },
						{ label: 'Subagent Architectures', slug: 'learn/advanced/subagents' },
					],
				},
				{
					label: 'Tools',
					items: [
						{ label: 'Tool Comparison', slug: 'tools/comparison' },
						{
							label: 'IDEs',
							autogenerate: { directory: 'tools/ides' },
						},
						{
							label: 'Extensions',
							autogenerate: { directory: 'tools/extensions' },
						},
						{
							label: 'CLI Tools',
							autogenerate: { directory: 'tools/cli' },
						},
					],
				},
				{
					label: 'Models',
					items: [
						{ label: 'Models vs Providers', slug: 'models/overview' },
						{ label: 'Capabilities Matrix', slug: 'models/capabilities' },
						{ label: 'Benchmarks', slug: 'models/benchmarks' },
						{ label: 'Pricing Guide', slug: 'models/pricing' },
						{ label: 'Selection Guide', slug: 'models/selection-guide' },
					],
				},
				{
					label: 'Security & Privacy',
					items: [
						{ label: 'Quick Checklist', slug: 'security/checklist' },
						{ label: 'Security Risks', slug: 'security/risks' },
						{ label: 'Privacy Comparison', slug: 'security/privacy-comparison' },
						{ label: 'Privacy Deep Dive', slug: 'security/deep-dive' },
					],
				},
				{
					label: 'Templates',
					autogenerate: { directory: 'templates' },
				},
			],
			lastUpdated: true,
		}),
	],
});
