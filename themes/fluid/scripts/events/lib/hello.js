'use strict';

module.exports = (hexo) => {
  if (hexo.theme.has_hello) {
    return;
  }

  if (hexo.theme.i18n.languages[0].search(/zh-CN/i) !== -1) {
    hexo.log.info(`

   文档: https://hexo.fluid-dev.com/docs/    

`);
  } else {
    hexo.log.info(`   
  Docs: https://hexo.fluid-dev.com/docs/en/  
                                            
`);
  }

  hexo.theme.has_hello = true;
};
