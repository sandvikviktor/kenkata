<template>
    <li class="d-flex justify-content-between mb-2">
        <div class="d-flex align-items-center">
            <label class="check">
                <input type="checkbox" id="colorcheck" v-model="colorCheck">
                <span :class="color" class="checkmark"></span>            
            </label>
            <small class="shop-link text-capitalize">{{color}}</small>
        </div>
        <small :class="{'bg-kenkata-blue' : colorCheck === true }" class="shop-pills">{{quantity}}</small>
    </li>
</template>

<script>
export default {
    data() {
        return {
            colorCheck: false
        }
    },
    props: ['color', 'quantity']
}
</script>


<style scoped>
.shop-pills {
    border: 1px solid var(--kenkata-gray-lighter);
    border-radius: 5px;
    padding: 0 3px;
}
.black { background-color: black; }
.gray { background-color: var(--kenkata-gray-light); }
.red { background-color: var(--kenkata-red); }
.green { background-color: var(--kenkata-green); }
.orange { background-color: #FFAA00; }
.brown { background-color: #542323; }

/* Customize the label */
.check {
  display: block;
  position: relative;
  padding-left: 20px;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border-radius: 3px;
  z-index: 2;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.check input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.check .checkmark:after {
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 10;
}    
</style>