<template>
  <div>
    <el-card>
      <el-page-header content="新闻列表" title="新闻管理" icon="" />

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题" />

        <el-table-column label="分类">
          <template #default="scope">
            {{ categoryFormat(scope.row.category) }}
          </template>
        </el-table-column>

        <el-table-column label="更新时间">
          <template #default="scope">
            {{ formatTime.getTime(scope.row.editTime) }}
          </template>
        </el-table-column>

        <el-table-column label="是否发布">
          <template #default="scope">
            <el-switch
              v-model="scope.row.isPublish"
              :active-value="1"
              :inactive-value="0"
              @change="handleSwitchChange(scope.row)"
            />
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              circle
              :icon="Star"
              type="success"
              @click="handlePreview(scope.row)"
            ></el-button>

            <el-button circle :icon="Edit" @click="handleEdit(scope.row)"></el-button>

            <el-popconfirm
              title="确定要删除吗"
              confirmButtonText="确定"
              cancelButtonText="取消"
              @confirm="handleDelete(scope.row)"
            >
              <template #reference>
                <el-button circle :icon="Delete" type="danger"></el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog v-model="dialogVisible" title="预览新闻" width="50%">
      <div>
        <h2>{{ previewData.title }}</h2>
        <div style="font-size: 12px; color: gray">
          {{ formatTime.getTime(previewData.editTime) }}
        </div>
        <el-divider>
          <el-icon>
            <star-filled />
          </el-icon>
        </el-divider>
        <div v-html="previewData.content" class="htmlcontent"></div>
      </div>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import formatTime from "@/util/formatTime";
import { Star, Edit, Delete, StarFilled } from "@element-plus/icons-vue";
import {useRouter} from "vue-router"
// import { useStore } from "vuex";

// const store = useStore();
const router = useRouter()


const tableData = ref([]);
const previewData = ref({});
const dialogVisible = ref(false);

onMounted(() => {
  getTableData();
});

const getTableData = async () => {
  const res = await axios.get("/adminapi/news/list");
  // const res = await axios.get(`/adminapi/news/userlist/${store.state.userInfo.username}`)
  tableData.value = res.data.data;
};

const categoryFormat = (category) => {
  const arr = ["最新动态", "典型案例", "通知公告"];
  return arr[category - 1];
};

//开关回调
const handleSwitchChange = async (item) => {
  await axios.put(`/adminapi/news/publish`, {
    _id: item._id,
    isPublish: item.isPublish,
  });

  await getTableData();
};

//预览回调
const handlePreview = (data) => {
  previewData.value = data;
  dialogVisible.value = true;
};

//编辑回调
const handleEdit = (item)=>{
    router.push(`/news-manage/editnews/${item._id}`)
}

//删除回调
const handleDelete = async (data) => {
  await axios.delete(`/adminapi/news/list/${data._id}`);
  getTableData();
};
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 30px;
}

::v-deep .htmlcontent {
  img {
    max-width: 100%;
  }
}
</style>