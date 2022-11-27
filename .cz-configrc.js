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
      name: '⏪   revert: Revert to a commit'
    }
  ],
  scopes: [],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
}
