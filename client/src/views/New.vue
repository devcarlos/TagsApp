<template>
  <div>
    <h1>New tag</h1>
    <tag-form @createOrUpdate="createOrUpdate"></tag-form>
  </div>
</template>

<script>
import tagForm from '../components/TagForm';
import { api } from '../helpers/api.helper';

export default {
  name: 'NewTag',
  components: {
    'tag-form': tagForm
  },
  methods: {
    createOrUpdate: async function(tag) {
      const res = await api.createtag(tag);
      this.flash('tag created sucessfully!', 'success');
      this.$router.push(`/tags/${res._id}`);
      this.list(res._id);
    },
    list(tagId) {
      this.$socket.emit('list', {
        tagId: tagId
      });
    }
  }
};
</script>