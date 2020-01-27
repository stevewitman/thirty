module.exports = {
  name: 'app0',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app0',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
