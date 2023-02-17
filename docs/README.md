📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Add-to-cart-info

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Component that will display information when adding a product to the shopping cart.

<img width="592" alt="image" src="https://user-images.githubusercontent.com/66226368/219804702-9fda24fe-df44-400e-a90e-1c24ceced106.png">

## Configuration 

1. Import the Bullet add-to-cart-info's app to your theme's dependencies in the manifest.json, for example:
```json
  dependencies: {
    "{vendor}.add-to-cart-info": "0.x"
  }
 ```
 
 2. Add the add-to-cart-info block to the store-theme. For example:
```json
  "modal-layout#add-to-cart-info":{
    "title": "Modal layout Product",
    "props": {
      "blockClass":"product__modal-layout"
    },
    "children": [
      "modal-header#add-to-cart-info",
      "rich-text#modal-add-to-car-info",
      "add-to-cart-info"
    ]
  }
   ```

### list-context.bullet-group props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `bullet`        | `Array`       | Define the bullet array to render in the list-context       | `undefined`              |


### bullets props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `img`        | `String`       | Define the image to render in the list-context       | `undefined`              |
| `titleBullet`        | `String`       | Define the title to render in the list-context       | `undefined`              |
| `Link`        | `LinkProps`       |  Define the url to render in the list-context       | `undefined`              |


## Customization

| CSS Handles |
| ----------- | 
|`container_Buttons`|
|`button1`|
|`button2`|
| `container__products` | 
| `container__image` | 
| `imagen` | 
| `container__productsDetails` | 
|`paragraph__name `|
|` paragraph__price`|
|`paragraph__quantity `|
|`container__totalizer `|
|`items_total `|
|`items_totalizer `|
|` `|

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
