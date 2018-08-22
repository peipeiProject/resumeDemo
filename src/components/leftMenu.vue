<template>
  <section class="el-container lie-layout">
    <aside class="el-aside lie-aside" style="width:124px">
      <a href="javascript:;" class="lie-login">
        <img src="../assets/img/logo.png">
      </a>
      <ul class="lie-scrollbar">
          <li v-for='(item,index) of items' :class='{active:index === idx}' @click="activeIndex(index,item.name)">
            <router-link :to='{path:item.push}'>
              <i :class="['lie-icon', item.cls]"></i>
              <span>{{item.name}}</span>
            </router-link>
          </li>

      </ul>
    </aside>
    <section class="el-container is-vertical">
      <header class="el-header lie-header" style="height: 64px;">
        <div class="lie-header-title">{{titleName}}
          <span v-show="titleName == '搜索简历'">（每天更新简历10万+）</span>
        </div>
        <div class="lie-header-info">
          <a href="javascript:;" class="login-out-a"><i
            class="lie-icon login-out"></i>退出</a></div>
      </header>
      <router-view v-on:viewIn="changeIsShowResumeList"></router-view>

    </section>
    <div id="lie-slip">
      <div class="lie-mask" v-show="isShowModel"></div>
      <animateResumeDesc v-if="isShowResumeList" v-on:closeAnimateResume="closeAnimateResume"></animateResumeDesc>
    </div>

  </section>
</template>

<script>
import animateResumeDesc from './animateResumeDesc';
export default {
  name: 'left-menu',
  components: {
    animateResumeDesc
  },
  data () {
    return {
      items: [
        {
        cls: 'lie-aside-icon-3',
        name: '搜索简历',
        push: '/resumeSearch'
      },
      {
        cls: 'lie-aside-icon-5',
        name: '简历管理',
        push: '/resumeSystem'
      }],
      idx: 0,
      titleName:'搜索简历',
      isShowResumeList:false,
      isShowModel:false
    }
  },
  methods: {
    activeIndex(index,name){
      this.idx = index;
      this.titleName = name;
    },
    changeIsShowResumeList(){
      this.isShowModel = true;
      this.isShowResumeList = true;
    },
    closeAnimateResume(){
      this.isShowModel = false;
      this.isShowResumeList = false;
    }
  }
}
</script>
