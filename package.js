Package.describe({
    name: 'theara:fa-helpers',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'Font Awesome helper',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/rabbittc/fa-helpers.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use('underscore');
    api.use('templating', 'client');

    api.export('fa');

    api.addFiles('fa-helpers.js');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('theara:fa-helpers');
    api.addFiles('fa-helpers-tests.js');
});
