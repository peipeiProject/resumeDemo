<template>
  <main class="el-main lie-main ">
    <div class="lie-content ov-h"><!---->
      <div class="w-full h-full lie-scrollbar-white ov-y lie-go-top-scrollbar">
        <div class="lie-search">
          <div class="lie-search-man-input el-input"><!---->
            <input type="text" v-model="query.keyWords" autocomplete="on" placeholder="搜索公司、职位、工作年限、学历、城市、省份，关键词之间用空格隔开"
                   class="el-input__inner">
          </div>
          <button type="button" @click="searchResume" class="el-button lie-btn lie-search-btn el-button--default">
            <span>搜索</span>
          </button>
        </div>
        <div class="lie-search-prompt"><p>搜索规则任意组合即可：公司+职位+工作年限+年龄+城市等</p></div>
        <div class="lie-search-content no-b-padding">
          <div class="lie-search-count"><p>找到 <span class="yellow">{{resumeListData.total}}</span> 份简历</p></div>
          <div class="lie-search-query">
            <form class="el-form lie-form demo-form-inline el-form--inline">
              <div class="el-form-item"><label class="el-form-item__label">性别</label>
                <div class="el-form-item__content">
                  <el-select v-model="query.sex" placeholder="请选择" class="lie-w-90" v-on:change="searchResume">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <!---->
                </div>
              </div>
              <div class="el-form-item">
                <label class="el-form-item__label">薪酬范围</label>
                <div class="el-form-item__content">
                  <el-popover placement="bottom" v-model="salaryShow">
                    <div class="el-form-item lie-popover-item">
                      <label class="el-form-item__label">月薪</label>
                      <div class="el-form-item__content" style="width: 570px;">
                        <div class="lie-w-140 salaryInput el-input el-input--medium">
                          <input type="text" v-model="query.salaryFrom" autocomplete="off" placeholder="5000" class="el-input__inner">
                        </div>
                        <span>-</span>
                        <div class="lie-w-140 salaryInput el-input el-input--medium">
                          <input type="text" v-model="query.salaryTo" autocomplete="off" placeholder="10000" class="el-input__inner">
                        </div>
                        <button type="button" @click="salaryShow=false;changeSalaryRang()"
                                class="el-button lie-btn el-button--default el-button--medium">
                          <span>确认</span>
                        </button>
                        <button type="button" @click="salaryShow=false" class="el-button lie-btn-d el-button--default el-button--medium">
                          <span>取消</span>
                        </button>
                      </div>
                    </div>
                    <div class="lie-w-150 el-input" tabindex="0" slot="reference">
                      <input type="text" v-model="salaryRangeType" autocomplete="off" placeholder="不限" readonly="readonly"
                             class="el-input__inner">
                    </div>
                  </el-popover>
                </div>
              </div>
              <div class="el-form-item">
                <label class="el-form-item__label">城市</label>
                <div class="el-form-item__content lie-w-150 ">
                  <el-cascader
                    :options="citys"
                    v-model="query.selectedOptions"
                    @change="handleChange">
                  </el-cascader>
                </div>
              </div>
              <div class="el-form-item"><label class="el-form-item__label">更新时间</label>
                <div class="el-form-item__content">
                  <el-select v-model="query.update" placeholder="请选择" style="width:150px" @change="searchResume">
                    <el-option v-for="item in updates" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </form>
            <div class="lie-pagination">
              <ul><!----> <!---->
                <li class="active"><span>1</span></li>
                <li><a href="javascript:void(0)">2</a></li>
                <li><a href="javascript:void(0)">3</a></li>
                <li><a href="javascript:void(0)">4</a></li>
                <li><a href="javascript:void(0)">5</a></li>
                <li><a href="javascript:void(0)"><i class="el-icon-arrow-right"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="lie-search-result">
            <div class="lie-search-result-li" v-for="item in resumeListData.data">
              <div class="lie-search-result-c">
                <div class="lie-search-result-i">
                  <div class="result-i"><span>ID：</span>{{item.resumeId}}</div>
                </div>
                <div class="lie-search-result-ii">
                  <div class="result-ii"><span>求职意向：</span>
                    <em v-for="(expectPositionsItem,index) in item.expectPositions">{{expectPositionsItem | arrFilterLine(index)}} </em>
                  </div>
                  <div class="result-ii"><span>期望城市：</span>
                    <em v-for="(expectAreasItem,index) in item.expectAreas">{{expectAreasItem | arrFilterLine(index)}}</em>
                  </div>
                  <div class="result-ii"><span>期望薪资：</span>{{item.expectSalary}} 元 /月</div>
                  <div class="result-ii"><span>更新时间：</span>{{item.resumeLastUpdate}}</div>
                </div>
                <div class="lie-search-result-t" @click="viewIn">
                  {{item.name | filterSex(item.sex)}}
                  {{item.age | capitalizesLine}}岁 {{item.workedYears | capitalizesLine}}年工作经验
                  <em v-html="item.lastCompany | capitalizesLine"></em>
                  <em>{{item.lastPosition | capitalizesLine}}</em>
                  | <em v-for="(currentIndustryItem,index) in item.currentIndustry">{{currentIndustryItem | arrFilterLine(index)}}</em>
                  {{item.currentArea | capitalizesLine}} <!----></div>
                <div class="lie-search-result-iii">
                  <div class="result-ii-t">工作经历：</div>
                  <div class="result-ii-i">
                    <dl v-for="workExpItem in item.workExp">
                      <dd v-html="workExpItem.companyName"></dd>
                      <dd>{{workExpItem.position}}</dd>
                      <dd>{{workExpItem.startDate}} - {{workExpItem.endDate}}</dd>
                    </dl>
                  </div>
                </div>
                <div class="lie-search-result-iii no-margin">
                  <div class="result-ii-t">教育经历：</div>
                  <div class="result-ii-i">
                    <dl><em>{{item.lastSchool}}</em><em>{{item.major | capitalizesLine}}</em><em>{{item.education | capitalizesLine}}</em></dl>
                  </div>
                </div>
              </div>
              <div class="lie-search-result-o">
              <button type="button" @click="viewIn" class="el-button lie-s-btn lie-s-btn-p el-button--default">
                 <span>
                  <i class="lie-icon lie-icon-detail"></i>查看详情
                 </span>
                </button>
                <button type="button" class="el-button lie-s-btn lie-s-btn-d el-button--default"><!----><!----><span><i
                  class="lie-icon lie-icon-collect lie-icon-loading228469314"></i>加入收藏
                                </span></button>
              </div>
            </div>
          </div>
          <div class="lie-pagination-footer lie-search-pagination-footer">
            <div class="lie-pagination">
              <ul><!----> <!---->
                <li class="active"><span>1</span></li>
                <li><a href="javascript:void(0)">2</a></li>
                <li><a href="javascript:void(0)">3</a></li>
                <li><a href="javascript:void(0)">4</a></li>
                <li><a href="javascript:void(0)">5</a></li>
                <li><a href="javascript:void(0)"><i class="el-icon-arrow-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="lie-go-top" style="display: none;"><i class="lie-icon lie-icon-go-top"></i></div>
    </div>
  </main>
</template>

<script>
  import resumeListData from '../assets/js/resumeListData';
  export default {
    name: "resume-search-list",
    filters: {
      capitalizesLine: function (value) {
        if (!value) return '';
        value = ' | ' + value;
        return value
      },
      arrFilterLine: function (value, index) {
        if (index == 0) {
          return value;
        } else {
          return ' | ' + value;
        }
      },
      filterSex: function (value, sex) {
        if (sex == '男') {
          value = value + '先生';
        } else {
          value = value + '女士';
        }
        return value
      }
    },
    resumeListData: resumeListData,
    created() {
      this.resumeListData = resumeListData;
      this.query.keyWords = this.$route.query.keyword;
    },
    data() {
      return {
        query: {
          keyWords: '',
          salaryFrom: '',
          salaryTo: '',
          sex: '', //性别
          update: '', //更新时间
          selectedOptions: [],//城市
        },
        page: 1,
        options: [
          {
            value: '',
            label: '不限'
          }, {
            value: '0',
            label: '男'
          }, {
            value: '1',
            label: '女'
          }
        ],
        updates: [
          {
            value: '',
            label: '不限'
          }, {
            value: '3',
            label: '最近3天'
          }, {
            value: '7',
            label: '最近7天'
          }, {
            value: '30',
            label: '最近30天'
          }, {
            value: '60',
            label: '最近60天'
          },
        ],
        citys: [
          {
            value: '河北',
            label: '河北',
            children: [
              {
                value: '承德',
                label: '承德'
              }]
          },
          {
            value: '浙江',
            label: '浙江',
            children: [{
              value: '杭州',
              label: '杭州'
            }, {
              value: '苏州',
              label: '苏州'
            }]
          }],
        salaryRangeType: '', //薪资区间
        salaryShow: false,//薪资框显示隐藏
        fullscreenLoading: false,//loading加载
      }
    },
    methods: {
      handleChange(value) { //修改城市
        console.log(value);
        this.searchResume();
      },
      changeSalaryRang() { //修改薪资
        if (this.query.salaryFrom == '' && this.query.salaryTo != '') {
          this.salaryRangeType = '不限 - ' + this.query.salaryTo;
        } else if (this.query.salaryFrom != '' && this.query.salaryTo == '') {
          this.salaryRangeType = this.query.salaryFrom + ' - 不限';
        } else if (this.query.salaryFrom == '' && this.query.salaryTo == '') {
          this.salaryRangeType = '';
        } else {
          if (parseInt(this.query.salaryFrom) > parseInt(this.query.salaryTo)) {
            this.$message({
              message: '上限薪资不能小于下限薪资',
              type: 'warning'
            });
            return;
          }
          this.salaryRangeType = this.query.salaryFrom + ' - ' + this.query.salaryTo;
        }
        this.searchResume();

      },
      searchresumeList() {//查询简历列表
        const loading = this.$loading({
          lock: true
        });
        setTimeout(() => {
          loading.close();
        }, 1000);
        console.log('query - ' + JSON.stringify(this.query) + ', page -' + this.page);
        this.resumeListData = resumeListData;
      },
      searchResume: function () {
        this.page = 1;
        this.searchresumeList();
      },
      viewIn: function(){
        this.$emit('viewIn',true)
      }
    },
    watch: {}

  }
</script>

<style scoped>

</style>
