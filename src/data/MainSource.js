import semver from 'semver';
import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'gh-pages', 'parsers', 'typehandler']);
export default new DocsSource({
  id: 'main',
  name: 'Main library',
  global: 'Akairo',
  repo: 'discord-akairo/discord-akairo',
  defaultTag: 'stable',
  defaultClass: 'AkairoClient',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
  tagFilter: tag => (semver.gte(tag, '7.5.6') && semver.lt(tag, '8.0.0-beta.1')) || semver.gt(tag, '8.0.0-beta.3'),
});
