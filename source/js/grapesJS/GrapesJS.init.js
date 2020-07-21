var editor;
editor = grapesjs.init({
    container: '#gjs',

    canvas: {
        styles: [
            'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
            '../source/css/customlayout.css'
        ],
        scripts: [
            'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js',
            'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
        ]
    },

    deviceManager: {
        devices: [{
            name: 'Desktop',
            width: '', // default size
        }, {
            name: 'Mobile',
            width: '320px', // this value will be used on canvas width
            widthMedia: '480px', // this value will be used in CSS @media
        }]
    },

    styleManager: {
        appendTo: '.style-content',
        clearProperties: true,
        sectors: STYLEMANAGER,
    },

    blockManager: {
        appendTo: '#blocks'
    },
})

editor.Commands.add('set-device-desktop', {
    run: editor => editor.setDevice('Desktop')
});
editor.Commands.add('set-device-mobile', {
    run: editor => editor.setDevice('Mobile')
});