# ds-delay-loader ( Don't Need jQuery )


ds-delay-loader.jsは、jQueryを必要としないスクロールをトリガーとした画像の遅延ロード機能を実装します。
- Target browser : IE9+

___

# Install

```
npm i ds-delay-loader -S
```

___

# Import

```
import DsDelayLoader from 'ds-delay-loader';
```

___

# Constructor

```
new DsDelayLoader(element [, option]);
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|対象要素を指定します。<br>ex) ".delayloader img"|
|option|Object|-|ex)<br> option = {<br> transitionSpeed: 400,<br> delaySpeed: 400,<br> threshold: 200,<br> bg: "url(img/loading.gif)"<br>}|

|option|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|transitionSpeed|Number|200|画像が表示されるスピードを指定できます。|
|delaySpeed|Number|200|画像が表示される際の遅延時間を指定できます。|
|threshold|Number|200|画像表示のしきい値を指定できます。|
|bg|String|"#EEE"|グローバルナビを強制的に閉じる境界値を指定することができます。|

___

# Demo

[https://dsflon.github.io/ds-delay-loader/](https://dsflon.github.io/ds-delay-loader/)

```
import DsDelayLoader from 'ds-delay-loader';

new DsDelayLoader(
    ".delayloader img",
    {
        transitionSpeed: 1000,
        delaySpeed: 200,
        threshold: 100,
        bg: "#666"
    }
);
```
