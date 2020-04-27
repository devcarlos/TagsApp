<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill the Tag fields!</p>
    <div class="ui labeled input fluid">
        <div class="ui label">
            <i class="calendar plus icon"></i>Tag
        </div>
        <input type="text" placeholder="Enter tag..." v-model="tag.name" />
    </div>

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'tag-form',
  props: {
    tag: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.tag.name === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.tag);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>