<template>
  <div
    v-loading="imageLoading"
    element-loading-text="请稍等，图片上传中"
  >
    <quill-editor
      ref="newEditor"
      style="height: 200px; margin-bottom: 54px"
      v-model="editorContent"
      @change="editorChange"
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
</template>

<script>
  import {quillEditor} from 'vue-quill-editor'
  export default {
    components:{
      quillEditor
    },
    data(){
      return{
        imageLoading:false,
        editorContent:'',
        file:''
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
    methods: {
      editorChange(){
      },
      uploadImg:async function(id){
        let el = this
        el.imageLoading = true
        var uploadForm = document.getElementById(id)
        var formData = new FormData(uploadForm)
        el.uploadImgReq(formData)
//        el.$http(el.$api.adminUploadImg,formData).then(function (response) {
//          console.log(response);
//          }).catch(function (error) {
//            console.log(error);
//          })
      },
      uploadImgReq(formData){/*上传图片*/
        let el = this
        el.$http(el.$api.adminUploadImg,formData)
        .then((res)=>{
          alert(formData+res.message)
        },(error)=>{
          alert("error"+error)
        })
      }
//      uploadImg: async function(id) {
//        var el = this
//        el.imageLoading = true
//        var formData = new FormData(document.getElementById(id))
//        try {
//          const url = await el.uploadImgReq(formData)// 自定义的图片上传函数
//          if (url != null && url.length > 0) {
//            var value = url
//            el.addImgRange = el.$refs.newEditor.quill.getSelection()
//            value = el.$BaseUrl + value
//            el.$refs.newEditor.quill.insertEmbed(el.addImgRange != null?el.addImgRange.index:0, 'image', value, Quill.sources.USER)
//          } else {
//            alert("图片增加失败")
//          }
//          document.getElementById("uniqueId").value=''
//        } catch ({message: msg}) {
//          document.getElementById("uniqueId").value=''
//          alert(msg)
//        }
//        el.imageLoading = false
//      },
//      uploadImgReq(formData){
//        var el = this
//        el.$http(el.$api.adminUploadImg,formData)
//          .then((res)=>{
//            console.log("success"+JSON.stringify(res))
//          },(error)=>{
//            console.log("error"+error)
//          })
//      }
    }
  }
</script>
