webpackJsonp([1],{23:function(e,t,n){"use strict";var s=n(2),a=n(75),i=n(72),r=n.n(i);s.default.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Hello",component:r.a}]})},25:function(e,t){},26:function(e,t,n){n(70);var s=n(22)(n(51),n(73),null,null);e.exports=s.exports},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),a=n(27),i=n(26),r=n.n(i),o=n(23),l=n(24),c=n.n(l),u=n(25);n.n(u);s.default.use(c.a),s.default.use(a.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{newTask:{},tasks:[],show_header:!1}},created:function(){this.newTask={},this.refresh()},methods:{refresh:function(){this.$http.get("/task").then(function(e){this.tasks=e.data.Tasks?e.data.Tasks:[]})},createTask:function(){if(!this.newTask.Title.trim())return void(this.newTask={});this.newTask.checked=!1,this.$http.post("/task",{Title:this.newTask.Title}).then(function(e){this.refresh(),this.newTask={Title:""}},function(e){console.log(e)})},changeTaskState:function(e){var t={ID:e.ID,Title:e.Title,Done:!e.Done};console.log("to change info"),console.log(t),this.$http.put("/task/"+e.ID,t).then(function(e){this.refresh()},function(e){console.log(e)})},setCurrent:function(e){this.$refs.singleTable.setCurrentRow(e)},handleCurrentChange:function(e){e&&(this.currentRow=e,this.currentRow.checked=!0,console.log(e),this.changeTaskState(e))}}}},70:function(e,t){},71:function(e,t){},72:function(e,t,n){n(71);var s=n(22)(n(52),n(74),"data-v-d46d21cc",null);e.exports=s.exports},73:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"menu"}}),e._v(" "),n("h1",{staticClass:"charcoal rounded-box"},[e._v("ToDo")]),e._v(" "),n("h2",[e._v("Tasks")]),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},74:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[e.tasks.length>0?n("div",{staticClass:"tasktable",attrs:{align:"center"}},[n("el-table",{ref:"singleTable",staticStyle:{width:"20%"},attrs:{data:e.tasks,"show-header":e.show_header,"highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{width:"200",context:e._self,label:"Title"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.row.Done?n("div",[n("del",[e._v(e._s(e.row.Title))])]):n("div",[e._v(" "+e._s(e.row.Title)+" ")])},staticRenderFns:[]}})],1)],1):e._e(),e._v(" "),n("el-input",{attrs:{type:"text",placeholder:"请输入内容"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.createTask(t)}},model:{value:e.newTask.Title,callback:function(t){e.newTask.Title=t},expression:"newTask.Title"}},[n("el-button",{attrs:{icon:"plus",type:"primary"},on:{click:e.createTask},slot:"append"},[e._v("New Task")])],1)],1)},staticRenderFns:[]}},78:function(e,t){}},[50]);
//# sourceMappingURL=app.2349fd9472834be8a5b2.js.map