<h1>Svelte Tunez</h1>

<input />
<select>
  <option>Option</option>
</select>
<button>Button</button>


<style lang="scss">
  
  h1 {
    color: #ff4500;
    font-size: functions.toRem(36);
    @include breakpoint.up('md') {
      color: #18b8f8
    }
    @include breakpoint.up('lg') {
      color: #ffd700
    }
  }
</style>