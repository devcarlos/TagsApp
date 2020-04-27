<template>
  <div>
    <h1 class="h1">Tags App</h1>
    <table id="tags" class="ui celled compact table">
      <thead>
        <tr>
            <th class="center aligned"> <i class="info circle icon"></i>Color  </th>
            <th class="center aligned"> <i class="tag plus icon"></i>Task      </th>
            <th class="center aligned"> <i class="lock open icon"></i>         </th>
            <th class="center aligned"> <i class="edit icon"></i>              </th>
            <th class="center aligned"> <i class="trash icon"></i>             </th>
        </tr>
      </thead>
      <tr v-for="(tag, i) in tags" :key="i">
        <td width="100" class="center aligned">
            <div id="container">
                <div id="inner" v-bind:style="{ 'background': tag.color }"></div>
            </div>
        </td>
        <td>{{ tag.name }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: tag._id }}">Show</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: tag._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(tag._id)">
          <a :href="`/tags/${tag._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/api.helper';
export default {
  name: 'tags',
  data() {
    return {
      tags: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deletetag(id);
      this.flash('tag deleted sucessfully!', 'success');
      const newtags = this.tags.filter(tag => tag._id !== id);
      this.tags = newtags;
    }
  },
  async mounted() {
    this.tags = await api.gettags();
  }
};
</script>

<style scoped>
.h1 {
    height: 100px;
    padding-top: 50px;
    vertical-align: middle;
}
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
</style>