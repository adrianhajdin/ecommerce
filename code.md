# Code Snippets

[Public Folder ZIP](https://drive.google.com/file/d/1hnTWWNZFit-dhp93Begj58avaoQtNBwW/view?usp=sharing)

#

<details>
<summary><code>_css/colors.scss</code></summary>

```scss
// Keep these in sync with the colors exported in '../cssVariables.js'

:root {
  --color-base-0: rgb(255, 255, 255);
  --color-base-50: rgb(245, 245, 245);
  --color-base-100: rgb(235, 235, 235);
  --color-base-150: rgb(221, 221, 221);
  --color-base-200: rgb(208, 208, 208);
  --color-base-250: rgb(195, 195, 195);
  --color-base-300: rgb(181, 181, 181);
  --color-base-350: rgb(168, 168, 168);
  --color-base-400: rgb(154, 154, 154);
  --color-base-450: rgb(141, 141, 141);
  --color-base-500: rgb(128, 128, 128);
  --color-base-550: rgb(114, 114, 114);
  --color-base-600: rgb(101, 101, 101);
  --color-base-650: rgb(87, 87, 87);
  --color-base-700: rgb(74, 74, 74);
  --color-base-750: rgb(60, 60, 60);
  --color-base-800: rgb(47, 47, 47);
  --color-base-850: rgb(34, 34, 34);
  --color-base-900: rgb(20, 20, 20);
  --color-base-950: rgb(7, 7, 7);
  --color-base-1000: rgb(0, 0, 0);

  --color-success-50: rgb(247, 255, 251);
  --color-success-100: rgb(240, 255, 247);
  --color-success-150: rgb(232, 255, 243);
  --color-success-200: rgb(224, 255, 239);
  --color-success-250: rgb(217, 255, 235);
  --color-success-300: rgb(209, 255, 230);
  --color-success-350: rgb(201, 255, 226);
  --color-success-400: rgb(193, 255, 222);
  --color-success-450: rgb(186, 255, 218);
  --color-success-500: rgb(178, 255, 214);
  --color-success-550: rgb(160, 230, 193);
  --color-success-600: rgb(142, 204, 171);
  --color-success-650: rgb(125, 179, 150);
  --color-success-700: rgb(107, 153, 128);
  --color-success-750: rgb(89, 128, 107);
  --color-success-800: rgb(71, 102, 86);
  --color-success-850: rgb(53, 77, 64);
  --color-success-900: rgb(36, 51, 43);
  --color-success-950: rgb(18, 25, 21);

  --color-warning-50: rgb(255, 255, 246);
  --color-warning-100: rgb(255, 255, 237);
  --color-warning-150: rgb(254, 255, 228);
  --color-warning-200: rgb(254, 255, 219);
  --color-warning-250: rgb(254, 255, 210);
  --color-warning-300: rgb(254, 255, 200);
  --color-warning-350: rgb(254, 255, 191);
  --color-warning-400: rgb(253, 255, 182);
  --color-warning-450: rgb(253, 255, 173);
  --color-warning-500: rgb(253, 255, 164);
  --color-warning-550: rgb(228, 230, 148);
  --color-warning-600: rgb(202, 204, 131);
  --color-warning-650: rgb(177, 179, 115);
  --color-warning-700: rgb(152, 153, 98);
  --color-warning-750: rgb(127, 128, 82);
  --color-warning-800: rgb(101, 102, 66);
  --color-warning-850: rgb(76, 77, 49);
  --color-warning-900: rgb(51, 51, 33);
  --color-warning-950: rgb(25, 25, 16);

  --color-error-50: rgb(255, 241, 241);
  --color-error-100: rgb(255, 226, 228);
  --color-error-150: rgb(255, 212, 214);
  --color-error-200: rgb(255, 197, 200);
  --color-error-250: rgb(255, 183, 187);
  --color-error-300: rgb(255, 169, 173);
  --color-error-350: rgb(255, 154, 159);
  --color-error-400: rgb(255, 140, 145);
  --color-error-450: rgb(255, 125, 132);
  --color-error-500: rgb(255, 111, 118);
  --color-error-550: rgb(230, 100, 106);
  --color-error-600: rgb(204, 89, 94);
  --color-error-650: rgb(179, 78, 83);
  --color-error-700: rgb(153, 67, 71);
  --color-error-750: rgb(128, 56, 59);
  --color-error-800: rgb(102, 44, 47);
  --color-error-850: rgb(77, 33, 35);
  --color-error-900: rgb(51, 22, 24);
  --color-error-950: rgb(25, 11, 12);

    // BRAND COLORS
  --color-dark-50: rgba(243, 243, 243, 1);
  --color-dark-60: rgba(237, 236, 238, 1);
  --color-dark-500: rgba(19, 17, 24, 1);
  --color-dark-500-5: rgba(19, 17, 24, 0.05);

  --color-white-500: rgba(255, 255, 255, 1);
  --color-white-500-20: rgba(255, 255, 255, 0.2);
  
  --color-gray-500: rgba(164, 161, 170, 1);
  --color-green-500: rgba(60, 209, 57, 1);
}
```
</details>

<details>

<summary><code>FooterComponent/index.module.scss</code></summary>

```scss
@use '../../../_css/queries.scss' as *;

.footer {
  padding: 30px 0;
  background-color: var(--theme-elevation-1000);
  color: var(--theme-elevation-0);

  @include small-break {
    padding: calc(var(--base) * 2) 0;
  }
}

:global([data-theme='dark']) {
  .footer {
    background-color: var(--theme-elevation-50);
    color: var(--theme-elevation-1000);
  }
}

.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: calc(var(--base) / 2) var(--base);

  @include small-break {
    margin-top: 30px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}

.logo {
  width: 170px;
}

.hr {
  border-color: var(--color-white-500-20);
}

.socialLinks {
  display: flex;
  gap: 20px;
}

.socialLinkItem {
  width: 100%;
}

.socialIcon {
  width: 24px;
  height: 24px;
}

.hide {
  display: none;
}
```
</details>

<details>
<summary><code>constants/index.ts</code></summary>

```typescript
export const inclusions = [
  {
    title: 'Free Shipping',
    description: 'Free shipping for order above $150',
    icon: '/assets/icons/shipping.svg',
  },
  {
    title: 'Money Guarantee',
    description: 'Within 30 days for an exchange',
    icon: '/assets/icons/dollar.svg',
  },
  {
    title: 'Online Support',
    description: '24 hours a day, 7 days a week',
    icon: '/assets/icons/support.svg',
  },
  {
    title: 'Flexible Payment',
    description: 'Pay with multiple credit cards',
    icon: '/assets/icons/payment.svg',
  },
]

export const profileNavItems = [
  {
    title: 'Personal Information',
    url: '/account',
    icon: '/assets/icons/user.svg',
  },
  {
    title: 'My Purchases',
    url: '/account/purchases',
    icon: '/assets/icons/purchases.svg',
  },
  {
    title: 'My Orders',
    url: '/account/orders',
    icon: '/assets/icons/orders.svg',
  },
  {
    title: 'Logout',
    url: '/logout',
    icon: '/assets/icons/logout.svg',
  },
]

export const noHeaderFooterUrls = ['/create-account', '/login', '/recover-password']

```
</details>

<details>
<summary><code>_css/type.scss</code></summary>

```scss
@use 'queries' as *;

%h1,
%h2,
%h3,
%h4,
%h5,
%h6 {
  font-weight: 700;
  margin: 0;
}

%h1 {
  font-size: 64px;
  line-height: 70px;
  font-weight: bold;

  @include mid-break {
    font-size: 42px;
    line-height: 42px;
  }
}

%h2 {
  font-size: 48px;
  line-height: 54px;
  font-weight: bold;

  @include mid-break {
    font-size: 32px;
    line-height: 40px;
  }
}

%h3 {
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;

  @include mid-break {
    font-size: 26px;
    line-height: 32px;
  }
}

%h4 {
  font-size: 30px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;

  @include mid-break {
    font-size: 22px;
    line-height: 30px;
  }
}

%h5 {
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;

  @include mid-break {
    font-size: 18px;
    line-height: 24px;
  }
}

%h6 {
  font-size: inherit;
  line-height: inherit;
  font-weight: bold;
}

%body {
  font-size: 18px;
  line-height: 32px;

  @include mid-break {
    font-size: 15px;
    line-height: 24px;
  }
}

%large-body {
  font-size: 25px;
  line-height: 32px;

  @include mid-break {
    font-size: 22px;
    line-height: 30px;
  }
}

%label {
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;

  @include mid-break {
    font-size: 13px;
  }
}
```
</details>

<details>
<summary><code>create-account/index.module.scss</code></summary>

```scss
@import '../../_css/common';

.createAccount {
  display: grid;
  grid-template-columns: 1fr 45%;
  height: 100vh;
  overflow: auto;

  @include mid-break {
    grid-template-columns: 1fr;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('/assets/images/image-2.svg');
  }

  p {
    color: var(--color-gray-500);
  }
}

.formTitle {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;

  h3 {
    margin: 0;

    @include mid-break {
      font-size: 34px;
      margin-bottom: 8px;
    }
  }

  .handImg {
    height: 24px;
  }
}

.heroImg {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('/assets/images/image-2.svg');

  @include mid-break {
    background: none;
    display: flex;
    justify-content: center;
  }
}

.logo {
  margin: 60px;
  width: 30%;
  min-width: 150px;
  z-index: 10;

  @include mid-break {
    width: 45%;
    margin: 10px;
  }
}

.formWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
 

  @include mid-break {
    justify-content: flex-start;
    padding: 10px;
  }
}

.formContainer {
  max-width: 600px;
  width: 100%;
  padding: 50px;
  border-radius: 10px;

  @include mid-break {
    backdrop-filter: blur(30px);
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }

  @include small-break {
    padding: 30px ;
  }
}

.params {
  margin-top: var(--base);
}
```
</details>

<details>
<summary><code>RecoverPasswordForm/index.module.scss</code></summary>

```scss
@import '../../../_css/common';

.form {
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
}

.subTitle {
  font-size: 18px;
  line-height: 24px;
}

.requestSuccess {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
}

.openMailBtn {
  margin-top: 30px;
  width: 100%;
  display: flex;
}

.submit {
  width: 100%;
}

.message {
  margin-bottom: var(--base);
}

.error {
  color: red;
  margin-bottom: 15px;
}
```
</details>

<details>

<summary><code>CustomHero/index.module.scss</code></summary>

```scss
@import '../../_css/queries.scss';

.hero {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @include small-break {
    margin: 0;
  }
}

.heroWrapper {
  background-color: var(--color-dark-50);
  width: 100%;
  max-width: 1560px;
  max-height: 884px;
  display: flex;
  align-items: center;

  background-size: cover;
  background-position: revert;
  background-repeat: no-repeat;

  @include small-break {
    background-size: cover;
    background-position: center;
  }
}

.heroTextBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15% var(--gutter-h);
  width: 100%;

  @include mid-break {
    padding: 10% 30px;
  }

  @include small-break {
    padding: 50px 30px;
  }

  h2 {
    font-size: 70px;
    margin: 32px 0;

    @include mid-break {
      font-size: 48px;
      margin: 24px 0;
      white-space: wrap;
    }

    @include small-break {
      width: 70%;
      font-size: 36px;
      margin: 8px 0;
    }
  }

  p {
    font-size: 30px;

    @include mid-break {
      font-size: 24px;
    }

    @include small-break {
      font-size: 18px;
    }
  }
}

.links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  padding-top: 50px;
  flex-wrap: wrap;
  margin: calc(var(--base) * -0.5);

  & > * {
    margin: calc(var(--base) / 2);
  }
}
```
</details>

<details>
<summary><code>Categories/index.module.scss</code></summary>

```scss
@use '../../_css/queries.scss' as *;

.container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.titleWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 400;
  }
}

.list {
  display: grid;
  gap: 30px;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);

  @include small-break {
    grid-template-columns: 1fr;
  }
}
```
</details>

<details>

<summary><code>CategoryCard/index.module.scss</code></summary>

```scss
@use '../../../_css/queries.scss' as *;

.card {
  position: relative;
  background-color: var(--color-dark-50);
  min-height: 360px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  cursor: pointer;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title {
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  text-align: center;
  background-color: white;
}
```
</details>

<details>
<summary><code>Promotion/index.module.scss</code></summary>

```scss
@use '../../_css/queries.scss' as *;

.promotion {
  display: grid;
  grid-template-columns: 50% 1fr;
  gap: 30px;
  margin-bottom: 30px;

  @include small-break {
    grid-template-columns: 1fr;
  }
}

.title {
  font-weight: 400;
}

.textBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}

.image {
  min-height: 500px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.dealBtn {
  width: fit-content;

  @include mid-break {
    width: 100%;
  }
}

.stats {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 100px);

  @include large-break {
    grid-template-columns: repeat(2, 1fr);
  }
}

.statBox {
  border-radius: 10px;
  border: 1px solid var(--color-dark-60);
  padding: 16px;
  min-width: 100px;
  width: 100%;
  text-align: center;

  h4 {
    font-weight: bold;
  }
}
```
</details>

<details>

<summary><code>Filters/index.module.scss</code></summary>

```scss
@import '../../../_css/common';

.filters {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include large-break {
    flex-direction: row;
    gap: 40px;
  }
  
  @include small-break {
    flex-direction: column;
    gap: 20px;
  }

  @include small-break {
    margin-top: 16px;
  }
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;

  @include large-break {
    flex-direction: row;
  }

  @include small-break {
    flex-direction: column;
  }
}

.title {
  white-space: nowrap;
}

.priceSlider {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.sliderWrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    white-space: nowrap;
  }
}

.hr {
  margin: 20px 0;
}
```
</details>

<details>
<summary><code>Checkbox/index.module.scss</code></summary>

```scss
@import '../../_css/common';

.checkboxWrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;
}

.checkbox {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 5px;
  background-color: white;
  border: 2px solid var(--color-dark-500);
  outline: none;
  cursor: pointer;
}

.checkbox:checked {
  background-color: var(--color-dark-500);
  position: relative;
}

.checkbox:checked::before {
  content: '\2713';
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  right: 5px;
  top: 0;
}
```
</details>

<details>

<summary><code>Checkbox/index.tsx</code></summary>

```typescript
import React, { ChangeEvent, useState } from 'react'

import classes from './index.module.scss'

interface CheckboxProps {
  label: string
  value: string
  isSelected: boolean
  onClickHandler: (value: string) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, value, isSelected, onClickHandler }) => {
  const [isChecked, setIsChecked] = useState(isSelected)

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onClickHandler(value)
  }

  return (
    <label className={classes.checkboxWrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={classes.checkbox}
      />
      {label}
    </label>
  )
}
```
</details>

<details>
<summary><code>Radio/index.module.scss</code></summary>

```scss
@import '../../_css/common';

.radioWrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;
}

.radio {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid var(--color-dark-500);
  outline: none;
  cursor: pointer;
}

.radio:checked {
  font-size: 16px;
  background-color: white;
  position: relative;
}

.radio:checked::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-dark-500);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
</details>

<details>

<summary><code>Radio/index.tsx</code></summary>

```typescript
import React from 'react'

import classes from './index.module.scss'

interface RadioButtonProps {
  label: string
  value: string
  isSelected: boolean
  onRadioChange: (value: string) => void
  groupName: string
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  isSelected,
  onRadioChange,
  groupName,
}) => {
  const handleRadioChange = () => {
    onRadioChange(value)
  }

  return (
    <label className={classes.radioWrapper}>
      <input
        type="radio"
        checked={isSelected}
        onChange={handleRadioChange}
        className={classes.radio}
        name={groupName}
      />
      {label}
    </label>
  )
}
```
</details>

<details>
<summary><code>_components/Card/index.module.scss</code></summary>

```scss
@import '../../_css/common';

.card {
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: white;
  width: 100%;

  @include small-break {
    padding: calc(var(--base) / 2);
    gap: calc(var(--base) / 4);
  }
}

.title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.centerAlign {
  align-items: center;
}

.body {
  flex-grow: 1;
}

.priceActions {
  gap: var(--base);
}

.price {
  font-weight: 600;
  margin: 0;
}

.leader {
  @extend %label;
  display: flex;
  gap: var(--base);
}

.description {
  margin: 0;
  line-height: 24px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.hideImageOnMobile {
  @include mid-break {
    display: none;
  }
}

.mediaWrapper {
  text-decoration: none;
  display: block;
  position: relative;
  min-height: 262px;
  background-color: var(--color-dark-50);
}

.image {
  padding: 24px;
  object-fit: contain;
  aspect-ratio: 1/1;
  max-width: 100%;
}

.placeholder {
  background-color: var(--theme-elevation-50);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.actions {
  display: flex;
  align-items: center;

  @include mid-break {
    flex-direction: column;
    align-items: flex-start;
  }
}
```
</details>

<details>

<summary><code>_components/CollectionArchive/index.module.scss</code></summary>

```scss
@import '../../_css/common';

// this is to make up for the space taken by the fixed header, since the scroll method does not accept an offset parameter
.scrollRef {
  position: absolute;
  left: 0;
  top: calc(var(--base) * -5);
  @include mid-break {
    top: calc(var(--base) * -2);
  }
}

.introContent {
  position: relative;
  margin-bottom: calc(var(--base) * 2);

  @include mid-break {
    margin-bottom: var(--base);
  }
}

.resultCountWrapper {
  display: flex;
  margin-bottom: calc(var(--base) * 2);

  @include mid-break {
    margin-bottom: var(--base);
  }
}

.pageRange {
  margin-bottom: var(--base);

  @include mid-break {
    margin-bottom: var(--base);
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(30%, 1fr));
  gap: 30px;
  padding: 0;
  width: 100%;

  @include mid-break {
    gap: 20px;
  }

  @include small-break {
    grid-template-columns: 100%;
  }
}

.pagination {
  margin-top: calc(var(--base) * 2);
  display: flex;
  justify-content: center;

  @include mid-break {
    margin-top: var(--base);
  }
}
```
</details>

<details>
<summary><code>_heros/Product/index.module.scss</code></summary>

```scss
@use '../../_css/common.scss' as *;

.productHero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;

  @include small-break {
    grid-template-columns: 1fr;
  }
}

.mediaWrapper {
  position: relative;
  min-height: 400px;
  background-color: var(--color-dark-50);

  @include small-break {
    min-height: 250px;
  }
}

.image {
  padding: 24px;
  object-fit: contain;
  aspect-ratio: 1/1;
  max-width: 100%;
}

.details {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.categoryWrapper {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  margin-top: 8px;
}

.category {
  font-size: 16px;
}

.stock {
  color: var(--color-green-500);
}

.separator {
  color: var(--color-gray-500);
  padding: 0 10px;
}

.description {
  padding: 30px 0;
}
```
</details>

<details>

<summary><code>CartItem/index.module.scss</code></summary>

```scss
@import '../../../_css/common';

.item {
  display: grid;
  grid-template-columns: 100px 2fr 1fr;
  padding: 24px 0;
  gap: 24px;
  border-bottom: 1px solid var(--color-dark-50);
}

.mediaWrapper {
  position: relative;
  min-height: 100px;
  padding: 16px;
  background-color: var(--color-dark-50);
}

.media {
  position: relative;
  height: 100%;
}

.image {
  object-fit: contain;
  max-width: 100%;
  aspect-ratio: 1 / 1;
}

.itemDetails {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
  align-items: center;

  @include small-break {
    grid-template-columns: 1fr;
  }
}

.titleWrapper {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  h6 {
    line-height: 20px;
    margin-bottom: 8px;
  }
}

.quantity {
  border: 1px solid var(--color-dark-500);
  display: grid;
  grid-template-columns: 45px 1fr 45px;
  border-radius: 10px;
  align-items: center;
  height: 45px;
  width: 100%;
  max-width: 120px;
}

.quantityBtn {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.quantityInput {
  text-align: center;
  height: 100%;
  width: 100%;
  min-width: 30px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 700;
}

.subtotalWrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 60px;

  @include small-break {
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
}
```
</details>

<details>

<summary><code>CartPage/index.module.scss</code></summary>

```scss
@import '../../../_css/common';

.cart {
  margin: 30px 0;
}

.cartWrapper {
  display: grid;
  grid-template-columns: 65% 1fr;
  gap: 60px;

  @include large-break {
    grid-template-columns: 1fr;
  }
}

.header {
  display: grid;
  grid-template-columns: 100px 2fr 1fr;
  gap: 24px;
  margin-bottom: 8px;

  @include small-break {
    display: none;
  }
}

.headerItemDetails {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

.headersubtotal {
  text-align: end;
}

.itemsList {
  border-top: 1px solid var(--color-dark-50);
}

.summary {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px 24px;
  border: 1px solid var(--color-dark-50);
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-dark-50);
}
```
</details>

<details>

<summary><code>CheckoutItem/index.module.scss</code></summary>

```scss
@import '../../../_css/common';

.item {
  display: grid;
  grid-template-columns: 100px 5fr 1fr;
  padding: 16px 0;
  gap: 16px;
  border-bottom: 1px solid var(--color-dark-50);
}

.mediaWrapper {
  position: relative;
  min-height: 80px;
  padding: 8px;
  background-color: var(--color-dark-50);
}

.media {
  position: relative;
  height: 100%;
}

.image {
  object-fit: contain;
  max-width: 100%;
  aspect-ratio: 1 / 1;
}

.itemDetails {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;
  align-items: center;

  @include small-break {
    grid-template-columns: 1fr;
  }
}

.titleWrapper {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  p {
    font-size: 16px;
    margin-top: 8px;
  }
}

.quantity {
  text-align: center;
  font-size: 18px;
  
  @include small-break {
    text-align: start;
    font-size: 16px;
  }
}

.subtotal {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @include small-break {
    align-items: flex-end;
  }
}
```
</details>

<details>

<summary><code>CheckoutItem/index.tsx</code></summary>

```typescript
import Link from 'next/link'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'

import classes from './index.module.scss'

export const CheckoutItem = ({ product, title, metaImage, quantity, index }) => {
  return (
    <li className={classes.item} key={index}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No image</span>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media className={classes.media} imgClassName={classes.image} resource={metaImage} fill />
        )}
      </Link>

      <div className={classes.itemDetails}>
        <div className={classes.titleWrapper}>
          <h6>{title}</h6>
          <Price product={product} button={false} />
        </div>
        <p className={classes.quantity}>x{quantity}</p>
      </div>

      <div className={classes.subtotal}>
        <Price product={product} button={false} quantity={quantity} />
      </div>
    </li>
  )
}
```
</details>

<details>

<summary><code>CheckoutPage/index.tsx</code></summary>

```typescript
'use client'

import React, { Fragment, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Settings } from '../../../../payload/payload-types'
import { Button } from '../../../_components/Button'
import { LoadingShimmer } from '../../../_components/LoadingShimmer'
import { useAuth } from '../../../_providers/Auth'
import { useCart } from '../../../_providers/Cart'
import { useTheme } from '../../../_providers/Theme'
import cssVariables from '../../../cssVariables'
import { CheckoutForm } from '../CheckoutForm'
import { CheckoutItem } from '../CheckoutItem'

import classes from './index.module.scss'

const apiKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
const stripe = loadStripe(apiKey)

export const CheckoutPage: React.FC<{
  settings: Settings
}> = props => {
  const {
    settings: { productsPage },
  } = props

  const { user } = useAuth()
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)
  const [clientSecret, setClientSecret] = React.useState()
  const hasMadePaymentIntent = React.useRef(false)
  const { theme } = useTheme()

  const { cart, cartIsEmpty, cartTotal } = useCart()

  useEffect(() => {
    if (user !== null && cartIsEmpty) {
      router.push('/cart')
    }
  }, [router, user, cartIsEmpty])

  useEffect(() => {
    if (user && cart && hasMadePaymentIntent.current === false) {
      hasMadePaymentIntent.current = true

      const makeIntent = async () => {
        try {
          const paymentReq = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/create-payment-intent`,
            {
              method: 'POST',
              credentials: 'include',
            },
          )

          const res = await paymentReq.json()

          if (res.error) {
            setError(res.error)
          } else if (res.client_secret) {
            setError(null)
            setClientSecret(res.client_secret)
          }
        } catch (e) {
          setError('Something went wrong.')
        }
      }

      makeIntent()
    }
  }, [cart, user])

  if (!user || !stripe) return null

  return (
    <Fragment>
      {cartIsEmpty && (
        <div>
          {'Your '}
          <Link href="/cart">cart</Link>
          {' is empty.'}
          {typeof productsPage === 'object' && productsPage?.slug && (
            <Fragment>
              {' '}
              <Link href={`/${productsPage.slug}`}>Continue shopping?</Link>
            </Fragment>
          )}
        </div>
      )}
      {!cartIsEmpty && (
        <div className={classes.items}>
          <div className={classes.header}>
            <p>Products</p>
            <div className={classes.headerItemDetails}>
              <p></p>
              <p className={classes.quantity}>Quantity</p>
            </div>
            <p className={classes.subtotal}>Subtotal</p>
          </div>

          <ul>
            {cart?.items?.map((item, index) => {
              if (typeof item.product === 'object') {
                const {
                  quantity,
                  product,
                  product: { title, meta },
                } = item

                if (!quantity) return null

                const metaImage = meta?.image

                return (
                  <Fragment key={index}>
                    <CheckoutItem
                      product={product}
                      title={title}
                      metaImage={metaImage}
                      quantity={quantity}
                      index={index}
                    />
                  </Fragment>
                )
              }
              return null
            })}
            <div className={classes.orderTotal}>
              <p>Order Total</p>
              <p>{cartTotal.formatted}</p>
            </div>
          </ul>
        </div>
      )}
      {!clientSecret && !error && (
        <div className={classes.loading}>
          <LoadingShimmer number={2} />
        </div>
      )}
      {!clientSecret && error && (
        <div className={classes.error}>
          <p>{`Error: ${error}`}</p>
          <Button label="Back to cart" href="/cart" appearance="secondary" />
        </div>
      )}
      {clientSecret && (
        <Fragment>
          <h3 className={classes.payment}>Payment Details</h3>
          {error && <p>{`Error: ${error}`}</p>}
          <Elements
            stripe={stripe}
            options={{
              clientSecret,
              appearance: {
                theme: 'stripe',
                variables: {
                  colorText:
                    theme === 'dark' ? cssVariables.colors.base0 : cssVariables.colors.base1000,
                  fontSizeBase: '16px',
                  fontWeightNormal: '500',
                  fontWeightBold: '600',
                  colorBackground:
                    theme === 'dark' ? cssVariables.colors.base850 : cssVariables.colors.base0,
                  fontFamily: 'Inter, sans-serif',
                  colorTextPlaceholder: cssVariables.colors.base500,
                  colorIcon:
                    theme === 'dark' ? cssVariables.colors.base0 : cssVariables.colors.base1000,
                  borderRadius: '0px',
                  colorDanger: cssVariables.colors.error500,
                  colorDangerText: cssVariables.colors.error500,
                },
              },
            }}
          >
            <CheckoutForm />
          </Elements>
        </Fragment>
      )}
    </Fragment>
  )
}
```
</details>

#

[Account page Challenge ZIP](https://drive.google.com/file/d/18yGEKKLAzmbo5whzZSFWoMG-QntLB22S/view?usp=sharing)
