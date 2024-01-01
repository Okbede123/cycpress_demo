module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    // modify config values

    // modify env var value
    config.env.bienTest = 'ToolsQA'
    // return config
    return config
  
  }