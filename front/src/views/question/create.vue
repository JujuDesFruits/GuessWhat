<template>
  <page-container>
    <QuestionForm />
  </page-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageContainer from "@/components/PageContainer.vue";
import QuestionForm from "@/components/Questions/Form.vue";

@Component({
  name: 'QuestionCreate',
  components: {
    PageContainer,
    QuestionForm
  },
})
export default class extends Vue {

  get name() {
    return 'QuestionCreate';
  }

}
</script>

<style lang="scss" scoped>
.profile {
  .profile-title {
    text-align: center;
    color: white;
  }

  .profile-menu {
    width: 100%;
    align-self: center;
    display: contents;

    .username {
      color: white;
      margin-top: 5px;
      margin-bottom: 20px;
    }

    .menu-item {
      color: white;
      margin-top: 50px;
    }

    .content {
      align-self: center;
      text-align: center;
    }
  }
}
.avatar-uploader {
   border: 1px dashed #d9d9d9 !important;
   border-radius: 6px;
   cursor: pointer;
   position: relative;
   overflow: hidden;
   width: 178px;
   height: 178px;
 }
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #ffffff;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
