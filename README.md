# chuang-di-market

> 一个商城项目的后台管理系统

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

>2017.12.25安装vue-router
#cnpm install vue-router --save
>2017.12.25安装element-ui，并全局引入
#cnpm install element-ui --save
>2017.12.25安装axios
#cnpm install axios --save
>201.12.25安装qs
#cnpm install qs --save
>2018.1.8安装了
#cnpm install vue-quill-editor --save
>2018.1.11安装了vee-validate(最新版本设置中文的时候没有addLocale这个方法)
#cnpm install vee-validate --save
#方法一：
/*引入表单验证插件*/
#import VeeValidate,{Validator} from 'vee-validate'
#import zh_CN from 'vee-validate/dist/locale/zh_CN.js'
#Validator.localize('cn', zh_CN)
#Vue.use(VeeValidate)
#方法二：
>2018.1.11安装了vue-i18n（vee-validate最新版本是添加了i18n国际化这个玩意了，所以你得先安装vue-i18n）
#/*引入表单验证插件*/
#import VeeValidate from 'vee-validate'
#import zh_CN from 'vee-validate/dist/locale/zh_CN.js'
#import VueI18n from 'vue-i18n'
#Vue.use(VueI18n)
#const i18n = new VueI18n({
#  locale: 'zh_CN',
#})
#Vue.use(VeeValidate, {
#  i18n,
#  i18nRootKey: 'validation',
#  dictionary: {
#    zh_CN
#  }
#})

>2018.1.11安装了vue-verify-plugin
#cnpm install vue-verify-plugin --save
