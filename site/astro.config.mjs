// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://trav55555.github.io',
	base: '/ai-coding-primer',
	redirects: {
		'/models/selection-guide': '/ai-coding-primer/models/capabilities/',
		'/learn/intermediate/common-mistakes': '/ai-coding-primer/learn/intermediate/effective-patterns/',
		'/tools/comparison': '/ai-coding-primer/learn/beginner/choose-your-tool/',
		'/templates/claude-md-bun': '/ai-coding-primer/templates/backend-context-files/',
		'/templates/claude-md-csharp': '/ai-coding-primer/templates/backend-context-files/',
		'/templates/claude-md-elixir': '/ai-coding-primer/templates/backend-context-files/',
		'/templates/claude-md-go': '/ai-coding-primer/templates/backend-context-files/',
		'/templates/claude-md-hypermedia': '/ai-coding-primer/templates/hypermedia-context-file/',
		'/templates/claude-md-nextjs': '/ai-coding-primer/templates/frontend-context-file/',
		'/templates/claude-md-nodejs': '/ai-coding-primer/templates/backend-context-files/',
		'/templates/claude-md-python': '/ai-coding-primer/templates/backend-context-files/',
		'/templates/claude-md-rust': '/ai-coding-primer/templates/backend-context-files/',
		'/templates/claude-md-typescript-react': '/ai-coding-primer/templates/frontend-context-file/',
		'/templates/cursorrules-bun': '/ai-coding-primer/templates/editor-project-rules/',
		'/templates/cursorrules-csharp': '/ai-coding-primer/templates/editor-project-rules/',
		'/templates/cursorrules-elixir': '/ai-coding-primer/templates/editor-project-rules/',
		'/templates/cursorrules-go': '/ai-coding-primer/templates/editor-project-rules/',
		'/templates/cursorrules-hypermedia': '/ai-coding-primer/templates/editor-project-rules/',
		'/templates/cursorrules-nextjs': '/ai-coding-primer/templates/editor-project-rules/',
		'/templates/cursorrules-nodejs': '/ai-coding-primer/templates/editor-project-rules/',
		'/templates/cursorrules-python': '/ai-coding-primer/templates/editor-project-rules/',
		'/templates/cursorrules-rust': '/ai-coding-primer/templates/editor-project-rules/',
		'/templates/cursorrules-typescript': '/ai-coding-primer/templates/editor-project-rules/',
		'/tools/agents/hermes-agent': '/ai-coding-primer/reference/agent-platform-boundaries/',
		'/tools/agents/openclaw': '/ai-coding-primer/reference/agent-platform-boundaries/',
		'/tools/cli/gemini-cli': '/ai-coding-primer/reference/retired-and-transitioned-tools/',
		'/tools/extensions/supermaven': '/ai-coding-primer/reference/retired-and-transitioned-tools/',
	},
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
					label: 'Module 1: Start Safely',
					items: [
						{ label: 'Curriculum', slug: 'learn/beginner/introduction' },
						{ label: 'Agentic Engineering', slug: 'learn/beginner/what-is-ai-coding' },
						{ label: 'Quick Security Checklist', slug: 'security/checklist' },
						{ label: 'Choose a Workflow and Stack', slug: 'learn/beginner/choose-your-tool' },
						{ label: 'Setup Checklist', slug: 'learn/beginner/setup-checklist' },
						{ label: 'Your First Session', slug: 'learn/beginner/first-session' },
					],
				},
				{
					label: 'Module 2: Work Reliably',
					items: [
						{ label: 'Agentic Development Loop', slug: 'learn/intermediate/agentic-development-loop' },
						{ label: 'Workflow Archetypes', slug: 'learn/intermediate/workflow-archetypes' },
						{ label: 'Scenario - Fix a Bug', slug: 'learn/intermediate/scenario-bug-fix' },
						{ label: 'Scenario - Add a Feature', slug: 'learn/intermediate/scenario-feature-build' },
						{ label: 'Scenario - Safe Refactor', slug: 'learn/intermediate/scenario-safe-refactor' },
						{ label: 'Effective Patterns', slug: 'learn/intermediate/effective-patterns' },
						{ label: "When It's Not Working", slug: 'learn/intermediate/troubleshooting' },
					],
				},
				{
					label: 'Module 3: Context and Autonomy',
					items: [
						{ label: 'Core Concepts', slug: 'learn/intermediate/core-concepts' },
						{ label: 'Context Engineering', slug: 'learn/intermediate/context-engineering' },
						{ label: 'AGENTS.md and Project Instructions', slug: 'learn/advanced/project-context-files' },
						{ label: 'Subagent Architectures', slug: 'learn/advanced/subagents' },
						{ label: 'Agent Harness', slug: 'learn/advanced/agent-harness' },
						{ label: 'Learning with AI', slug: 'learn/intermediate/learning-with-ai' },
						{ label: 'Autonomy Modes', slug: 'learn/intermediate/five-levels' },
					],
				},
				{
					label: 'Module 4: Team Governance',
					items: [
						{ label: 'Governance and Rollout', slug: 'team/governance' },
						{ label: 'Team Threat Model', slug: 'team/security-risks' },
						{ label: 'Privacy Review Framework', slug: 'security/privacy-comparison' },
						{ label: 'Technical Security and Data Paths', slug: 'security/deep-dive' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Research Overview', slug: 'research/overview' },
						{ label: 'Models vs Providers', slug: 'models/overview' },
						{ label: 'Current Tool Landscape', slug: 'reference/state-of-tools' },
						{ label: 'Capability Patterns', slug: 'models/capabilities' },
						{ label: 'Billing Models', slug: 'models/pricing' },
						{ label: 'Benchmarks That Matter', slug: 'models/benchmarks' },
						{ label: 'Tool Snapshots and Appendix', slug: 'reference/appendix' },
						{ label: 'Fast-Changing Information', slug: 'reference/fast-changing-info' },
						{ label: 'Retired and Transitioned Tools', slug: 'reference/retired-and-transitioned-tools' },
						{ label: 'Agent Platform Boundaries', slug: 'reference/agent-platform-boundaries' },
						{ label: 'Context-File Examples', slug: 'templates' },
					],
				},
			],
			lastUpdated: true,
		}),
	],
});
