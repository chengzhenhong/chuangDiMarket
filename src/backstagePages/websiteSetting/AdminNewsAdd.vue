<template>
  <div class="my-form">
    <div class="my-form-title">
      添加新闻公告
    </div>
    <div class="my-form-content">
      <div class="my-form-item">
        <span>标题</span>
        <input type="text" v-model="Title"/>
      </div>
      <div class="my-form-item">
        <span>内容</span>
      </div>
      <!--富文本编辑器-->
      <div
        v-loading="imageLoading"
        element-loading-text="请稍等，图片上传中"
      >
        <quill-editor
          ref="newEditor"
          style="height: 200px; margin-bottom: 54px"
          v-model="editorContent"
        >
        </quill-editor>
        <form action="" method="post" enctype="multipart/form-data" id="uploadFormMulti">
          <input
            style="display: none;"
            id="inputId"
            type="file"
            name="newsImg"
            multiple accept="image/jpg,image/jpeg,image/png,image/gif"
            @change="uploadImg('uploadFormMulti')"
          >
        </form>
      </div>
      <div class="my-form-item">
        <button v-on:click="saveNews">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'
  import Quill from 'quill'
  export default {
    components: {
      quillEditor
    },
    data () {
      return {
        Title:'',
        imageLoading:false,
        editorContent:'',
        imgUrl:'',
        addImgRange:''
      }
    },
    mounted(){
      var el = this
      var imgHandler = async function (state) {
        if(state){/*上传图片的按钮被点击*/
          var fileInput = document.getElementById('inputId') //隐藏的file文本ID
          fileInput.click()
        }
      }
      el.$refs.newEditor.quill.getModule("toolbar").addHandler("image", imgHandler)/*注册图片处理函数*/
    },
    methods:{
      uploadImg:function(id){
        let el = this
        el.imageLoading = true
        var uploadForm = document.getElementById(id)
        var formData = new FormData(uploadForm)
        el.uploadImgReq(formData)/*调用自定义上传图片方法，返回图片地址*/
      },
      insertIntoEditor:function(url){
        let el = this
        try {
          if (url != null && url.length > 0) {
            var value = url
            el.addImgRange = el.$refs.newEditor.quill.getSelection()
            value = el.$BaseUrl + value
            el.$refs.newEditor.quill.insertEmbed(el.addImgRange != null?el.addImgRange.index:0, 'image', value, Quill.sources.USER)
          } else {
            alert("图片增加失败")
          }
          document.getElementById("inputId").value=''
        } catch ({message: msg}) {
          document.getElementById("inputId").value=''
          alert(msg)
        }
        el.imageLoading = false
      },
      uploadImgReq(formData){/*上传图片方法*/
        let el = this
        el.$http(el.$api.adminUploadImg,formData)
        .then((res)=>{
          el.insertIntoEditor(res.data)
        },(error)=>{
          return null
        })
      },
      saveNews(){/*保存新增的新闻*/
        let el = this
        let data = {
          title:el.Title,
          context:el.editorContent
        }
        el.$http(el.$api.adminNewsAdd,data)
        .then((res)=>{
          alert(res.message)
          el.$router.push('/admin/index/shopNews')/*跳转到新闻列表页*/
        },(error)=>{
          alert(error.message)
        })
      }
    }
  }
</script>
<style>
  .quill-editor,
  .ql-container{
    height:100% !important;
    min-height: 350px;
  }
</style>
