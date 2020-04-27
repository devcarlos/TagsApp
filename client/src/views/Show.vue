<template>
  <div>
    <h1>Show tag</h1>

    <div class="ui labeled input fluid">
        <div class="ui label">
            <i class="pencil icon"></i> Color
        </div>
        <div id="container">
            <div id="inner" v-bind:style="{ 'background': tag.color }"></div>
        </div>
    </div>    
    <div class="ui labeled input fluid">
        <div class="ui label">
            <i class="tag icon"></i> Tag
        </div>
        <input type="text" readonly  :value="tag.name"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit tag
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/api.helper';
export default {
  name: 'show',
  data() {
    return {
      tag: ''
    };
  },
  async mounted() {
    this.tag = await api.gettag(this.$route.params.id);
  }
};
</script>

<style scoped>
#container
{
    height:50px;
    width:50px;
}
#inner
{
    height:30px;
    width:30px;
    background:rgb(33, 23, 172);
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    margin-left:25%;
    margin-top:25%;
}
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>