<template>
  <div>
    <h1>Edit tag</h1>
    <tag-form @createOrUpdate="createOrUpdate" :tag=this.tag></tag-form>
  </div>
</template>

<script>
import tagForm from '../components/TagForm';
import { api } from '../helpers/api.helper';

export default {
  name: 'EditTag',
  components: {
    'tag-form': tagForm
  },
  data: function() {
    return {
      tag: {}
    };
  },
  methods: {
    createOrUpdate: async function(tag) {
      await api.updatetag(tag);
      this.flash('tag updated sucessfully!', 'success');
      this.$router.push(`/tags/${tag._id}`);
      this.list(tag._id);
    },
    list(tagId) {
      this.$socket.emit('list', {
        tagId: tagId
      });
    }
  },
  async mounted() {
    this.tag = await api.gettag(this.$route.params.id);
  }
};
</script>