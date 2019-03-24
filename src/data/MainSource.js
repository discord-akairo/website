import semver from 'semver';
import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'gh-pages']);
export default new DocsSource({
  id: 'main',
  name: 'Main library',
  global: 'Akairo',
  repo: 'discord-akairo/discord-akairo',
  defaultTag: 'master',
  defaultClass: 'AkairoClient',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
  tagFilter: tag => semver.gte(tag, '7.0.0'),
});
