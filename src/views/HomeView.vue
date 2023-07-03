<template>
  <main>
    <h1>Hello, World :)</h1>
  </main>
</template>

<script setup>

import axios from 'axios';

const testData = async () => {
  const response = await axios.get("dashboard/volume_received_petition");
  console.log(response);
};


//onLoad functions
(async () => {

  testData();

})();


</script>