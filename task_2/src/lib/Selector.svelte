<script lang="ts">
  let currencies = ["RUB", "USD", "EUR", "GBP", "KZT"];
  export let selectedCurrency = "RUB";
</script>

<select bind:value={selectedCurrency}>
  {#each currencies as currency}
    <option value={currency}>
      {currency}
    </option>
  {/each}
</select>

<style>
  select {
    padding: 10px 20px;
    border-radius: 20px;
    border-color: transparent;
    outline: none;
    font-size: 16px;
    font-family: monospace;
  }

  select:active,
  select:focus-visible {
    border-color: #ff3e00;
  }
  select option {
    font-size: 16px;
  }
</style>
