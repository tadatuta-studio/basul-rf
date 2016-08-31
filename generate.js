var fs = require('fs'),
    path = require('path'),
    url = require('url'),
    marked = require('marked'),
    mkdirp = require('mkdirp'),
    glob = require('glob'),

    outputFolder = 'output',
    contentFolder = 'content',
    bundleName = 'index',
    pathToBundle = path.join('desktop.bundles', bundleName),

    model = require(path.resolve('.', contentFolder, 'model')),
    BEMTREE = require(path.resolve('.', pathToBundle, bundleName + '.bemtree')).BEMTREE,
    BEMHTML = require(path.resolve('.', pathToBundle, bundleName + '.bemhtml')).BEMHTML;

mkdirp.sync(path.join(outputFolder, 'i'));

fs.writeFileSync(path.join(outputFolder, 'CNAME'), 'xn--80ab5ax9d.xn--p1ai');

fs.createReadStream(path.join(contentFolder, 'favicon.ico')).pipe(fs.createWriteStream(path.join(outputFolder, 'favicon.ico')));

['min.js', 'min.css'].forEach(function(ext) {
    fs.createReadStream(path.join(pathToBundle, bundleName + '.' + ext))
        .pipe(fs.createWriteStream(path.join(outputFolder, bundleName + '.' + ext)));
});

glob.sync(path.join(contentFolder, 'images', '*')).forEach(function(image) {
    fs.createReadStream(image).pipe(fs.createWriteStream(path.join(outputFolder, 'i', path.basename(image))));
});

model.forEach(function(page) {
    var html,
        pageFolder = path.join(outputFolder, page.url),
        pageFilename= path.join(pageFolder, 'index.html');

    mkdirp.sync(pageFolder);

    if (page.source.indexOf('.md') > -1) {
        var md = fs.readFileSync(path.join(contentFolder, page.source), 'utf8');
        html = marked(md);
    }

    fs.writeFileSync(pageFilename, BEMHTML.apply(BEMTREE.apply({
        block: 'root',
        data: {
            url: page.url,
            relPathToRoot: page.url ? '../' : '',
            pages: model,
            content: html,
            email: 'your@email.com'
        }
    })));
});

console.log('Site was generated at', path.resolve(outputFolder));
