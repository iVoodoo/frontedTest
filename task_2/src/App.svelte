<script lang="ts">
  import Input from "./lib/Input.svelte";
  import Selector from "./lib/Selector.svelte";

  let apiKey = "0fd53276cb5c72027e93b686";

  $: currency1 = "RUB";
  $: currency2 = "USD";

  $: amount1 = 0;
  $: amount2 = 0;

  $: if (amount1 || currency1) {
    convertCurrency(amount1);
  }

  $: if (amount2 || currency2) {
    convertCurrency(amount2);
  }

  let number;

  async function convertCurrency(amount: number) {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${currency1}/${currency2}/`
    );
    number = await response.json().then((data) => {
      return data.conversion_rate;
    });

    if (amount === amount1) {
      amount2 = amount1 * number;
    }
    if (amount === amount2) {
      amount1 = amount2 / number;
    }
  }
</script>

<main>
  <h1>Конвертер валют</h1>
  <div class="selector-section">
    <Selector bind:selectedCurrency={currency1} />
    <Selector bind:selectedCurrency={currency2} />
  </div>
  <div class="input-section">
    <Input bind:amount={amount1} />
    <Input bind:amount={amount2} />
  </div>
  <div>
    <p>
      {amount1?.toFixed(2)}
      {currency1} -> {amount2?.toFixed(2)}
      {currency2}
    </p>
  </div>
</main>

<style>
  .selector-section {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    margin-bottom: 30px;
  }
  .input-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
</style>
