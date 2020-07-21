var STYLEMANAGER = [
        {
            id: 'dimension',
            name: 'Kích thước',
            open: false,
            buildProps: ['width', 'height', 'margin-top', 'margin-bottom', 'margin-left', 'margin-right',
                'padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right'],
            properties: [
                { name: 'Chiều rộng', property: 'width' },
                { name: 'Chiều cao', property: 'height' },
                { name: 'Margin trên', property: 'margin-top' },
                { name: 'Margin phải', property: 'margin-right' },
                { name: 'Margin dưới', property: 'margin-bottom' },
                { name: 'Margin trái', property: 'margin-left' },
                {
                    name: 'Padding', property: 'padding', type: 'integer', unit: "px",
                    units: ["px", "%", "vw"],
                    value: 0,
                    step: 1,
                },
                { name: 'Padding trên', property: 'padding-top' },
                { name: 'Padding phải', property: 'padding-right' },
                { name: 'Padding dưới', property: 'padding-bottom' },
                { name: 'Padding trái', property: 'padding-left' },
            ],
        },
        {
            id: 'decorations',
            name: 'Viền và Bo góc',
            open: false,
            buildProps: ['border-style', 'border-color', 'border-width',
                'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius'],
            properties: [
                {
                    name: 'Bo góc tất cả', property: 'border-radius', type: 'integer',
                    unit: "px",
                    units: ["px", "%"],
                    value: 0,
                    step: 1,
                },
                { name: 'Bo góc trái trên', property: 'border-top-left-radius' },
                { name: 'Bo góc phải trên', property: 'border-top-right-radius' },
                { name: 'Bo góc phải dưới', property: 'border-bottom-right-radius' },
                { name: 'Bo góc trái dưới', property: 'border-bottom-left-radius' },
                { name: 'Kích thước', property: 'border-width', defaults: '0' },
                { name: 'Kiểu viền', property: 'border-style', defaults: 'none' },
                { name: 'Màu viền', property: 'border-color' },
            ],
        },
        {
            id: 'background',
            name: 'Màu và Hình nền',
            open: false,
            buildProps: ['opacity', 'background-color', 'background-image', 'background-position', 'background-attachment', 'background-size', 'background-repeat'],
            properties: [{
                type: 'slider',
                name: 'Trong suốt',
                property: 'opacity',
                defaults: 1,
                step: 0.01,
                max: 1,
                min: 0,
            },
            { name: 'Màu nền', property: 'background-color' },
            { name: 'Hình nền', property: 'background-image' },
            {
                name: 'Vị trí', property: 'background-position', defaults: 'left top', attributes: { title: 'Vị trí' },
                list: [
                    { value: 'left top', name: 'Trái trên' },
                    { value: 'left center', name: 'Trái giữa' },
                    { value: 'left bottom', name: 'Trái dưới' },
                    { value: 'right top', name: 'Phải trên' },
                    { value: 'right center', name: 'Phải giữa' },
                    { value: 'right bottom', name: 'Phải dưới' },
                    { value: 'center top', name: 'Giữa trên' },
                    { value: 'center center', name: 'Giữa giữa' },
                    { value: 'center bottom', name: 'Giữa dưới' },
                ],
            },
            {
                name: 'Lặp lại', property: 'background-repeat', defaults: 'repeat',
                list: [
                    { value: 'repeat', name: 'Lặp tất cả' },
                    { value: 'repeat-x', name: 'Lặp ngang' },
                    { value: 'repeat-y', name: 'Lặp dọc' },
                    { value: 'no-repeat', name: 'Không lặp' },
                ],
            },
            {
                name: 'Cố định', property: 'background-attachment',
                list: [
                    { value: 'scroll', name: 'Theo thanh cuộn' },
                    { value: 'fixed', name: 'Cố định' },
                    { value: 'local', name: 'Cuộn cùng nội dung' },
                ],
            },
            {
                name: 'Kích thước', property: 'background-size',
                list: [
                    { value: 'auto', name: 'Tự động' },
                    { value: 'cover', name: 'Che phủ' },
                    { value: 'contain', name: 'Đầy đủ' },
                ],
            }
            ],
        },
        {
            id: 'typography',
            name: 'Thiết lập chữ',
            open: false,
            buildProps: ['font-family', 'font-size', 'text-align', 'color', 'line-height', 'letter-spacing'],
            properties: [
                { name: 'Font chữ', property: 'font-family' },
                { name: 'Cỡ chữ', property: 'font-size' },
                {
                    name: 'Căn Chỉnh',
                    property: 'text-align',
                    type: 'radio',
                    defaults: 'left',
                    list: [
                        { value: 'left', name: 'Left', className: 'fa fa-align-left' },
                        { value: 'center', name: 'Center', className: 'fa fa-align-center' },
                        { value: 'right', name: 'Right', className: 'fa fa-align-right' },
                        { value: 'justify', name: 'Justify', className: 'fa fa-align-justify' }
                    ],
                },
                { name: 'Màu chữ', property: 'color' },
                {
                    name: 'Kiểu chữ', property: 'font-style', type: 'radio', defaults: 'normal',
                    list: [
                        { value: 'normal', name: 'Thường', className: 'fa fa-font' },
                        { value: 'italic', name: 'In nghiêng', className: 'fa fa-italic' },
                    ],
                },
                { name: 'K.cách dòng', property: 'line-height' },
                { name: 'K.cách chữ', property: 'letter-spacing' },
            ],
        },
        {
            id: 'advance',
            name: 'Thiết lập nâng cao',
            open: false,
            //open: true,
            buildProps: ['position', 'display', 'top', 'right', 'bottom', 'left', 'min-width', 'min-height', 'max-width', 'max-height',
                'cursor', 'flex-wrap', 'flex-grow', 'order', 'justify-content', 'z-index', 'flex-basis', 'background-image', 'flex-direction', 'box-shadow',
                'border-top', 'border-left', 'border-right', 'border-bottom'],
            properties: [
                { name: 'Kiểu hiển thị', property: 'display' },
                {
                    name: 'Position', property: 'position', type: 'select',
                    list: [
                        { value: 'static', name: 'static' },
                        { value: 'relative', name: 'relative' },
                        { value: 'absolute', name: 'absolute' },
                        { value: 'fixed', name: 'fixed' },
                        { value: 'sticky', name: 'sticky' },
                    ],
                },
                { name: 'Trên', property: 'top' },
                { name: 'Phải', property: 'right' },
                { name: 'Dưới', property: 'bottom' },
                { name: 'Trái', property: 'left' },
                { name: 'C.rộng nhỏ nhất', property: 'min-width' },
                { name: 'C.cao nhỏ nhất', property: 'min-height' },
                { name: 'C.rộng lớn nhất', property: 'max-width' },
                { name: 'C.cao lớn nhất', property: 'max-height' },
                { name: 'Cursor', property: 'cursor' },
                { name: 'Order', property: 'order' },
                { name: 'Justify-content', property: 'justify-content' },
                { name: 'Align-items', property: 'align-items' },
                { name: 'Ảnh nền', property: 'background-image', type: 'text', defaults: 'none' },
                {
                    property: 'box-shadow', properties: [{
                        name: 'X', property: 'box-shadow-h'
                    }
                        , {
                        name: 'Y', property: 'box-shadow-v'
                    }
                        , {
                        name: 'Blur', property: 'box-shadow-blur'
                    }
                        , {
                        name: 'Spread', property: 'box-shadow-spread'
                    }
                        , {
                        name: 'Color', property: 'box-shadow-color'
                    }
                        , {
                        name: 'Type', property: 'box-shadow-type'
                    }
                    ],
                }
            ]
        },
    ]