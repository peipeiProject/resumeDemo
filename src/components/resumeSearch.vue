<template>
  <main class="el-main lie-main ">
    <div class="lie-content">
      <div class="w-full h-full lie-content-init">
        <div class="lie-search-init">
          <div class="lie-search">
            <div class="lie-search-man-input el-input">
              <!---->
              <input type="text" v-model="keyword" autocomplete="on" placeholder="搜索公司、职位、工作年限、学历、城市、省份，关键词之间用空格隔开" class="el-input__inner">
              <!---->
              <!----><!---->
            </div>
            <button @click="toResultListPage" type="button" class="el-button lie-btn lie-search-btn el-button--default">
              <!----><!---->
              <span>搜索</span>
            </button>
          </div>
          <div class="lie-search-example">
            <p cla="title">搜索示例</p>
            <span v-for='(item,index) of hotWords' @click="hotWordSearch(item)">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "resume-search",
    data() {
      return {
        hotWords: ['销售', 'JAVA 3-5年', '百度 北京', '产品经理 深圳 本科', '阿里巴巴 杭州 运营 25-35岁'],
        keyword:''
      }
    },

    methods:{
      hotWordSearch(keywords){
        this.keyword = keywords;
        this.toResultListPage();
      },
      toResultListPage(){
        this.$router.push({path:'/resumeSearchList?keyword='+this.keyword});
      }
    }
  }
</script>
