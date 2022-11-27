module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨   feat: 新功能(feature)'
    },
    {
      value: 'fix',
      name: '🐞   fix: 修补bug'
    },
    {
      value: 'refactor',
      name: '🛠   refactor: 重构(既不是新增功能，也不是修改bug的代码变动)'
    },
    {
      value: 'docs',
      name: '📚   docs: 文档修改(documentation )'
    },
    {
      value: 'test',
      name: '🏁   test: 增加测试'
    },
    {
      value: 'chore',
      name: '🗯   chore: 构建辅助工具变动'
    },
    {
      value: 'style',
      name: '💅   style: 格式(不影响代码运行的变动)'
    },
    {
      value: 'revert',
      name: '⏪   revert: 代码回滚'
    }
  ],
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  messages: {
    type: '请选择提交类型(必填)',
    scope: '选择一个 scope (可选)',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(破坏性修改)(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确认提交？'
  }
}
