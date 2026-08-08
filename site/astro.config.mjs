// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://trav55555.github.io',
	base: '/ai-coding-primer',
	integrations: [
		starlight({
			customCss: ['/src/styles/custom.css'],
			title: 'Agentic Engineering Primer',
			description:
				'Start safely, choose a workflow and stack that fit how you work, and learn the patterns that make AI-assisted engineering reliable.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Trav55555/ai-coding-primer' },
			],
			editLink: {
				baseUrl: 'https://github.com/Trav55555/ai-coding-primer/edit/main/site/',
			},
			sidebar: [
				{
					label: 'Start Safely',
					items: [
						{ label: 'Introduction', slug: 'learn/beginner/introduction' },
						{ label: 'Agentic Engineering', slug: 'learn/beginner/what-is-ai-coding' },
						{ label: 'Quick Security Checklist', slug: 'security/checklist' },
						{ label: 'Setup Checklist', slug: 'learn/beginner/setup-checklist' },
						{ label: 'Your First Session', slug: 'learn/beginner/first-session' },
					],
				},
				{
					label: 'Work Reliably',
					items: [
						{ label: 'Workflow Archetypes', slug: 'learn/intermediate/workflow-archetypes' },
						{ label: 'Scenario - Fix a Bug', slug: 'learn/intermediate/scenario-bug-fix' },
						{ label: 'Scenario - Add a Feature', slug: 'learn/intermediate/scenario-feature-build' },
						{ label: 'Scenario - Safe Refactor', slug: 'learn/intermediate/scenario-safe-refactor' },
						{ label: 'Effective Patterns', slug: 'learn/intermediate/effective-patterns' },
						{ label: "When It's Not Working", slug: 'learn/intermediate/troubleshooting' },
					],
				},
				{
					label: 'Choose a Workflow and Stack',
					items: [
						{ label: 'Choose a Workflow and Stack', slug: 'learn/beginner/choose-your-tool' },
						{ label: 'Workflow and Stack Criteria', slug: 'tools/comparison' },
						{ label: 'Models vs Providers', slug: 'models/overview' },
						{ label: 'Capability Patterns', slug: 'models/capabilities' },
						{ label: 'Billing Models', slug: 'models/pricing' },
						{ label: 'Selection Guide', slug: 'models/selection-guide' },
					],
				},
				{
					label: 'Control Context',
					items: [
						{ label: 'Core Concepts', slug: 'learn/intermediate/core-concepts' },
						{ label: 'Context Engineering', slug: 'learn/intermediate/context-engineering' },
						{ label: 'Project Context Files', slug: 'learn/advanced/project-context-files' },
						{ label: 'Subagent Architectures', slug: 'learn/advanced/subagents' },
						{ label: 'Agent Harness', slug: 'learn/advanced/agent-harness' },
					],
				},
				{
					label: 'Learn Without Dependency',
					items: [
						{ label: 'Learning with AI', slug: 'learn/intermediate/learning-with-ai' },
						{ label: 'Common Mistakes', slug: 'learn/intermediate/common-mistakes' },
						{ label: 'The Five Levels (Optional Lens)', slug: 'learn/intermediate/five-levels' },
					],
				},
				{
					label: 'Team Adoption',
					items: [
						{ label: 'Governance and Rollout', slug: 'team/governance' },
						{ label: 'Security Risks', slug: 'team/security-risks' },
						{ label: 'Adoption & Trends', slug: 'research/adoption-trends' },
						{ label: 'Code Quality & Security', slug: 'research/code-quality-security' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Development Practices Timeline', slug: 'reference/development-practices-timeline' },
						{ label: 'Reference Appendix', slug: 'reference/appendix' },
						{ label: 'Fast-Changing Information', slug: 'reference/fast-changing-info' },
						{
							label: 'Research and Evidence',
							items: [
								{ label: 'Research Overview', slug: 'research/overview' },
								{ label: 'Productivity Research', slug: 'research/productivity' },
								{ label: 'Learning Impacts', slug: 'research/learning-impacts' },
							],
						},
						{
							label: 'Security, Privacy, and Benchmarks',
							items: [
								{ label: 'Privacy Comparison', slug: 'security/privacy-comparison' },
								{ label: 'Privacy Deep Dive', slug: 'security/deep-dive' },
								{ label: 'Benchmarks That Matter', slug: 'models/benchmarks' },
							],
						},
						{
							label: 'Advanced References',
							items: [
								{ label: 'MCP Deep Dive', slug: 'learn/advanced/mcp-deep-dive' },
								{ label: 'Skills Deep Dive', slug: 'learn/advanced/skills' },
							],
						},
						{ label: 'IDE References', autogenerate: { directory: 'tools/ides' } },
						{ label: 'Extension References', autogenerate: { directory: 'tools/extensions' } },
						{ label: 'CLI References', autogenerate: { directory: 'tools/cli' } },
						{ label: 'Agent Platform References', autogenerate: { directory: 'tools/agents' } },
						{ label: 'Templates', autogenerate: { directory: 'templates' } },
					],
				},
			],
			lastUpdated: true,
		}),
	],
});
