block('slide').content()(function() {
    return {
        block: 'page',
        elem: 'section',
        content: applyNext()
    };
});


block('slide').elem('title')(
    tag()('h1')
);
