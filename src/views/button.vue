<template>
  <div class="container">
    <div class="bar bar-nav">
      <x-header>首页</x-header>
    </div>
    <div class="bar bar-footer">
      <footer-bar></footer-bar>
    </div>
    <div class="content">
      <divider>default</divider>
      <div class="p-md">
        <x-button>submit</x-button>
        <x-button type="primary">primary</x-button>
        <x-button type="warn">Delete</x-button>
        <divider>link</divider>
        <x-button type="primary" link="/demo">Go to demo list</x-button>
        <x-button type="default" link="BACK">Back</x-button>
        <divider>action type</divider>
        <x-button type="primary" action-type="button">submit</x-button>
        <x-button type="warn" action-type="reset">reset</x-button>
        <divider>loading</divider>
        <x-button type="default" show-loading>submit</x-button>
        <x-button type="primary" show-loading>submit</x-button>
        <x-button type="warn" show-loading>submit</x-button>
        <divider>mini</divider>
        <x-button mini>submit</x-button>
        <x-button mini type="primary">primary</x-button>
        <x-button mini type="warn">Delete</x-button>
        <x-button mini type="danger">Delete</x-button>
        <br>
        <x-button mini plain>submit</x-button>
        <x-button mini plain type="primary">primary</x-button>
        <x-button mini plain type="warn">primary</x-button>
        <x-button mini plain type="danger">primary</x-button>
        <divider>plain</divider>
        <x-button plain>submit</x-button>
        <x-button plain type="primary">primary</x-button>
        <x-button plain type="warn">warn</x-button>
        <divider>you can customize styles</divider>
        <x-button plain type="primary" style="border-radius:99px;">primary</x-button>
        <x-button plain type="primary" class="custom-primary-red">primary</x-button>
        <divider>disabled</divider>
        <x-button disabled>disable submit</x-button>
        <x-button type="primary" disabled>disable primary</x-button>
        <x-button type="warn" disabled>disable Delete</x-button>
        <x-button mini disabled>disable mini submit</x-button>
        <x-button mini type="primary" disabled>disable mini primary</x-button>
        <x-button mini type="warn" disabled>disable mini Delete</x-button>
        <x-button plain disabled>disable plain</x-button>
        <x-button plain type="primary" disabled>disable plain primary</x-button>
        <divider>use :text and :disabled</divider>
        <x-button type="primary"></x-button>
        <divider>combined with flexbox</divider>
        <flexbox>
          <flexbox-item>
            <x-button type="primary">primary</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="warn">Delete</x-button>
          </flexbox-item>
        </flexbox>
        <divider>combined with flexbox</divider>
        <flexbox>
          <flexbox-item>
            <x-button type="default">default</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary">primary</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="warn">Delete</x-button>
          </flexbox-item>
        </flexbox>
      </div>
      <divider>iOS Gradients(v2.7.4)</divider>
      <div class="p-md">
        <x-button :gradients="['#1D62F0', '#19D5FD']">iOS Gradients</x-button>
        <x-button :gradients="['#A644FF', '#FC5BC4']">iOS Gradients</x-button>
        <x-button :gradients="['#FF2719', '#FF61AD']">iOS Gradients</x-button>
        <x-button :gradients="['#6F1BFE', '#9479DF']">iOS Gradients</x-button>
        <x-button :gradients="['#FF5E3A', '#FF9500']">iOS Gradients</x-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>

</style>
