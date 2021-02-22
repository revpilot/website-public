<template>
  <div class="logo">
    <NuxtLink to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 663.22 190.91"
        :width="size"
      >
        <text
          transform="translate(200.65 127.16)"
          font-size="83.88"
          :fill="colorCalc.sec"
          font-family="HelveticaNeue-Bold, Helvetica Neue"
          font-weight="700"
          letter-spacing="-0.04em"
        >
          Sales
          <tspan
            x="218.08"
            y="0"
            :fill="colorCalc.main"
            letter-spacing="-0.05em"
          >
            Sensei
          </tspan>
        </text>
        <path
          d="M105.19,8.86a95.46,95.46,0,1,0,95.46,95.45A95.45,95.45,0,0,0,105.19,8.86Zm75.3,99.78L110.54,149a5,5,0,0,1-2.5.67,4.93,4.93,0,0,1-2.5-.67,5,5,0,0,1-2.5-4.33v-26L50.44,149a5,5,0,0,1-7.5-4.33V63.92a5,5,0,0,1,7.5-4.33L103,90v-26a5,5,0,0,1,7.5-4.33l70,40.39a5,5,0,0,1,0,8.66Z"
          transform="translate(-9.74 -8.86)"
          :fill="colorCalc.main"
        />
      </svg>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["color", "size"],
  data: function () {
    return {
      colorLogo: "#3f5683",
    };
  },
  computed: {
    colorCalc: function () {
      return this.color
        ? { main: this.color, sec: this.color }
        : { main: "#cb6828", sec: "#231f20" };
    },
  },
};
</script>

<style>
.logo {
  animation: 1s appear;
  margin: auto;
  width: 300px;
  color: white;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
