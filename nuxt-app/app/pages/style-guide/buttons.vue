<script setup lang="ts">
import { colourClasses, colorPrimaryRangeClasses, colorSecondaryRangeClasses, colorGreyRangeClasses, colorTertiaryRangeClasses } from "~/data/colorTailwindClasses";

</script>

<template>

  <section class="wrapper flow">
    <h1>Buttons</h1>    

    <AlpineFor
      class="tw:flex tw:gap-sm"
      :data="{
        buttons: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ],
      }"
      items="buttons"
      item="button"
      item-key="button"
    >
      <template #item>
        <button
          v-pre
          type="button"
          :class="'btn btn-' + button"
          x-text="button.charAt(0).toUpperCase() + button.slice(1)"
        ></button>
      </template>
    </AlpineFor>    

    <h3>Inverted Buttons</h3>
    <AlpineFor
      class="tw:flex tw:gap-sm tw:bg-primary tw:p-md"
      :data="{
        buttons: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ],
      }"
      items="buttons"
      item="button"
      item-key="button"
    >
      <template #item>
        <button
          v-pre
          type="button"
          :class="'btn btn-' + button + ' ' + 'btn-inverted'"
          x-text="button.charAt(0).toUpperCase() + button.slice(1)"
        ></button>
      </template>
    </AlpineFor>    

    <h3>Outline Buttons</h3>
    <AlpineFor
      class="tw:flex tw:gap-sm tw:p-md"
      :data="{
        buttons: [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ],
      }"
      items="buttons"
      item="button"
      item-key="button"
    >
      <template #item>
        <button
          v-pre
          type="button"
          :class="'btn btn-' + button + ' ' + 'btn-outline'"
          x-text="button.charAt(0).toUpperCase() + button.slice(1)"
        ></button>
      </template>
    </AlpineFor>

    <div>
      <Button type="solid" modifier="wide">Primary</Button>
    </div>

    <div>
      <Button type="solid" modifier="square">
        <Icon name="bx:package" />
      </Button>
    </div>

    <div>
      <Button type="solid" modifier="circle">
        <Icon name="bx:package" />
      </Button>
    </div>

    <div>
      <button type="button" class="btn btn-link">Link</button>
    </div>    

    <div>
      <a class="btn btn-primary" href="#" role="button">Link</a>
      <button class="btn btn-primary" type="submit">Button</button>
      <input class="btn btn-primary" type="button" value="Input" />
      <input class="btn btn-primary" type="submit" value="Submit" />
      <input class="btn btn-primary" type="reset" value="Reset" />
    </div>

    <div>
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-light">Light</button>
      <button type="button" class="btn btn-outline-dark">Dark</button>
    </div>

    <div>
      <button type="button" class="btn btn-primary btn-lg">Large button</button>
      <button type="button" class="btn btn-secondary btn-lg">
        Large button
      </button>
    </div>

    <div>
      <button type="button" class="btn btn-primary btn-sm">Small button</button>
      <button type="button" class="btn btn-secondary btn-sm">
        Small button
      </button>
    </div>

    <div>
      <button
        type="button"
        class="btn btn-primary"
        style="
          --bs-btn-padding-y: 0.25rem;
          --bs-btn-padding-x: 0.5rem;
          --bs-btn-font-size: 0.75rem;
        "
      >
        Custom button
      </button>
    </div>
  </section>
</template>