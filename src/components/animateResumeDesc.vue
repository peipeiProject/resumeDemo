<template>
  <transition name="lie-slide">
    <div class="lie-slip">
      <ul class="lie-resume-tab">
        <li class="active"><i class="lie-icon lie-resume-tab-ico-1"></i><span>简历信息</span></li>
        <li><i class="lie-icon lie-resume-tab-ico-2"></i><span>沟通记录</span></li>
        <li><i class="lie-icon lie-resume-tab-ico-3"></i><span>职位申请记录</span></li>
      </ul>
      <div class="lie-resume-slip lie-scrollbar-white"><!---->
        <h1 class="lie-h1">简历信息 <a href="javascript:void(0);">
          <i class="lie-icon"></i>全屏查看</a>
          <i class="lie-icon lie-close" @click="closeAnimateResume"></i>
        </h1>
        <div class="lie-resume-slip-h">
          <div class="t-info resume_id"><span>ID：6735308</span> <span class="lie-resume-view-num">查看 1 次</span></div>
          <div class="h-title"><span class="t-info name">C女士</span> <!---->
            <span class="t-info age">32岁</span> <span>
              <div role="tooltip"
                   id="el-popover-7629"
                   aria-hidden="true"
                   class="el-popover el-popper"
                   tabindex="0"
                   style="width: 500px; display: none;"><!----><div
                class="lie-popover-content"><div class="title"><i class="lie-icon lie-icon-robot"></i>呼叫智能机器人</div>
                <div class="info"><div
                  class="info-1"><p>开通智能呼叫业务请联系业务人员</p>
                  <p>联系QQ：2877859519</p> <p>联系电话：0571-56017815</p>
                  <p>或扫描右边二维码添加微信</p></div> <i class="lie-icon lie-icon-QRcode"></i>
                </div>
                <div class="btn-info"><button type="button" class="el-button lie-btn el-button--button"><!---->
                  <!----><span>确认</span></button>
                </div>
              </div>
              </div>
              <span class="t-info robot el-popover__reference" aria-describedby="el-popover-7629" tabindex="0">
                <i class="lie-icon"></i>机器人智能呼叫</span></span>
          </div>
          <div class="lie-resume-slip-info">
            <div title="resumeDet.resume.lastCompany" class="resume-slip-info"><span>当前公司</span>大拿物联科技有限公司</div>
            <div class="resume-slip-info"><span>当前城市</span>深圳</div>
          </div>
          <div class="lie-resume-slip-info">
            <div title="resumeDet.resume.lastPosition" class="resume-slip-info"><span>当前职位</span>互联网产品经理/主管</div>
            <div class="resume-slip-info"><span>工作经验</span>10 年</div>
          </div>
          <div class="lie-resume-slip-info">
            <div class="resume-slip-info"><span>电子邮箱</span>********</div>
            <div class="resume-slip-info"><span>联系电话</span>********</div>
          </div>
          <div class="lie-resume-slip-info">
            <div class="resume-slip-info "><span>求职状态</span>在职,可以看更好机会</div>
          </div>
          <div class="lie-resume-slip-info lie-resume-slip-u">
            <div class="t-info updated">更新日期 2018-07-24</div>
            <span><div role="tooltip" id="el-popover-5982" aria-hidden="true" class="el-popover el-popper" tabindex="0"
                       style="width: 370px; display: none;"><!----><div class="lie-popover-content"><div class="title"><i
              class="lie-icon lie-icon-buy"></i>购买简历</div> <div class="info"><p>本次购买需要消费：<span class="yellow"></span></p> <p>当前金豆余额：0</p></div> <div
              class="btn-info"><button type="button" class="el-button lie-btn-d el-button--button"><!----><!----><span>取消</span></button> <button
              type="button" class="el-button lie-btn-pay  el-button--button"><!----><!----><span>确认购买</span></button></div></div> </div><button
              type="button" class="el-button lie-btn-warning el-button--button el-popover__reference" aria-describedby="el-popover-5982"
              tabindex="0"><!----><!----><span><i class="icon-shopping-cart"></i>购买简历
                                </span></button></span></div>
        </div>
        <div class="lie-resume-slip-option">
          <div class="lie-resume-slip-option-l"><span><div role="tooltip" id="el-popover-7500" aria-hidden="true" class="el-popover el-popper"
                                                           tabindex="0" style="width: 500px; display: none;"><!----><div
            class="lie-popover-content no-padding"><div class="search"><div class="lie-search-input el-input"><!---->
            <input type="text"
                   autocomplete="off"
                   class="el-input__inner">
            <!----><!----><!----></div> <button type="button" class="el-button lie-btn lie-search-btn el-button--default"><!---->
            <!----><span>搜索职位</span></button> <i class="lie-icon lie-icon-close-s"></i></div>
            <div class="search-no-data"><div class="no-data"><div
              class="no-data-box"><div class="position_img"></div> <span>暂未搜到符合条件的职位</span></div></div>
          </div></div> </div><button
            class="lie-btn el-popover__reference" aria-describedby="el-popover-7500" tabindex="0"><i class="lie-icon"></i> 加入到职位</button></span>
          </div>
          <div class="lie-resume-slip-option-r">
            <button type="button" class="el-button lie-btn-d lie-btn-loading el-button--default"><!----><!----><span><i
              class="lie-icon lie-icon-collect"></i>收藏简历
                                </span></button>
            <div class="el-popover el-popper lie-popover" style="display: none;">
              <div class="arrow"></div>
              <div class="lie-popover-content">
                <div class="title">添加收藏备注</div>
                <div class="info">
                  <div class="el-textarea"><textarea class="el-textarea__inner" style="min-height: 33px;"></textarea></div>
                </div>
                <div class="btn-info">
                  <button type="button" class="el-button lie-btn-d el-button--button"><!----><!----><span>取消</span></button>
                  <button type="button" class="el-button lie-btn el-button--button"><!----><!----><span>确认</span></button>
                </div>
              </div>
            </div>
            <button type="button" class="lie-btn-d"><i class="lie-icon lie-icon-dow"></i>下载简历
            </button>
          </div>
        </div>
        <div class="lie-resume-slip-content"><h2 class="lie-h2"><i class="lie-icon lie-intent_ico"></i>求职意向</h2>
          <div class="resume-slip-intent">
            <div class="slip-intent-info">
              <div class="slip-info-1">工作性质</div>
              <div class="slip-info-2">全职</div>
            </div>
            <div class="slip-intent-info">
              <div class="slip-info-1">期望职位</div>
              <div class="slip-info-2">互联网产品经理/主管</div>
            </div>
            <div class="slip-intent-info">
              <div class="slip-info-1">期望行业</div>
              <div class="slip-info-2">互联网/电子商务,旅游/度假,计算机软件</div>
            </div>
            <div class="slip-intent-info">
              <div class="slip-info-1">期望城市</div>
              <div class="slip-info-2">深圳</div>
            </div>
            <div class="slip-intent-info">
              <div class="slip-info-1">期望月薪</div>
              <div class="slip-info-2">10000-15000元</div>
            </div>
            <div class="slip-intent-info">
              <div class="slip-info-1">目前状况</div>
              <div class="slip-info-2">在职,可以看更好机会</div>
            </div>
          </div>
          <h2 class="lie-h2"><i class="lie-icon lie-job_ico"></i>工作经历</h2>
          <div class="lie-resume-slip-content-li">
            <div class="slip-content-info">
              <div class="slip-info-1">公司名称</div>
              <div class="slip-info-2 font-w">大拿物联科技有限公司</div>
            </div>
            <div class="slip-content-info">
              <div class="slip-info-1">工作时间</div>
              <div class="slip-info-2">2014.08-
              </div>
            </div>
            <div class="slip-content-info">
              <div class="slip-info-1">职位</div>
              <div class="slip-info-2">互联网产品经理/主管</div>
            </div>
            <div class="slip-content-info">
              <div class="slip-info-1">行业</div>
              <div class="slip-info-2">互联网/电子商务</div>
            </div>
            <div class="slip-content-info">
              <div class="slip-info-1">工作描述</div>
              <div class="slip-info-2 ">工作职责：负责海外（欧美）智能家居类产品规划，通过市场调研、研究欧美用户习惯、竞品分析、不断完善产品体验。<br><br>工作业绩：独立完成UI设计及产品功能设计，产品畅销美国沃尔玛。<br>负责产品有：视频直播监控<br>ios、
                Android 、 pc、 mac、pad TV；<br>华为荣耀立方app；<br>航拍ios、 Android ；<br>车联网ios、 Android ； <br>运动DV 行车记录<br>智能家居ios、 Android等。
              </div>
            </div>
          </div>
          <div class="lie-resume-slip-content-li">
            <div class="slip-content-info">
              <div class="slip-info-1">公司名称</div>
              <div class="slip-info-2 font-w">腾讯计算机系统有限公司</div>
            </div>
            <div class="slip-content-info">
              <div class="slip-info-1">工作时间</div>
              <div class="slip-info-2">2008.01-2014.04 (6年3个月)
              </div>
            </div>
            <div class="slip-content-info">
              <div class="slip-info-1">职位</div>
              <div class="slip-info-2">互联网产品经理/主管</div>
            </div>
            <div class="slip-content-info">
              <div class="slip-info-1">行业</div>
              <div class="slip-info-2">互联网/电子商务</div>
            </div>
            <div class="slip-content-info">
              <div class="slip-info-1">工作描述</div>
              <div class="slip-info-2 ">工作经历1<br>时 间：2008- 2014<br>公 司：深圳市腾讯计算机系统有限公司<br>职 务：产品经理<br>所属部门： OMG<br>工作职责：<br>2012年-2014年：腾讯视频电视剧频道产品经理<br>2009年-2011年：腾讯视频项目经理<br>2008年-2009年：拍拍网UI美术设计师<br>离职原因：
                换环境<br>-----------------------------------------------------------<br><br><br><br>职务：2011年-2014年：腾讯视频电视剧产品经理<br>1.负责电视剧频道web端、移动端、
                客户端的内容规划与战略布局；<br>2.定期撰写竞品分析报告，制定频道优化方案； <br>3.独立完成产品原型制作与设计师、技术团队沟通合作制定频道改版方案保证产品顺利上线；<br>业绩：<br>1、
                创新宽屏页面新视觉，提升用户活跃度、新增用户15%，点击量同比改版前日均增长3000w，得到业界与用户的一致好评。<br>2、 根据腾讯明星关系链优势开发创新了明星和你一起聊弹幕；、<br>3、
                根据用户调研统计，创建明星粉丝饭团有线上线下活动，增加粉丝间互动和对品牌热衷度，<br>4、 全球追剧时间表等模块改进用户观看体验等。<br>-----------------------------------------------------------<br><br><br><br><br>职务：2009年-2011年：腾讯视频项目经理<br>简介：创建腾讯视频，参与腾讯视频Logo设计、内容创新、
                频道改版、微博官号创建者。<br>1.负责国内外影视剧专题策划，焦点图以及页面设计--剑3/宫/步步惊心/新还珠格格等； <br>2.新剧上线前，先收集相关资料，提前做好运营推广计划，包括跨部门合作，策划专题的交互，设计，需求跟进，确保专题准时上线。<br>3.新剧上线期间，剧集宣传工作，焦点图，微博
                日志 tips aio的第一时间推广更新。<br>4.竞品播放量跟踪，进行分析对比，更改运营计划。 每周要出周报，汇报工作情况，运营质量，出现问题和改进建议等。 <br>5.明星访谈节目编导：包括每期访谈的脚本，提问的环节，明星录制视频台词
                明星资料收集等，负责的节目：大牌驾到 腾讯名人访等<br>业绩：<br>1.N个千万项目成功经验新还珠格格 爱情公寓系列 仙剑系列 创10亿多最高播放量等。 <br>2.视频类播放量记录创业界播放量第一。<br>3.结合当下热门话题制作影视专题策划；腾讯视频官号日常运维等。
                <br>4内地剧、韩剧项目上线推广运营计划、定期输出运营数据总结、各渠道沟通；<br>5.内地剧-单剧竞品播放量第一 ；韩剧-独播韩剧创造破亿播放量新记录。<br>6韩剧策划的人物期刊《男色时代》被升级为腾讯视频主打人物策划《Ta时代》。<br><br>-----------------------------------------------------------<br><br><br><br>2008年-2009年
                ： 拍拍网UI设计师 <br>负责拍拍网，运营卖场设计，市场推广活动设计，产品页面设计，外部推广广告设计。<br>业绩：设计的焦点图和专题点击量日均新高。
              </div>
            </div>
          </div>
          <h2 class="lie-h2"><i class="lie-icon lie-project_ico"></i>项目经历</h2>
          <h2 class="lie-h2"><i class="lie-icon lie-education_ico"></i>教育经历</h2>
          <div class="lie-resume-slip-content-li lie-resume-slip-content-li-e">
            <div class="slip-content-info-li"><span>2004.09 - 2008.07 &nbsp;&nbsp;|&nbsp;&nbsp;</span> <span>北京师范大学珠海校区国际传媒设计学院DFI &nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span>其他 &nbsp;&nbsp;|&nbsp;&nbsp;</span> <span>本科</span></div>
          </div>
          <h2 class="lie-h2"><i class="lie-icon lie-evaluation_ico"></i>自我评价</h2>
          <div class="lie-resume-slip-evalu">熟练掌握photoshop&nbsp;&nbsp;AI&nbsp;MindNode&nbsp;axure&nbsp;sktech&nbsp;justinmind&nbsp;等原型设计软件，擅长app&amp;网页设计、有美术功底，对工作认真负责追求完美。既有良好团队协作精神，也可独立完成任务。<br><br>兴趣爱好:&nbsp;热爱美食，热爱摄影，擅长美食摄影，旅拍，身心健康，略懂韩语。<br>
          </div>
        </div>
      </div> <!----> <!----> <!---->
      <div class="el-loading-mask" style="display: none;">
        <div class="el-loading-spinner">
          <svg viewBox="25 25 50 50" class="circular">
            <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
          </svg><!----></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "animate-resume-desc",
    methods:{
      closeAnimateResume: function(){
        this.$emit('closeAnimateResume',true)
      }
    }
  }
</script>

<style scoped>

</style>
