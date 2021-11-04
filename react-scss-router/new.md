react/first-react/config/webpack.config.js

第336行

'@':paths.appSrc,

完整代码
 alias: {
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
        // Allows for better profiling with ReactDevTools
        ...(isEnvProductionProfile && {
          'react-dom$': 'react-dom/profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
        }),
        ...(modules.webpackAliases || {}),
        '@':paths.appSrc,
      },
      ```


这样我们在页面中遇到这种问题
```jsx
import Header from '../../components/Header';
可以用@代替 src根目录 就变成了
import Header from '@/components/Header';
import PageNav from '@/components/PageNav';

@相当于 src/ 就不需要一级级找了

