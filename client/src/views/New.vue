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
  name: 'new-tag',
  components: {
    'tag-form': tagForm
  },
  methods: {
    createOrUpdate: async function(tag) {
      const res = await api.createtag(tag);
      this.flash('tag created sucessfully!', 'success');
      this.$router.push(`/tags/${res._id}`);
    }
  }
};
</script>