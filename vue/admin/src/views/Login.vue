<template>
  <div>
    <vue-particles
      id="tsparticles"
      :particlesLoaded="particlesLoaded"
      :options="option"
    />
    <div class="formContainer">
      <h3>企业门户网站管理系统</h3>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        status-icon
        :rules="loginRules"
        label-width="80px"
        class="loginform"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登入</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { ElMessage } from 'element-plus'
import {useStore} from "vuex"

const router = useRouter();
const store = useStore()

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
  //   await loadSlim(engine);
};

const loginForm = reactive({
  username: "",
  password: "",
});

const loginFormRef = ref();

const loginRules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
});


const submitForm = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      axios.post("/adminapi/user/login", loginForm).then((res) => {
        if (res.data.ActiveType === "OK") {
          // console.log(res.data.data);
          store.commit("changeUserInfo",res.data.data)
          store.commit("changeGetterRouter",false)
          router.push("/index");
        }else{
          ElMessage.error('用户名和密码不匹配')
        }
      });
    }
  });
};

const option = {
  background: {
    color: {
      value: "#2d3a4b",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
</script>

<style lang="scss" scoped>
.formContainer {
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 20px;
  background: rgba($color: #000, $alpha: 0.5);

  h3 {
    font-size: 30px;
  }

  .loginform {
    margin-top: 20px;
  }
}

::v-deep .el-form-item__label {
  color: white;
}
</style>