<script lang="ts">
  export let amount = 0;
</script>

<input placeholder="введите сумму" bind:value={amount} type="number" />

<style>
  input {
    padding: 20px;
    border-radius: 20px;
    border-color: transparent;
    outline: none;
    font-size: 16px;
    font-family: monospace;
  }

  input:active,
  input:focus-visible {
    border-color: #ff3e00;
  }
</style>
