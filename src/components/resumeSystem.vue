<template>
  <main class="el-main lie-main  no-padding ">
    <div class="resume_man_nav">
      <ul>
        <li class="active"><a href="javascript:;">已购买简历</a></li>
        <li><a href="javascript:;">简历收藏</a></li>
        <li><a href="javascript:;">浏览记录</a></li>
      </ul>
    </div>
    <div class="lie-content lie-min-content lie-scrollbar-white lie-go-top-scrollbar">
      <div class="lie-result-content no-margin"><h2 class="lie-h2">已购买简历：<span class="yellow">0</span>份</h2>
        <div class="lie-bought-content">
          <div class="lie-table-search">
            <form class="el-form">
              <div class="el-form-item"><label class="el-form-item__label">购买人账号：</label>
                <div class="el-form-item__content">
                  <div class="el-select"><!---->
                    <div class="el-input el-input--suffix"><!----><input type="text" autocomplete="off" placeholder="请选择" readonly="readonly"
                                                                         class="el-input__inner"><!----><span class="el-input__suffix"><span
                      class="el-input__suffix-inner"><i class="el-select__caret el-input__icon el-icon-arrow-up"></i><!----></span><!----></span>
                      <!----></div>
                    <div class="el-select-dropdown el-popper" style="display: none; min-width: 221.4px;">
                      <div class="el-scrollbar" style="">
                        <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                          <ul class="el-scrollbar__view el-select-dropdown__list"><!---->
                            <li class="el-select-dropdown__item selected"><span>不限</span></li>
                            <li class="el-select-dropdown__item"><span>18811576899[赵咸云]</span></li>
                          </ul>
                        </div>
                        <div class="el-scrollbar__bar is-horizontal">
                          <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                        </div>
                        <div class="el-scrollbar__bar is-vertical">
                          <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                        </div>
                      </div><!----></div>
                  </div><!----></div>
              </div>
            </form>
          </div>
          <div role="group" aria-label="checkbox-group" class="el-checkbox-group lie-checkboc-group"></div>
        </div>
        <div class="lie-search-footer">
          <div class="f-left"><label role="checkbox" class="el-checkbox lie-all-checkbox"><span aria-checked="mixed"
                                                                                                class="el-checkbox__input"><span
            class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="true" class="el-checkbox__original" value=""></span><span
            class="el-checkbox__label">全选
            <!----></span></label>
            <button type="button" class="el-button lie-btn el-button--default"><!----><!----><span>批量导出</span></button>
          </div>
          <div class="lie-pagination">
            <ul><!----> <!---->  <!----></ul>
          </div>
        </div>
      </div>
    </div>
    <div class="lie-go-top" style="display: none;"><i class="lie-icon lie-icon-go-top"></i></div>
  </main>
</template>

<script>
  // import router from './router'
  export default {
    name: 'right-content'
    // router
  }
</script>
