module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  rules: {
    'object-curly-spacing': [0],
    'react/jsx-no-duplicate-props': [2], //防止在JSX中重复的props
    'jsx-quotes': [2, 'prefer-double'], //强制在JSX属性（jsx-quotes）中一致使用双引号
    'react/jsx-uses-vars': [2], // React组件import使用需要加上这个配置项
  }
};
