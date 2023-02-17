📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# PDF Reader

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The pdf-reader component allows you to view pdf-type documents so that they can be read on the page where it is invoked.

![image](https://user-images.githubusercontent.com/66226368/219808707-602e7acb-11ad-4638-aa80-af67f89ff7bb.png)

## Configuration 

1. Import the Bullet pdf-reader's app to your theme's dependencies in the manifest.json, for example:
```json
  dependencies: {
    "{vendor}.pdf-reader": "0.x"
  }
 ```
 
 2. Add the pdf-reader block to the store-theme. For example:
```json
  "flex-layout.col#component--pdf-reader":{
    "children": [
      "rich-text#cmponent04",
      "pdf-reader"
    ]
  },
  "pdf-reader":{
    "props": {
      "pdfURL":"assets/documents/sample.pdf" ,
      "width": "100%",
      "height":"800"
    }
  }
   ```

### list-context.bullet-group props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `pdfURL`        | `string`       |  Define the url to render in the pdf-reader file       | `undefined`              |
| `width`        | `number`       | Define the width  to render pdf-reader apps      | `undefined`              |
| `height`        | `number`       | Define the height to render pdf-reader apps         | `undefined`              |


## Customization

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
