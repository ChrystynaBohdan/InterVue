<template>
  <div
    class="dropdown"
    :class="{ 'dropdown__active': isOpened }"
    @click="toggleDropdown"
  >
    <div class="dropdown__content">
      <div class="dropdown__content-selected">
        <span v-if="!selectedValues.length">{{ placeholder }}</span>
        <span v-for="item in selectedValues" :key="item.code">{{item.name}}</span>
      </div>
      <svg
        class="arrow"
        :class="{'arrow arrow__up': isOpened}"
        width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.1968 1.86366C11.4897 1.57077 11.4897 1.0959 11.1968 0.803003C10.9039 0.51011 10.4291 0.51011 10.1362 0.803003L11.1968 1.86366ZM5.99984 6L5.46951 6.53033C5.7624 6.82322 6.23727 6.82322 6.53017 6.53033L5.99984 6ZM1.8635 0.803002C1.57061 0.510109 1.09573 0.510109 0.802841 0.803002C0.509947 1.0959 0.509947 1.57077 0.802841 1.86366L1.8635 0.803002ZM10.1362 0.803003L5.46951 5.46967L6.53017 6.53033L11.1968 1.86366L10.1362 0.803003ZM6.53017 5.46967L1.8635 0.803002L0.802841 1.86366L5.46951 6.53033L6.53017 5.46967Z" fill="#A7AAAF"/>
      </svg>
    </div>

    <div class="list" :class="{'list__showUp': isOpened}">
      <div class="list__wrapper" @click.stop>
        <div class="list__options" v-if="isOpened">
          <div class="list__selected" v-if="selectedValues.length">
            <label
              v-for="item in selectedValues"
              :key="item.code"
              class="list__item"
              @click.stop
              @change="selectOption(item.code)"
            >
              <input type="checkbox" checked class="list__checkbox">
              {{item.name}}
            </label>
          </div>
          <div class="list__notSelected">
            <label
              v-for="item in notSelectedValues"
              :key="item.code"
              class="list__item"
              @click.stop
              @change="selectOption(item.code)"
            >
              <input type="checkbox" class="list__checkbox">
              {{item.name}}
            </label>
          </div>
      </div>
      </div>
      <div class="list__bottom">
        <button class="list__btn" @click="resetList">Reset</button>
        <button class="list__btn" @click="updateList">Update</button>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'Dropdown',
  props: ['label', 'options', 'value', 'placeholder'],

  data() {
    return {
      isOpened: false,
      isListBtnDisabled: null,
      selectedValues: [],
      notSelectedValues: [],

      draftList: {
        selected: [],
        notSelected: [],
      },
    }
  },

  methods: {
    toggleDropdown() {
      this.isOpened = !this.isOpened;
    },

    initializeList() {
      this.notSelectedValues = [...this.options];
      this.notSelectedValues.forEach(value => this.draftList.notSelected.push(value.code));
    },

    selectOption(code) {
      const notSelected = this.draftList.notSelected;
      const selected = this.draftList.selected;

      if (selected.includes(code)) {
        const index = selected.findIndex(value => value === code);
        selected.splice(index, 1);
        notSelected.push(code);

      } else {
        const index = notSelected.findIndex(value => value === code);
        notSelected.splice(index, 1);
        selected.push(code);
      }

      this.isListBtnDisabled = !selected.length;
    },

    updateList() {
      event.stopPropagation();
      this.toggleDropdown();

      this.notSelectedValues = this.options.filter(value => this.draftList.notSelected.some(code => value.code === code));
      this.selectedValues = this.options.filter(value => this.draftList.selected.some(code => value.code === code));

      this.$emit('updateSelected', this.selectedValues);
    },

    resetList() {
      event.stopPropagation();
      this.updateList();
      this.draftList.selected = [];
      this.draftList.notSelected = [];
      this.notSelectedValues = [];
      this.selectedValues = [];

      this.options.forEach(value => this.draftList.notSelected.push(value.code));
      this.options.forEach(value => {
        this.notSelectedValues.push(value);
      });

      this.isListBtnDisabled = true;
      this.$emit('updateSelected', this.selectedValues);
    }
  },

  mounted() {
    this.initializeList();
  }
})
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0;
}
.dropdown {
  box-sizing: border-box;
  position: relative;
  display: block;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
}
.dropdown:hover {
  border: 1px solid #ededed;
}
.dropdown__active {
  border: 1px solid #7e8790;
  background-color: #F6F6F6;
}
.dropdown__active:hover {
  border: 1px solid #7e8790;
  background-color: #F6F6F6;
}
.dropdown__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 11px;
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: #191919;
}
.dropdown__content-selected {
  display: flex;
  gap: 10px;
}

.arrow {
  transition: all 0.4s ease-out;
}
.arrow__up {
  transform: rotate(180deg);
}

.disabled {
  cursor: not-allowed;
  background-color: #f5f5f5;
  border: 1px solid #ededed;
}
.list {
  display: none;
  position: absolute;
  top: 50px;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  width: 240px;
  z-index: 1;
  overflow: hidden;
  overflow-y: scroll;
  cursor: default;
}
.list__wrapper {
  max-height: 50vh;
  overflow: hidden;
  overflow-y: scroll;
}
.list__options {
  padding: 0 18px;
  display: flex;
  flex-direction: column;
}
.list__selected {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #b7b9b9;
}
.list__notSelected {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
}
.list__bottom {
  position: sticky;
  background-color: #fff;
  z-index: 2;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid #f5f5f5;
}

.list__btn {
  background-color: transparent;
  outline: none;
  border: 1px solid #9aa0a4;
  border-radius: 4px;
  padding: 4px 6px;
  cursor: pointer;
}

.list__btn:hover {
  background-color: #f5f5f5;
}
.list__item {
  padding: 16px 0;
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
}
.list__checkbox {
  position: relative;
  margin-right: 15px;
  cursor: pointer;
}
.list__checkbox:before {
  content: "";
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  background-color: #fff;
  display: inline-block;
  position: relative;
  bottom: 2px;
  left: 0;
  border: 1.5px solid #5D6164;
  border-radius: 2px;
}
.list__checkbox:checked:before {
  width: 20px;
  height: 20px;
  background-color: #5D6164;
  background-image: url("../assets/checked.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.list__showUp {
  display: flex;
  flex-direction: column;
  width: 240px;
  z-index: 3;
}
.list ::-webkit-scrollbar {
  width: 4px;
}
.list ::-webkit-scrollbar-thumb {
  background: #b7b9b9;
  border-radius: 3px;
}
</style>
