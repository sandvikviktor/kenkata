<template>
  <div>
    <NavTopRow class="d-none d-lg-block"/>
    <NavMiddleRow class="d-none d-lg-block" /> <!-- Desktop -->    
    <NavBottomRow/>
    <NavMiddleRow class="d-block d-lg-none" /> <!-- Mobile -->
  </div>
</template>

<script>
import NavTopRow from './NavTopRow'
import NavMiddleRow from './NavMiddleRow'
import NavBottomRow from './NavBottomRow'
export default {
  name: 'Navbar',
  components: {
    NavTopRow,
    NavMiddleRow,
    NavBottomRow
  }
}
</script>

<style>

</style>