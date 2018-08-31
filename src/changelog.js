const conventionalChangelog = require('conventional-changelog-core');
const conventionalChangelogPresetLoader = require('conventional-changelog-preset-loader');
const fs = require('fs');

/**
 * Generate a changelog between two commits
 * @param {Object} params
 * @param {string} params.to - The commit to go upto
 * @param {string} params.from - The commit to start from
 * @param {string} params.type - Type of preset
 * @param {string} params.outfile - output file
 */
const changeLogBetweenCommits = (params) => {
  if (!params.to || !params.from) {
    console.warn('Missing params: Provide current and previous commit to generate a changelog');
    return null;
  }
  const options = {
    append: true,
    config: conventionalChangelogPresetLoader(params.type || 'angular'),
  };
  const context = {
    version: params.to,
  };
  const gitRawCommitsOptions = {
    from: params.from,
    to: params.to,
  };
  return conventionalChangelog(
    options,
    context,
    gitRawCommitsOptions
  )
  .pipe(
    !params.outfile ?
      process.stdout :
      fs.createWriteStream(params.outfile, { 'flags': 'a' })
  );
};

module.exports = changeLogBetweenCommits;
